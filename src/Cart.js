import React from 'react';
import CartItem from './CartItem';
import "./index.css"

const Cart = (props) => {
  const { products } = props;
  // console.log('this is products', products)
  return (
    <div className="cart">
      {products.map((product) => { 
        return (
          <CartItem
            product={product} // may cause err
            key={product.id}
            onIncreaseQuantity={props.onIncreaseQuantity}
            onDecreaseQuantity={props.onDecreaseQuantity}
            onDeleteProduct={props.onDeleteProduct}
          />
        )
      })}
    </div>
  );
}

export default Cart;