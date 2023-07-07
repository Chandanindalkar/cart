import React from "react";
import "./index.css"

// class based componenet
class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            price: 199,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        // this.setState({
        //     qty: this.state.qty + 1,
        //     title: 'new'            
        // })

        // if prev state is required then used this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1     
            }
        })

    }
    
    decreaseQuantity = () => {
        // this.setState({
        //     qty: this.state.qty - 1,
        // })
        this.setState((prevState) => {
            if (prevState.qty == 1) {
                return {
                    qty: prevState.qty     
                }
            } else {
                return {
                    qty: prevState.qty - 1     
                }
            } 
        })
    }

    deleteItem = () => {
        
    }

    // for a class componenet to be a react component, we use render
    render() { 
        const {price, title, qty} = this.state; // destructuring
        return(
            <div className="cart-item">
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
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.svgrepo.com/show/507369/minus-circle.svg"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.svgrepo.com/show/500534/delete-filled.svg"
                            onClick={this.deleteItem}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;