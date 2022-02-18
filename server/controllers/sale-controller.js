import Sale from "../models/Sale.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET PRODUCT BY ID
export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    res.status(200).json(sale);
  } catch (err) {
    res.status(500).json(err);
  }
};

//CREATE
export const createSale = async (req, res) => {
  const newSale = new Sale(req.body);

  try {
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (err) {
    res.status(409).json({ message: error.message });
    console.log(err);
  }
};

//UPDATE CART
export const updateSale = async (req, res) => {
  try {
    const updatedCart = await Sale.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};

//DELETE CART ITEM
export const deleteSale = async (req, res) => {
  try {
    await Sale.findByIdAndDelete(req.params.id);
    res.status(200).json("Sale deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};
