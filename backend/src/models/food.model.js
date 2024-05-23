import { model, Schema, Types } from 'mongoose';
export const FoodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Types.Decimal128, required: true },
    tags: { type: [String] },
    favorite: { type: Boolean, default: false },
    stars: { type: Number, require: true },
    imageUrl: { type: String, required: true },
    origins: { type: [String], required: true },
    cookTime: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.price = ret.price ? ret.price.toString() : ret.price;
        return ret;
      },
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);
export const FoodModel = model('food', FoodSchema);
