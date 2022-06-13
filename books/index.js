const express= require("express");
const bodyParser= require('body-parser');
const indexConfig=require("./book.config");
const app =express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const db = require("./book.model");
const book = db.book;

// db.sequelize.sync({force: true})
// .then(() => {
//     console.log('tables dropped and created');
//     init();
//})
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
    console.log(`Application started on the port no : ${PORT}`)
})