import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchRequest} from './redux/actions/fetchRequestAction';
import { getTemplatesRequest } from './redux/actions/getTemplates';
import Card  from './Card';
import './common.css';
import { isActiveAll } from './redux/actions/isActiveAllTemplate';
import { isActiveFirst } from './redux/actions/isActiveFirstTemplate';
import { isActiveSecond } from './redux/actions/isActiveSecondTemplate';




class MainCard extends Component {
    componentDidMount(){
        this.props.fetchRequest();
        this.props.getTemplatesRequest();
    }
    render() {
        const { getItems, addTemplates } = this.props;
        return (
            <div className='main_card'>
            <div className='wrap_btn'>

                <div 
                    className='first' 
                    onClick={this.props.isActiveFirst}>1 шаблон
                </div>

                <div 
                    className='second' 
                    onClick={this.props.isActiveSecond}>2 шаблон
                </div>

                <div 
                    className='three' 
                    onClick={this.props.isActiveThree}>3 шаблон
                </div>
            </div>
                {getItems.map(({full_address, area, price, images}) => 
                    <Card 
                        fullAddress={full_address} 
                        area={area} 
                        price={price} 
                        images={images[0]}
                        addTemplates={addTemplates}
                        key={price}
                        />
                    )}
            </div>
        );
    }
}
const mapStateToProps = (store) => ({
    getItems: store.getItems,
    addTemplates: store.addTemplates,
})

const mapDispatchToProps = (dispatch) => ({
    fetchRequest:  () => {
        dispatch(fetchRequest())
    },
    getTemplatesRequest: () => {
        dispatch(getTemplatesRequest())
    },
    isActiveThree:  () => {
        dispatch(isActiveAll())
    },
    isActiveFirst: () => {
        dispatch(isActiveFirst())
    },
    isActiveSecond : () => {
        dispatch(isActiveSecond())
    }
})

MainCard.propTypes = {
    isActiveFirst: PropTypes.func,
    isActiveThree: PropTypes.func,
    isActiveSecond:PropTypes.func,
    fetchRequest: PropTypes.func,
    getTemplatesRequest: PropTypes.func,
    addTemplates: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            template: PropTypes.arrayOf(
                PropTypes.shape({
                    component: PropTypes.string.isRequired,
                    field: PropTypes.string,
                })
            ).isRequired,
        })
    ),
    getItems: PropTypes.array.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(MainCard);
