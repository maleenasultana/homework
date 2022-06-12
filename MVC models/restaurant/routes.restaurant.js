const restaurantController = require("../MVCmodels/restaurantcontroller");

app.post("/homework/api/v1/restaurant" ,restaurantController.create);

app.get("/homework/api/v1/restaurant", restaurantController.findAll);
