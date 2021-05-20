const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/product', ProductController.createProduct);
    app.put("/api/product/:id/edit", ProductController.updateExistingProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
    app.get('/api/products/:id', ProductController.getProduct);
}