import React from "react";
import Cart from "./cart";
import Navbar from './navbar';

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 99,
          title: 'Cover',
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 1999,
          title: 'Laptop',
          qty: 1,
          img: '',
          id: 3
        },
      ]

    }
    // Another way of binding
    // this.handleIncreaseQuantity = this.handleIncreaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
    console.log('Product to be increased: ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    console.log('Product to be increased: ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty == 1) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items
    });
  }

  getCartCount = () =>{
    
    const {products} = this.state;

    let count = 0;

    products.forEach((product)=>{
      count+=product.qty;
    })

    return count;
  }

  getCartTotal = () =>{

    const {products} = this.state;

    let totalPrice = 0;

    products.forEach((product)=>{
      totalPrice += product.price*product.qty;
    })

    return totalPrice;

  }

  render() {

    const {products} = this.state;

    return (
      <div className="App">

        <Navbar count={this.getCartCount()}/>

        <Cart 
          products={products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        <div style={{fontSize:20 , padding: 10}}>
          TOTAL: {this.getCartTotal()}
        </div>

      </div>
    );
  }
}

export default App;
