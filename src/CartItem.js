import React from "react";
import "./index.css"

// class based componenet
class CartItem extends React.Component{
    // for a class componenet to be a react component, we use render
    render() { 
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img className="left-block-img"/>
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs: 199</div>
                    <div>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/*Buttons Here*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;