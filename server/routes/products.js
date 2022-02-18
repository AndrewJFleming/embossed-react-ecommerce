import express from "express";

import {
  getProducts,
  getProductById,
  // getPostsBySearch,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product-controller.js";

//use auth as second arg for requests requiring user verification
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/find/:id", getProductById);

//Admin routes
router.post(
  "/",
  // auth,
  createProduct
);
router.put(
  "/:id",
  // auth,
  updateProduct
);
router.delete(
  "/:id",
  // auth,
  deleteProduct
);

export default router;
