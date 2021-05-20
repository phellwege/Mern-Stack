import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import {navigate} from '@reach/router';

export default props => {
    const [author, setAuthor] = useState({})
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                navigate('/')
            })
    }
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors/" + props.id)
            .then(res => {
                setAuthor(res.data)
            })
    }, []);
    
    return (
        <>
        <Link to={"/"}>Home</Link>
            <h1>Name:</h1> <p>{author.name}</p>
                <br/>
                <Link to={"/authors/" + author._id + "/edit"}>
                    Edit
                </Link>
                <br/>
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                    Delete
                </button>
                <button><Link to={"/"}>Cancel</Link></button>
                <br/>
        </>
    )
}
