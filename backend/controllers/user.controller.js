import User from "../models/user.model.js";
import { createToken } from "../utils/jwt.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json("Invalid Creadentials");
    }

    const passwordMatch = await user.matchPassword(password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Creadentials" });
    }
    const token = createToken({ id: user._id });
    res.cookie("authToken", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000),
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "None",
    });
    return res.status(200).json({ message: "Logged in successfully", token , user});
  } catch (error) {
    res.status(500).json({ message: "Failed to Login", error: error.message });
  }
};

const logout = async (req, res) => {
  res.clearCookie("authToken");
  return res.status(200).json({ message: "Logged out successfully" });
};

const deleteUser = async (req, res) => {
  try {
   
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error in deleting user", error: error.message });
  }
};

export { register, login, logout, deleteUser };
