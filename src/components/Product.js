import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {

        const {id,title, img , price , inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value =>(
                            <div className="img-container p-5"
                            onClick={()=> value.handleDetails(id)}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button className="cart-btn" disabled={inCart?true:false}
                            onClick={()=>{
                                value.addToCart(id)
                                value.modalOpen(id)
                            }}>
                            {inCart ? (<p className="text-captalize mb-0" disabled>
                                InCart
                            </p>): (<i className="fas fa-cart-plus"/>)}
                        </button>
                        </div>
                        )}
                    </ProductConsumer>
                    
                    <div className="card-footer d-flex
                    justify-content-between font-weight-bold">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h2 className="text-salmon font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h2>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card{
        background-color:darkgrey;  
        transition: 0.6s ease;
    }

    .card-footer{
        background:#FFFAFA;
        transition: 0.6s ease;
    }
    .card-footer p{
        color:black;
        font-size:1.2rem;
        font-weight:bold;
    }
    
    &:hover{
        .card{
            border:0.04rem solid white;
            box-shadow:2px 2px 5px 0px white;
        }

        .card-footer{
            background:#F0F8FF;
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
    
    .card-img-top{
        transition:0.6s ease;
    }
       
    .img-container:hover .card-img-top{
            transform:scale(1.3);
            
        }

    .cart-btn{
        position:absolute;
        bottom:0px;
        right:0px;
        padding:0.2rem 0.4rem;
        background:salmon;
        color:white;
        font-size:1.8rem;
        border:none;
        border-radius:0.5rem 0 0 0;
        transform:translate(100%,100%);
        transition:0.6s ease;
    }

    .img-container:hover .cart-btn{
        transform:translate(0,0);
    }

    .cart-btn:hover{
        color:black;
    }

    .cart-btn:focus{
        outline:none;
    }
`;