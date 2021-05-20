const express = require("express");
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");
// mongoose.config could be changed to export a function that lets us pass in a db_name like we pass app into the function that our routes file exports
// const db_name = "my_db";
// require("./config/mongoose.config")(db_name);

const app = express();

// req.body undefined without this!
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true })); // This is new

module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => response.json(authors))
        .catch(err => response.json(err))
}

require('./routes/author.routes')(app);
app.listen(port, () =>
    console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);
