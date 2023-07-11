import React from 'react';
import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
          id: 3
        }
      ]
    }
  }
  handleIncreaseQuantity = (product) => {
    // console.log('This increases the qty of product ', product);
    const { products } = this.state;
    // console.log(products)
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handleDecreaseQuantity = (product) => {
    // console.log('This decreases the qty of product ', product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if(product.qty == 1){
      return;
    } else {
      products[index].qty -= 1;
  
      this.setState({
        products
      })
    }
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items
    })
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}  
        />
      </div>
    );
  }
}

export default App;
