import React from 'react';
import './Country.css'
const Country = (props) => {
    const{name, capital, population, flag, region}=props.country; // destructuring
    return (
        <div className='country'>
            <h4>{name}</h4>
            <img src={flag} alt="" />
            <p>Region: {region}</p>  
            <p>Capital: {capital}, Population: {population}</p>         
        </div>
    );
};

export default Country; 