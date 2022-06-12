
const sequelize = require("sequelize");

const Product = sequelize.define("product",{
    id: {
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name: {
        type: sequelize.STRING,
        allowNull :false
    },
    description: {
        type:sequelize.STRING,
        allowNull : false
    },
    cost : {
        type : sequelize.INTEGER,
        allowNull: false
    },
    categoryId: {
        type:sequelize.INTEGER,
        allowNull:false
    },
},{
    tableName:'Products'


});