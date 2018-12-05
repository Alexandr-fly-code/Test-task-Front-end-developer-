import React from 'react';
import './childrenCommon.css';

const Price = ({price, status}) => {
    return (
        <p className={status ? 'price' : null}>Цена : {price}</p>
    );
}

export default Price;
