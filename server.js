const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

class User {
constructor() {
  this._id= faker.random.uuid();
    this.firstName= faker.name.firstName();
    this.lastName= faker.name.lastName();
    this.phoneNumber= faker.phone.phoneNumber();
    this.email= faker.internet.email();
    this.password= faker.internet.password();
  }
}
class Company {
constructor() {
  this._id= faker.random.uuid();
  this.name= faker.company.companyName();
  this.address= faker.address.streetName();
    this.street= faker.address.city();
    this.state= faker.address.state();
    this.zipCode= faker.address.zipCode();
    this.country= faker.address.country();
  }
}
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get('/api/users/new', (req, res) =>{
  var user = new User();
  res.json({ results: user });
})
app.get('/api/company/new', (req, res) =>{
  var company = new Company();
  res.json({ results: company });
})
app.get('/api/user/company', (req, res) =>{
  var user = new User();
  var company = new Company();
  res.json({ results: company, user: user });
})

const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );
