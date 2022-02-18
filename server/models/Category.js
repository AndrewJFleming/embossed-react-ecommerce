import mongoose from "mongoose";

const CategorySchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: false },
    img: { type: String, required: true },
    isSlide: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
