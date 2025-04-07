import User from "../models/user.model.js";
import { verifyToken } from "../utils/jwt.js";

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1] || null;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    const decoded = verifyToken(token);
    if (!decoded?.id) {
      return res.status(403).json({ message: "Unauthorized: Invalid token" });
    }

    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "Authorization Failed",
      error: error.message,
    });
  }
};

export default authentication;
