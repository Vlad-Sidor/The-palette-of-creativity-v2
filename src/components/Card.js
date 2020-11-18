import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, city, address, bedrooms, bathrooms, carSpaces} = property;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture}z />
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;