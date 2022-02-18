import mongoose from "mongoose";

const SaleSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: false },
    img: { type: String, required: false },
    percentOff: { type: Number, default: 0, required: true },
    productId: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Sale", SaleSchema);
