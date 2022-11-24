import dbConnect from 'server/db/connect';
import Car from 'server/models/car';

export async function getCars() {
  await dbConnect();
  const cars = await Car.find({});
  return cars;
}

export async function getCar(id: string) {
  await dbConnect();
  const car = await Car.findById(id);
  return car;
}
