import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import { NavBar, Carousel, Products, Cart, Category } from "./components";
/* import ProductItem from "./components/Products/ProductItem/ProductItem";
import { Button } from "react-bootstrap"; */

export default class App extends Component {
  state = {
    products: [],
    cart: [],
  };

  getProducts = async () => {
    try {
      const res = await commerce.products.list();
      await this.setState({ products: res.data });
    } catch (error) {
      console.log("Get Products Error", error);
    }
  };

  getCart = async () => {
    try {
      await this.setState({ cart: await commerce.cart.retrieve() });
    } catch (error) {
      console.log("Get Cart Error", error);
    }
  };

  addProductToCart = async (productId, variant) => {
    try {
      const res = await commerce.cart.add(productId, 1, variant);
      await this.setState({ cart: res.cart });
    } catch (error) {
      console.log("Add Product to Cart Error", error);
    }
  };

  RemoveProductFromCart = async (lineItemId) => {
    try {
      const res = await commerce.cart.remove(lineItemId);
      await this.setState({ cart: res.cart });
    } catch (error) {
      console.log("Error to Remove Product from Cart", error);
    }
  };

  refreshCart = async () => {
    try {
      await commerce.cart.refresh(async () => {
        await this.setState({ cart: commerce.cart.cart });
      });
    } catch (error) {
      console.log("Refresh Cart Error", error);
    }
  };

  /* handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    this.setState({ cart });
  };*/
  handleDeleteToCart = async () => {
    const { cart } = await commerce.cart.empty();
    this.setState({ cart });
  };

  componentDidMount = async () => {
    await this.getProducts();
    await this.getCart();
  };

  render() {
    const { products, cart } = this.state;
    console.log(cart);
    return (
      <Router>
        <div>
          <NavBar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Carousel />
              <Category />
              <Products products={products} AddToCart={this.addProductToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
          </Switch>
          {/* <ProductItem products={products} /> */}
          <button onClick={this.handleDeleteToCart}>delete</button>
        </div>
      </Router>
    );
  }
}
