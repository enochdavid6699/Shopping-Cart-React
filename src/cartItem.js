import React from 'react';

class CartItem extends React.Component {

  //Easiest way of binding is through arrow function as it will bind automatically
  increaseQuantity = () => {
    // console.log(this);

    //Set state form 1
    this.setState({
      qty: this.state.qty+1
    })

    //Set state form 2
    // this.setState((prevState)=>{
    //   return {
    //     qty: prevState.qty+1
    //   }
    // })
  }

  decreaseQuantity = () => {

    if(this.state.qty==1){
      return;
    }
    this.setState({
      qty: this.state.qty-1
    })
  }

  render () {
    const { price, title, qty } = this.props.product;
    const {product , onIncreaseQuantity , onDecreaseQuantity} = this.props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img 
              alt="increase" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 

              //One way of binding
              // onClick={this.increaseQuantity.bind(this)}
              onClick={()=>{onIncreaseQuantity(product)}}
            />
            <img 
              alt="decrease" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              
              // onClick={this.decreaseQuantity} 
              onClick={()=>{onDecreaseQuantity(product)}}

            />
            <img alt="delete" 
              className="action-icons" 
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: '#ccc'
  }
}

export default CartItem;