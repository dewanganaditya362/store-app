import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from './Context'

export default class Product extends Component {
    render() {

        const {id,title, img , price , inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                    </div>
                    <button className="cart-btn" disabled={inCart?true:false}>
                        {inCart ? (<p className="text-captalize mb-0" disabled>
                            InCart
                        </p>): (<i className="fas fa-cart-plus"/>)}
                    </button>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
`;