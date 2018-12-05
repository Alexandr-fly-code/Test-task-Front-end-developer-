import React from 'react';
import './childrenCommon.css';

const Area = ({area, status}) => {
    return (
        <p className={status ? 'abs' : null}>
        {area !== undefined ?  `Район : ${area}`: 'Неизвестный'}
        </p>
    );
}

export default Area;
