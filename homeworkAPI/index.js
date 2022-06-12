const express = require("express");
const indexconfig= require('./config/index.config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const db =require('./model');

const product =db.product;

bodyParser.sequelize.sync({force:true})
.then(()=>{
console.log("tables dropped and created");
init();
})
function init() {
    var Products = [
        {
            name:"Story Books",
            description:" top selected fictional collection",
            cost: 2000
        },
        {
          name: "fashion accessories",
          description:"fashion accessories for women",
          cost: 5000
        }];
product.bulkCreate(Products)
.then(()=>{
  console.log("product table initialised");
})
.catch(err=>{
console.log("Error while initialising products table");
})
        
    
}
require('./routes/product.routes')(app);

app.get("/",(req,res)=>{
    res.send("This API is working...for homework folder")
});

app.listen(8080,()=>{
    console.log('Server started on PORT 8080.....')
});