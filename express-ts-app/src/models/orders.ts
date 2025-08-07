import mongoose, { Schema } from "mongoose";

const order: Schema = new Schema({
  orderId: {
    type: Number,
    required: true,
    unique: true,
  },

  customerName: {
    type: String,
    required: true,
  },

  orderDate: Date,

  status: {
    type: String,
    enum: ["Pending", "Shipped", "Delivered"],
    required: true,
  },

  totalAmount: {
    type: Number,
  },
  items: [
    {
      productName: {
        type: String,
        required: true,
      },

      quantity: {
        type: Number,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },
    },
  ],
});
export const Orders = mongoose.model("Orders", order);
