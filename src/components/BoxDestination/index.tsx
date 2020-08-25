import React from 'react';

import './styles.css';

interface BoxDestinationProps{
    image: string;
    city: string;
    country: string;
}

const BoxDestination: React.FC<BoxDestinationProps> = ({ image, city, country }) => {
    return (
        <div className="destination">
            <img src={image} alt={city}/>

            <div>
                <h3>{city}</h3>
                <p>{country}</p>
            </div>
        </div>
    );
}

export default BoxDestination;