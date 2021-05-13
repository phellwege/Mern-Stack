import axios from 'axios';
import React, { useEffect, useState } from 'react';

const People = (props) => {
    const { id } = props;
    const [person, setPerson] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        getPerson();
    }, [id])

    const getPerson = () => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
            .then(response => {
                setPerson(response.data);
                setError(false);
            })
            .catch(err => {
                setError(true);
        });
    }

    let content = (
        error ?
        <p>These aren't the droids you're looking for.</p>
        :
        <div>
            <h1>{ person.name }</h1>
            <div>
                <ul>
                    <li>Height: { person.height }</li>
                    <li>Mass: { person.mass }</li>
                    <li>Hair Color: { person.hair_color }</li>
                    <li>Skin Color: { person.skin_color }</li>
                </ul>
            </div>
        </div>
    )
    return (
        <>
            {content}
        </>
    )
}

export default People;
