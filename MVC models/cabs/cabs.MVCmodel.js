const sequelize= require("sequelize");


module.exports = (sequelize,sequelize)=>{
const cab=sequelize.define("cab",{
    id: {
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    driverName:{
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type:sequelize.STRING,
      
    },
        fare: {
            type:sequelize.INTEGER,
            allowNull:false
   },
   },   {
         tableName:"cabs"
        })
        return cab;
    
}
