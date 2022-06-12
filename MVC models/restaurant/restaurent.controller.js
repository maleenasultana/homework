const db =require("./restaurant.MVCmodel");
const restaurant= db.restaurant;
const Op = db. sequelize.Op;

exports.create=(req,res)=>{
    const restaurant= {
        resName: req.body.resName,
        dishes: req.body.dishes,
        description: req.body.description,
        cost: req.body.cost
      
    }

    restaurant.create(restaurant)
    .then(restaurant=> {
        console.log(` restaurantName: [ ${restaurant.name}] got inserted in db`);
        res.status(200).send(restaurant);
    })
    .catch(err => {
        console.log(`Issue in inserting restaurant name: [ ${restaurant.name}]. Error Message: ${err.message}`);
        res.status(500).send({
            message: "Some internal error while storing the restaurant"
        })
    })
}
exports.findAll =(req,res)=>{
    let resName=req.query.resName;
    if(restaurant){
        promise=restaurant.findAll({
            where: {restaurant }
        });
    }else{
        promise= restaurant.findAll();
    }
    promise.then(restaurant =>{
        res.status(200).send(restaurant);
    })
    .catch(500).send({
        message:"Problem in reaching restaurant"
    })
}