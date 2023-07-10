import React from "react";
import "./index.css"

// class based componenet
class CartItem extends React.Component{

    // for a class componenet to be a react component, we use render
    render() { 
        // console.log(this.props)
        const {price, title, qty} = this.props.product; // destructuring
        const {
            product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
          } = this.props;
        return(
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img className="left-block-img"/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>Rs: {price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons Here*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.svgrepo.com/show/507398/plus-circle.svg"
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.svgrepo.com/show/507369/minus-circle.svg"
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.svgrepo.com/show/500534/delete-filled.svg"
                            onClick={() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;