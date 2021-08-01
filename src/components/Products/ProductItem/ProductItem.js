import React from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
/* import "./styles.css"; */

import Breadcrumb from "./BreadcrumbItem";
import ColorForm from "./FormTypes/Color/ColorForm";
import SizeForm from "./FormTypes/Size/SizeForm";

export default function ProductItem({ products }) {
  console.log(products);
  return <Container></Container>;
}
/* <Breadcrumb />
      <section>
        <Row>
          <Col className="col-12 col-md-6 r-side">
            <Card>
              <Card.Img src={products.media.source}></Card.Img>
            </Card>
          </Col>
          <Col className="col-12 col-md-6 l-side">
            <div className="product-category">
              <a href="">{products.categories[0].name}</a>
            </div>
            <h3>{products.name}</h3>
            <div className="price-container">
              <span>{products.price.formatted_with_symbol}</span>
            </div>
            <Form>
              <ColorForm products={products} />
              <SizeForm products={products} />
            </Form>
          </Col>
        </Row>
      </section> */
