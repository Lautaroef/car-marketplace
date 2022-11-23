import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'server/utils/cloudinary';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { resources } = await cloudinary.search
    .expression('folder:cars_images')
    .sort_by('public_id', 'desc')
    .max_results(25)
    .execute();

  // const publicIds = resources.map((file) => file.public_id);
  const imagesURLs = resources.map((file: any) => file.secure_url);

  res.status(200).send(imagesURLs);
}
