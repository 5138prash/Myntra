const isAdmin = (req, res, next) => {
    try {
      // `req.user` should already be set by the authentication middleware
      if (req.user && req.user.role === "admin") {
        next(); // Proceed to the next middleware/controller
      } else {
        return res.status(403).json({ message: "Access denied. Admins only." });
      }
    } catch (error) {
      return res.status(500).json({ message: "Server error in isAdmin middleware", error: error.message });
    }
  };
  
  export default isAdmin;
  