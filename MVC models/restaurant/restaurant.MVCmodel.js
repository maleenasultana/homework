module.exports = (sequelize,sequelize)=>{
    const restaurant=sequelize.define("restaurant",{
        id: {
            type:sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        resName:{
            type:sequelize.STRING,
            allowNull:false
        },
        dishes:{
            type: sequelize.STRING,
            allowNull: false
        },
        description: {
            type:sequelize.STRING,
          
        },
            cost: {
                type:sequelize.INTEGER,
                allowNull:false
       },
       },   {
             tableName:"restaurants"
            })
            return restaurant;
        
    }