const db = require("./book.model");
const uuid =require("uuid");
const book = db.book;
const User = db.user;

/**
 * create and save a new book
 */
exports.create=(req,res)=>{
      
      const book = {
            name: req.body.name,
            description: req.body.description,
            author: req.body.author,
            categoryName:req.body.categoryName,
            cost: req.body.cost
      };
      book.create(book)
      .then(book=>{
            console.log(`book name: [$book.name]got inserted in the DB`);
            res.status(201).send(category);

      })
      .catch(err =>{
            console.log(`Issue in inserting book name: [${book.name}]`)
            console.log(`Error Message : ${err.message}`)
            res.status(500).send({
                  message:"Some internal error while storing the book!"
            })
      })
}
/**
 * Get a list of all the books
 */

exports.findAll = (req,res)=>{
      let bookName= req.query.name;
      let promise;
      if(bookName){
            promise = book.findAll({
                  where: {
                        name: bookName
                  }
            });
      }else{
            promise = book.findAll();
      }
      promise
      .then(books => {
            res.status(200).send(books);
      })
      .catch(err=>{
            res.status(500).send({
                  message: "Some internal error while fetching the books"
            })
      })
}
/**
 * Get a book based on the book id
 */
exports.findOne=(req,res)=>{
      const bookId= req.params.id;//1

      book.findByPk(bookId)
      .then(book => {
            if(!book){
                  return res.status(404).json({
                        message: 'book not found'
                  })
            }
            res.status(200).send(book);
      })
      .catch(err =>{
            res.status(500).send ({
                  message :"Some internal error while fetching the book based on id"
            })
      })
}
/**
 * update the existing book
 */

exports.update = (req,res) => {
      const book = {
            id:uuid.v4(),
            name: req.body.name,
            description: req.body.description,
            author: req.body.author,
           categoryName:req.body.categoryName,
           cost: req.body.cost
      };
      const bookId= req.params.id

      book.update( book, {
            where: {id:  bookId}
      })
      .then(updatedbook =>{
      
        book.findByPk( bookId)
            .then( book => {
                  res.status(200).send( book);
            })
            .catch(err =>{
                  res.status(500).send({
                        message:"Some internal error while updating the  book based on id"
                  })
           })
      })
      .catch(err =>{
            //where the updation task failed.
            res.status(500).send({
                  message: "Some internal error while updating the  book based on id "
            })
      })
}
/**
 * Delete an existing  book based on  book name
 */

exports.delete=(req,res) => {
      const  bookId =req.params.id;
      book.destroy({
            where: {
                  id:  bookId
            }
      })

.then(result =>{
 res.status(200).send({
        message: "Successfully deleted the  book"
    })
})
.catch(err =>{
      res.status(500).send({
            message: "Some internal error while deleting the  book based on id"
      })
   })
}