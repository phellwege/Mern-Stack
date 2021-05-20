const AuthorController = require('../controllers/author.controller');
module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/author', AuthorController.createAuthor);
    app.put("/api/author/:id/edit", AuthorController.updateExistingAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthor);
}