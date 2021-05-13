import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Planets = props => {
    const { id } = props;
    const [planet, setPlanet] = useState({
        name: "",
        climate: "",
        terrain: "",
        surface_water: "",
        population: "",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        getPlanet();
    }, [id])

    const getPlanet = () => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
            .then(response => {
                setPlanet(response.data);
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
            <h1>{ planet.name }</h1>
            <div>
                <ul>
                    <li>Climate: { planet.climate }</li>
                    <li>Terrain: { planet.terrain }</li>
                    <li>Surface Water: { planet.surface_water }</li>
                    <li>Population: { planet.population }</li>
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

export default Planets;
