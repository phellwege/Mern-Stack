import axios from 'axios';
import React, { useState } from 'react'
import { Router, navigate} from '@reach/router';
import People from './people';
import Planets from './planets';

const Home = () => {

    const [category, setCategory] = useState("people");
    const [id, setId] = useState("");

    const HandleCategory = (e) => {
        setCategory(e.target.value)

    }

    const Search = (e) => {
        e.preventDefault();

        // const newSearch = {category,id};
    }

    const onSubmit = e => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return (
        <div>

            <h1>Welcome!</h1>
            <form onSubmit={onSubmit}>
                <label>Search for: </label>
                <select onChange={HandleCategory}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID: </label>
                <input onChange={(e) => setId(e.target.value)} type="number"></input>
                <button>Search</button>
            </form>
            <Router>
                <People path="/people/:id"/>
                <Planets path="/planets/:id" />
            </Router>
        </div>
    )
}

export default Home;