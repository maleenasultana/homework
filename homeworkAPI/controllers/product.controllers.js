const db = require("./model");
const Product=db.product;
const Op = db.sequelize.Op;

const product= {
    name: req.body.name,
    description:req.body.description,
    cost:req.body.cost,
    categoryId:req.body.categoryId
    
}