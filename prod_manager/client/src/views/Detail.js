import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {navigate} from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productId)
            .then(res => {
                removeFromDom(productId)
                navigate('/')
            })
    }
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => {
                console.log(res.data)
                setProduct(res.data)
            })
    }, []);
    
    return (
        <>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
                <br/>
                <Link to={"/products/" + product._id + "/edit"}>
                    Edit
                </Link>
                <br/>
                <button onClick={(e)=>{deleteProduct(product._id)}}>
                    Delete
                </button>
                <br/>
        </>
    )
}
