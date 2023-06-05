import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      maxLength: 20,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      maxLength: 400,
      required: true,
    },
    size:{
    type:Array
    },
    color:{
      type:Array
    },
    imgUrl: {
      type: String,
    },
    tags: {
      type: [
        {
          type: String,
          enum: ['escuela', 'elegante', 'deportivo', 'casual', 'formal'],
        },
      ],
    },
    hot: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
export default mongoose.model('Product', ProductSchema);
