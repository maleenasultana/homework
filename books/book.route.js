const bookController= require("./books.controller");

module.exports = function(app){
    app.post("homework/api/v1/books",bookController.create);
    app.get("homework/api/v1/books",bookController.findAll);
    app.get("homework/api/v1/books",bookController.findOne);
    app.put("homework/api/v1/books",bookController.update);
    app.delete("homework/api/v1/books",bookController.delete);
}