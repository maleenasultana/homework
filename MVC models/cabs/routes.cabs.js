const cabController = require("../MVCmodels/cabscontroller");

app.post("/homework/api/v1/cabs" ,cabController.create);


app.get("/homework/api/v1/cabs", cabController.findAll);
