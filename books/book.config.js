const Sequelize =require('sequelize');
const sequelize = new Sequelize('homework','root','rootpassword',{
    host:'127.0.0.1',
    dialect:'mysql'
});
sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("Error"+err);
});