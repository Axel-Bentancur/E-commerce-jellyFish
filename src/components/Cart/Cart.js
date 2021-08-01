import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

import CartItem from "./CartItem/CartItem";

export default function Cart({ cart }) {
  const EmptyCart = () => <div>empty</div>;

  const FilledCart = () => (
    <>
      <div className="cart-header">
        <Row>
          <Col>PRODUCT</Col>
          <Col className="d-none d-md-flex">
            <Row>
              <Col>PRICE</Col>
              <Col>QUANTITY</Col>
              <Col>TOTAL</Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="cart-body">
        <CartItem cart={cart} />
      </div>
    </>
  );
  if (!cart.line_items) return "loading...";
  return (
    <main>
      <Container>
        <div className="hero-container">
          <h1 className="hero-text">Your cart</h1>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="cart">
              {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
