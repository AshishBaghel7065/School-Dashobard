
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import adminModel from "../model/admin.model.js";

export const AdminLogin = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({
      message: "Email or password is missing.",
      success: false,
      error: true,
    });
  }

  try {
    // Find the admin in the database
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        message: "Admin details are missing.",
        success: false,
        error: true,
      });
    }
    if (admin.password !== password) {
      return res.status(401).json({
        message: "password is Wrorng",
        succes: false,
        error: true,
      });
    }
  

    // Generate JWT with 7-day expiration
    const token = jwt.sign({ adminId: admin._id }, process.env.SECRET_KEY, {
      expiresIn: "7d", // Token valid for 7 days
    });

 
    return res.status(200).json({
      message: "Admin logged in successfully.",
      success: true,
      error: false,
      token
    });
  } catch (error) {
    console.error("Error during admin login:", error);
    return res.status(500).json({
      message: "An error occurred while processing your request.",
      success: false,
      error: true,
    });
  }
};
