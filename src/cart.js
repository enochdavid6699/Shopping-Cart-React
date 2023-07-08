import React from 'react';
import CartItem from './cartItem';

class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    key:1
                },
                {
                    price: 99,
                    title: 'Cover',
                    qty: 1,
                    img: '',
                    key:2
                },
                {
                    price: 1999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    key:3
                },      
            ]

        }
        // Another way of binding
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }

    render() {
        const {products} = this.state;
        return (
            <div className='cart'>

                {products.map((product)=>{
                    return <CartItem product={product}/>
                })}
            </div>
        );
    }
}



export default Cart;