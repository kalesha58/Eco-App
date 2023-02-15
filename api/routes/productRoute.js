const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controller/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/admin/product/:id").put(isAuthenticatedUser,authorizeRoles("admin") ,updateProduct);
router.route("/admin/product/:id").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteProduct);
router.route("/product/:id").get(getProductDetails);
// {======REVIEWS========}
router.route("/review").put(isAuthenticatedUser, createProductReview);
router.route("/review").get(getProductReviews);
router.route("/review").delete(isAuthenticatedUser, deleteReview);

module.exports = router;
