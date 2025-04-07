import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, required: true, min: 1 },
        selectedSize: String,
        selectedColor: String,
      },
    ],
    shippingAddress: {
      fullName: String,
      mobile: String,
      pincode: String,
      city: String,
      state: String,
      street: String,
      landmark: String,
      type: String,
    },
    paymentMethod: String,
    paymentStatus: { 
      type: String, 
      enum: ['Pending', 'Paid', 'Failed', 'Refunded'], 
      default: 'Pending' 
    },
    orderStatus: { 
      type: String, 
      enum: ['Processing', 'Shipped', 'Delivered', 'Cancelled', 'Returned'], 
      default: 'Processing' 
    },
    trackingNumber: String,
    courierPartner: String,
    totalAmount: Number,
    deliveredAt: Date,
    cancelledAt: Date,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
