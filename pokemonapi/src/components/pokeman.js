import react from 'react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Pokeman = (props) => {
    const [responseData, setResponseData] = useState([]);
        useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
      .then(response=>{setResponseData(response.data.results)})
    }, []);
    return(
      <div>
          {responseData.map((pokeman,index)=>{
              return(
                  <div key={index}>
                      {pokeman.name}
                  </div>
              )
          })}
      </div>
    )
}

export default Pokeman;