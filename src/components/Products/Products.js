import React from "react";
import { Container, Row } from "react-bootstrap";

import ProductCard from "./ProductCard/ProductCard";

export default function Products({ products, AddToCart }) {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            AddToCart={AddToCart}
          />
        ))}
      </Row>
    </Container>
  );
}
