import React, { Component } from 'react'
import { storeProducts , detailProduct} from '../data'

const ProductContext = React.createContext()

export default class ProductProvider extends Component {

    state = {
        products: storeProducts,
        detailProduct: detailProduct
    }
    handleDetails = () =>{
        console.log("hello from detalis")
    }

    addToCart = ()=>{
        console.log("hello from addToCArt")
    } 
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetalis : this.handleDetalis,
                addToCart: this.addToCart
            }}>
                {this.props.children}    
            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}