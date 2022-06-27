const express= require("express");
const router = express.Router();
const bookController= require("./book.controller");


module.exports = function(app){
    app.post("/",[authJwt.validateBookRequest],bookController.create);
    app.get("/",[authJwt.validateBookRequest],bookController.findAll);
    app.get("/:id",[authJwt.validateBookRequest],bookController.findOne);
    app.put("/:id",[authJwt.validateBookRequest],bookController.update);
    app.delete("/:id",[authJwt.validateBookRequest],bookController.delete);
    app.get("/:id/user",[authJwt.validateBookRequest],bookController.findAll);
}
