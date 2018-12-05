import React from 'react';
import Images from './common/Images';
import Area from './common/Area';
import Price from './common/Price';
import Address from './common/Address';
import './common.css';
import { connect } from 'react-redux';

const Card = (
    {
        fullAddress, 
        area, 
        price, 
        images, 
        addTemplates,
        isActiveFirst,
        isActiveSecond,
        isActiveThree,
       }) => {


    const paint = (str, el, status) => {
        return str === "IMAGE" ? 
            <Images images={images} 
                pr={el.hasOwnProperty('children') ? 
                paint(el.children[0].component, el, true)  : null} 
                status={status}/> : str === "ADDRESS" ? 
                <Address fullAddress={fullAddress} 
                status={status}/> : str === "PRICE" ? 
                <Price price={price} status={status}/> : 
                str === "AREA" ? <Area area={area} status={status}/> : null;
    }
    return (
        <div>
            

            {isActiveFirst && 
                <div className='card'>
                {addTemplates.length !== 0 ?
                addTemplates[0].template.map(el =>paint(el.component, el , false))  
                 : <span>loading</span>}
                </div>
            }
            {isActiveSecond && 
                <div className='card'>
                    {addTemplates.length !== 0 ?
                    addTemplates[1].template.map(el =>paint(el.component, el , false))  
                    : <span>loading</span>}
                </div>
            }

            {isActiveThree && 
            <div className='card'>
                    {addTemplates.length !== 0 ?
                    addTemplates[2].template.map(el =>paint(el.component, el , false))  
                    : <span>loading</span>}
                </div>
        }
        </div>
    );
};

const MSTP = (store) => ({
    isActiveFirst: store.isActiveFirst,
    isActiveSecond:  store.isActiveSecond,
    isActiveThree: store.isActiveThree,
})


export default connect(MSTP, null)(Card);