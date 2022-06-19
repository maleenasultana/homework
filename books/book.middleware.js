const Books = require("../models/BookModel");

const validateBookRequest = (req, res, next) => {


   if (!req.body.title) {
       res.status(400).send({
           message: "Title of the book can't be empty !"
       })
       return;
   }
   next();

}

module.exports = { validateBookRequest }