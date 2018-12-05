import React from 'react';
import './childrenCommon.css';

const Address = ({fullAddress, status}) => {
    return (
        <p className={status ? 'abs' : null}>Адрес : {fullAddress}</p>
            
    );
}

export default Address;
