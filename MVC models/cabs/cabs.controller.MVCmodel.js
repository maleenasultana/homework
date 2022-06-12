const db =require("./cabs.MVCmodel");
const cab= db.cab;
const Op = db. sequelize.Op;

exports.create=(req,res)=>{
    const cab = {
        name: req.body.name,
        drivername: req.body.drivername,
        description: req.body.description,
        fare: req.body.fare
      
    }

    cab.create(cab)
    .then(cab=> {
        console.log(` name: [ ${cab.name}] got inserted in db`);
        res.status(200).send(cab);
    })
    .catch(err => {
        console.log(`Issue in inserting cab name: [ ${cab.name}]. Error Message: ${err.message}`);
        res.status(500).send({
            message: "Some internal error while storing the cab"
        })
    })
}
exports.findAll =(req,res)=>{
    let cabName=req.query.name;
    if(cab){
        promise=cab.findAll({
            where: {cab }
        });
    }else{
        promise= cab.findAll();
    }
    promise.then(cabs =>{
        res.status(200).send(cabs);
    })
    .catch(404).send({
        message:"not available"
    })
}