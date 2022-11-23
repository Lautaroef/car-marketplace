// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Car from 'server/models/car';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  /********************** GET **********************/
  if (req.method === 'GET') {
    const { carID } = req.query;
    const car = await Car.findOne({ _id: carID });

    if (!car) {
      res.status(404).json({
        success: false,
        msg: `The id provided (${carID}) does not match with any of the existing cars`,
      });
    }

    res.status(200).json({ success: true, car });
    /********************** DELETE **********************/
  } else if (req.method === 'DELETE') {
    const { carID } = req.query;
    const car = await Car.findOneAndDelete({ _id: carID });

    if (!car) {
      res.status(404).json({
        success: false,
        msg: `The id provided (${carID}) does not match with any of the existing cars`,
      });
    }

    res.status(200).json({ success: true, car });
  }
}
