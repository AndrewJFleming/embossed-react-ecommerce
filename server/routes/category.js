import express from "express";

import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getCatById,
} from "../controllers/category-controller.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/find/:id", getCatById);

//Admin routes
router.post(
  "/",
  // auth,
  createCategory
);
router.delete(
  "/:id",
  // auth,
  deleteCategory
);
router.put(
  "/:id",
  // auth,
  updateCategory
);

export default router;
