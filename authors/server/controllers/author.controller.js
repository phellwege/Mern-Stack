const { Author } = require('../models/author.model');
module.exports = {
    index:(request, response) => {
        Author.find().sort({name:1})
        .then(data => response.json({results:data}))
        .catch(err => response.json(err.errors));
},
createAuthor: (request, response) => {
    Author.create( request.body )
        .then(data => response.json(data))
        .catch(err => {
            response.status(400).json(err);
        });
        
},

getAuthor: (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

getAllAuthors: (request, response) => {
    Author.find({})
        .then(data => response.json(data))
        .catch(err => response.json(err.errors))
},

updateExistingAuthor: (request, response) => {
    Author.findOneAndUpdate({_id:request.params.id}, request.body, {new:true, runValidators:true})
        .then(updateExistingAuthor => response.json(updateExistingAuthor))
        .catch(err => response.json(err.errors));
},

deleteAuthor: (request, response) => {
    Author.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err.errors))
}
}