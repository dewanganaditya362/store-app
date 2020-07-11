import React, { Component } from 'react'
import { storeProducts , detailProduct} from '../data'

const ProductContext = React.createContext()

export default class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        cart : [],
        modalOpen:false,
        modalProduct: detailProduct
        
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
        const singleItem = {...item};
        tempProducts = [...tempProducts,singleItem];

        });

        this.setState(()=>{
            return{ products : tempProducts};
        });
    }

    getItem = id=>{
        const product = this.state.products.find(item =>item.id===id);
        return product;
    }
    
    handleDetails = (id) =>{
        const product = this.getItem(id);
        this.setState(() =>{
            return{detailProduct: product};
        });
    }

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(()=>{
            return{products: tempProducts, cart:[...this.state.cart,product]}
        },()=>{
            console.log(this.state);
        });

    };

    modalOpen = id=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modalProduct: product, modalOpen:true};
        });
    };

    closeModal = ()=>{
        this.setState(()=>{
            return {modalOpen:false};
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails : this.handleDetails,
                addToCart: this.addToCart,
                modalOpen: this.modalOpen,
                closeModal: this.closeModal
            }}>
                {this.props.children}    
            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}