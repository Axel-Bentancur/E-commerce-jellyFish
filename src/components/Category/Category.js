import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./styles.css";
import Men from "../../assets/Categories/cat-men.jpg";
import Women from "../../assets/Categories/cat-women.jpg";
import Kids from "../../assets/Categories/cat-kids.jpg";

export default function Category() {
  return (
    <section className="container position-relative pt-3 pt-lg-0 pb-5">
      <Row>
        <div className="col-xl-8 col-lg-9">
          <Card className="border-0 shadow-lg">
            <div className="card-body px-4 pt-4 pb-0 rounded">
              <Row className="g-0 ps-1">
                <div className="col-sm-4 px-2">
                  <a
                    href="#"
                    className="d-block text-center text-decoration-none"
                  >
                    <img
                      src={Men}
                      alt="men"
                      className="d-block rounded mb-3 categories-img"
                    />
                  </a>
                </div>
                <div className="col-sm-4 px-2">
                  <a
                    href="#"
                    className="d-block text-center text-decoration-none"
                  >
                    <img
                      src={Women}
                      alt="men"
                      className="d-block rounded mb-3 categories-img"
                    />
                  </a>
                </div>
                <div className="col-sm-4 px-2">
                  <a
                    href="#"
                    className="d-block text-center text-decoration-none"
                  >
                    <img
                      src={Kids}
                      alt="men"
                      className="d-block rounded mb-3 categories-img"
                    />
                  </a>
                </div>
              </Row>
            </div>
          </Card>
        </div>
      </Row>
    </section>
  );
}
