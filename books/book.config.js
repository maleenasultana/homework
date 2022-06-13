const Sequelize =require('sequelize');
const sequelize = new Sequelize('homework','root','rootpassword',{
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("Error"+err);
});