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
                        <img alt="increase" className="action-icons" src="https://www.svgrepo.com/show/507398/plus-circle.svg"/>
                        <img alt="decrease" className="action-icons" src="https://www.svgrepo.com/show/507369/minus-circle.svg"/>
                        <img alt="delete" className="action-icons" src="https://www.svgrepo.com/show/500534/delete-filled.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;