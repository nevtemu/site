import React from 'react'
import Flag from './Flag.js';

const Card = ({fullName, area, population, capital, numberOfDistricts, id}) => {
        return (
            <div className="region-container">
                <div>{fullName.EN}</div>
                <div>Area: {area}</div>
                <div>Population: {population}</div>
                <div>Capital: {capital}</div>
                <div>Number of raions: {numberOfDistricts}</div>
                <Flag region={id} style={{width:100+'px'}}/> 
            </div>
        )
}
export default Card;