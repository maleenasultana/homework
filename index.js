const express= require("express");
const bodyParser= require('body-parser');
const indexConfig=require("./books/book.config");
const bookrouter=require("./books/book.route");
const app =express();

const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const db = require("./books/book.model");
const book = db.book;

app.get('/',(req,res)=>{
    res.send("This API is working")
});


// 
function init() {
    var books = [
        {
            name: "JavaScript",
            description: "This book contains fundamentals of JavaScript",
            author:"Brendan Eich",
            categoryName:"Non-fiction",
            cost:2800
        }, 
        {
            name: "The Beauty And The Beast",
            description: "This book contains an entertaining, engaging and beautiful story ",
            author: "gabrielle-Suzanne Barbot de Villeneuve",
            cost:2500
        }];
    } 
    init();
    require('./books/book.route')(app)



app.listen(indexConfig.PORT, () => {
    console.log(`Application started on the port no : ${PORT}`);
})