import express from "express";

import {
  getSales,
  getSaleById,
  createSale,
  deleteSale,
  updateSale,
} from "../controllers/sale-controller.js";

//use auth as second arg for requests requiring user verification
import auth from "../middleware/auth.js";

const router = express.Router();

// router.get("/search", getPostsBySearch);
router.get("/", getSales);
router.get("/find/:id", getSaleById);

//ADMIN ROUTES
router.post(
  "/",
  // auth,
  createSale
);
router.put(
  "/:id",
  // auth,
  updateSale
);
router.delete("/:id", deleteSale);

export default router;
