import { Schema, model } from "mongoose";

type Size = "Small | Small-Medium | Medium | Medium-Large | Large";

export interface IPet {
  breed: string;
  price: number;
  size: Size;
  sheds: boolean;
  coatLength: "Short | Medium | Long";
  grooming: string;
  lifeSpan: number;
  shortDesc: string;
  longDesc: string;
  imageUrl: string;
}

const petSchema = new Schema<IPet>(
  {
    breed: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    sheds: { type: Boolean, required: true },
    coatLength: { type: String, required: true },
    grooming: { type: String, required: true },
    lifeSpan: { type: Number, required: true },
    shortDesc: { type: String, required: true },
    longDesc: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IPet>("Pet", petSchema);
