const productControllers = require("../controllers/product.controllers");

module.exports = function(app){
    app.post("homework/api/v1/products",productController.create);
    app.get("homework/api/v1/products",productControllers.findAll);
    app.get("homework/api/v1/products",productControllers.findOne);
}