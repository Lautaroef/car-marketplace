import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from 'server/db/connect';
import Car from 'server/models/car';
import cloudinary from 'server/utils/cloudinary';

type Data = {
  cars: Car[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  await dbConnect();
  /********************** GET **********************/
  if (req.method === 'GET') {
    /*
    req.query comes like this:
    {'{"make":"","model":"","minYear":"1995","maxYear":"2022","minPrice":"0","maxPrice":"5000000","minHorsepower":"50","maxHorsepower":"900","sort":"-year","page":"1"}': ''}
    */
    // const query = JSON.parse(Object.keys(req.query)[0]);
    // console.log(query);
    const query = req.query;

    const { make, model, sort, page = 1, limit = 25 } = query;
    const currentYear = new Date().getFullYear();
    const {
      minYear = 0,
      maxYear = currentYear,
      minPrice = 0,
      maxPrice = Infinity,
      minHorsepower = 0,
      maxHorsepower = Infinity,
    } = query;

    const queryObject: any = {};
    if (make) {
      // const arrOfMakers = make.split(',');
      // queryObject.make = { $in: arrOfMakers };
      queryObject.make = { $regex: make, $options: 'i' };
    }
    if (model) {
      queryObject.model = { $regex: model, $options: 'i' };
    }
    if (minYear && maxYear) {
      queryObject.year = { $gte: minYear, $lte: maxYear };
    }
    if (minPrice && maxPrice) {
      queryObject.price = { $gte: minPrice, $lte: maxPrice };
    }
    if (minHorsepower && maxHorsepower) {
      queryObject.horsepower = { $gte: minHorsepower, $lte: maxHorsepower };
    }

    // https://mongoosejs.com/docs/queries.html
    let result = Car.find(queryObject);
    console.log('queryObject:', queryObject);

    // https://mongoosejs.com/docs/api.html#query_Query-sort
    if (sort) {
      //@ts-ignore
      result = result.sort(sort);
    } else {
      result = result.sort('price');
    }

    // Pagination system using .skip() and .limit()
    const skip = (Number(page) - 1) * Number(limit);

    result = result.skip(skip).limit(Number(limit));

    const cars = await result;

    res.status(200).send({
      // @ts-ignore
      nbCars: cars.length, // @ts-ignore
      cars,
    });
    /********************** POST **********************/
  } else if (req.method === 'POST') {
    try {
      const base64EncodedImage = req.body.img_url;

      const uploadedResponse = await cloudinary.uploader.upload(base64EncodedImage, {
        upload_preset: 'cars_images',
      });
      console.log(uploadedResponse);

      const parsedBody = req.body;
      parsedBody.img_url = uploadedResponse.secure_url;

      // public_id: uploadedResponse.public_id,

      const car = await Car.create(parsedBody); // @ts-ignore
      res.status(201).json({ success: true, car });
    } catch (error) {
      console.log(error); // @ts-ignore
      res.status(201).json({ success: false, error: error });
    }
  }
}
