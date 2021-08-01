import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./styles.css";

export default function CartItem({ cart }) {
  console.log(cart);
  return cart.line_items.map((product, idx) => (
    <div className="card-item" key={idx}>
      <Row>
        <Col>
          <Row>
            <Col>
              <Card.Img src={product.media.source} />
            </Col>
            <Col>
              <div className="product-name">{product.name}</div>
              <div className="product-size">{product.variants.option_id}</div>
              <div className="product-color">{product.name}</div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <div className="product-name">{product.price.formatted}</div>
            </Col>
            <Col>
              <div className="product-name">{product.quantity}</div>
            </Col>
            <Col>TOTAL</Col>
          </Row>
        </Col>
      </Row>
    </div>
  ));
}
