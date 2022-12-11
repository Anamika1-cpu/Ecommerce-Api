const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  deleteReview,
  getProductReviews,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.get(
  "/products",
  isAuthenticatedUser,

  getAllProducts
);

authorizeRoles("admin"),
  router.post(
    "/admin/product/new",
    isAuthenticatedUser,
    authorizeRoles("admin"),
    createProduct
  );

router.put(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);

router.delete(
  "/admin/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

router.get("/product/:id", getProductDetails);

router.put("/review", isAuthenticatedUser, createProductReview);

router.get("/reviews", getProductReviews);

router.delete("/reviews", isAuthenticatedUser, deleteReview);

module.exports = router;
