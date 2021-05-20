import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router'
import { Link } from '@reach/router';

export default (props) => {
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState(null);
    //handler when the form is submitted

    const onSubmitHandler = e => {
        e.preventDefault();
        const data = {
            name: name
        };
        axios.post('http://localhost:8000/api/author',
            data,
        )
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }
    return (
        <>
        <Link to={"/"}>Home</Link>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <input type="submit"/>

        {errors?.name && (
            <span style={{ color: "red" }}>{errors?.name?.message}</span>
        )}
        </form>
        </>
    )
}
