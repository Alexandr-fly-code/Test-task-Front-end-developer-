import React from 'react';
import './childrenCommon.css';

const Images = ({images, pr}) => {
    return (
        <div className='box' >
            <img className='img' src={images} alt="some_place"/>{pr}
        </div>
    );
}

export default Images;
