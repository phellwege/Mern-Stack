import React, { useEffect, useState } from 'react'
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';
import axios from 'axios';
import { Link } from '@reach/router';


export default () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [deleted])


    const addAuthor = (newAuthor) => {
        setAuthors([...authors, newAuthor])
    }
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>
                    New Author
                </Link>
            <hr />
            <h2>All Authors</h2>
            {loaded && <AuthorList authors={authors} setDeleted={setDeleted} deleted={deleted}/>}
            
        </div>
    )
}

