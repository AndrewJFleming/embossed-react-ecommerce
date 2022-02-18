//hashes passwords
import bcrypt from "bcryptjs";
//safe way for us to store users in browser for a period of time
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const adminSignin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    if (!existingUser.isAdmin)
      return res
        .status(401)
        .json({ message: "Unauthorized; You lack admin privileges." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password." });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.log("Failed to signin.");
    res.status(500).json({ message: "Failed to sign in." });
  }
};

export const signin = async (req, res) => {
  console.log(req);
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password." });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Failed to sign in." });
  }
};

export const signup = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ username });

    if (existingUser)
      return res.status(400).json({ message: "User already exists." });
    //Second arg is 'salt' (password difficulty)
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      username,
      email,
      password: hashedPassword,
      isAdmin,
    });

    const token = jwt.sign(
      { username: result.username, id: result._id },
      "test",
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Failed to signup." });
  }
};

export const updateUser = async (req, res) => {
  //Check for missing fields to ensure user doesn't update w/ blank values.
  if (!req.body.username || !req.body.email)
    return res.status(400).json({ message: "Missing inputs" });

  let existingUser;
  try {
    existingUser = await User.findOne({ _id: req.params.id });
    console.log(existingUser);
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      req.body.currentPassword,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password." });

    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user." });
  }
};
export const adminUpdateUser = async (req, res) => {
  //Check for missing fields to ensure user doesn't update w/ blank values.
  if (!req.body.username || !req.body.email)
    return res.status(400).json({ message: "Missing inputs" });

  let existingUser;
  try {
    existingUser = await User.findOne({ _id: req.params.id });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    //Unlike client Account component req, the admin can bypass currentPassword check.
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    } else {
      //Remove password prop from req.body to avoid updating with blank password value.
      delete req.body.password;
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update user." });
  }
};

//GET ALL USER
export const getUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET USER
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
