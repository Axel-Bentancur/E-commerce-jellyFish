import React from "react";
import { Col, Card } from "react-bootstrap";
import "./styles.css";

import CardOptions from "./CardOptions/CardOptions";

export default function ProductCard({ product, AddToCart }) {
  return (
    <Col className="product-item col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <Card className="product-card">
        <Card.Img src={product.media.source} className="pointer" />
        <Card.Body>
          <Card.Subtitle
            dangerouslySetInnerHTML={{ __html: product.description }}
            className="card-description product-transition pointer"
          />
          <Card.Title className="card-title product-transition pointer">
            {product.name}
          </Card.Title>
          <Card.Text className="card-price">
            {product.price.formatted_with_symbol}
          </Card.Text>
        </Card.Body>
        <Card.Body className="card-body-hidden">
          <CardOptions product={product} AddToCart={AddToCart} />
        </Card.Body>
      </Card>
    </Col>
  );
}
