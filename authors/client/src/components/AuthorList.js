import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    const {deleted, setDeleted } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                setDeleted(!deleted)
            })
    }
    return (
        <>
        <div>
            {props.authors.map((author, idx)=>{
                return <p key={idx}>{author.name}
                <button><Link to={`/authors/${author._id}`}>Edit</Link></button> 
                <button onClick={(e)=>{deleteAuthor(author._id)}}>
                    Delete
                </button></p>
            })}
        </div>
        </>
    )
}
