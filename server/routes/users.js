import express from "express";

import {
  signin,
  signup,
  updateUser,
  getUsers,
  getUserById,
  adminUpdateUser,
  deleteUser,
  adminSignin,
} from "../controllers/user-controller.js";

const router = express.Router();

// Signin is post because we must send auth formData from frontend to backend
router.post("/signin", signin);
router.post("/signup", signup);
router.put("/:id", updateUser);

//ADMIN ROUTES
router.post("/admin/signin", adminSignin);
router.get("/", getUsers);
router.get("/find/:id", getUserById);
router.put("/admin/:id", adminUpdateUser);
router.delete("/:id", deleteUser);

export default router;
