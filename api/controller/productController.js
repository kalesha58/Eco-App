const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
// {====================Create-Product=========     ADMIN                ++++=================}
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});
// {========================GET_ALL_PRODCUTS===================}
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

// {========================UPDATE-PRODUCT----------ADMIN----------------===================}
exports.updateProduct = catchAsyncErrors(async (req, res) => {
    let product = Product.findById(req.params.id);
    if (!product) {
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      product,
    });
  });
  // {========================DELETE-PRODUCT--------------------------===================}
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }
  
    await product.remove();
  
    res.status(200).json({
      success: true,
      message: "Product Delete Successfully",
    });
  });

  exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
  
    // if (!product) {
    //   return next(new ErrorHandler("Product not found", 404));
    // }
    if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }
  
    res.status(200).json({
      success: true,
      product,
    });
  });