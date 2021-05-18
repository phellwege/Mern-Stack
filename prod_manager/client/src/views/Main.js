import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';


export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }

    const addProduct = (newProduct) => {
        setProducts([... products, newProduct])
    }
    return (
        <div>
            <ProductForm addProduct={addProduct}/>
            <hr />
            <h2>All Products</h2>
            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            
        </div>
    )
}

