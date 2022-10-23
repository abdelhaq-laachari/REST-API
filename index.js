const express = require("express"); //Import Express
// const Joi = require('joi'); //Import Joi
const app = express(); //Create Express Application on the app variable
app.use(express.json()); //used the json file

//Give data to the server
const customers = [
  { title: "Godfather", id: 1 },
  { title: "Kamal", id: 2 },
  { title: "Marouane", id: 3 },
  { title: "Mohammed", id: 4 },
  { title: "Hicham", id: 5 },
];

// const actors = require('./actors.json')
// const movie = require('./movie.json')

//Read Request Handlers
// Display the Message when the URL consist of '/'
app.get("/", (req, res) => {
  res.send("Welcome to Godfather REST API!");
});

// Display the List Of Customers when URL consists of api customers
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

// Display the Information Of Specific Customer when you mention the id.
app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  //If there is no valid customer ID, then display an error with the following message
  if (!customer)
    res
      .status(404)
      .send({ message: "Ooops... Cant find what you are looking for!" });
  res.send(customer);
});

//PORT ENVIRONMENT VARIABLE
const port = 6000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
