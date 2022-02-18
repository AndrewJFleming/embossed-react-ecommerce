import Category from "../models/Category.js";

//CREATE CATEGORY
export const createCategory = async (req, res) => {
  const newCategory = new Category(req.body);

  try {
    const savedCategory = await newCategory.save();
    res.status(200).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//GET PRODUCT BY ID
export const getCatById = async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    res.status(200).json(cat);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ALL CATEGORIES
export const getCategories = async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE
export const updateCategory = async (req, res) => {
  try {
    const updatedCat = await Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCat);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE CATEGORY
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json("Category deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
