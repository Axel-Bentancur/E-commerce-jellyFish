import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

export default function CardOptions({ product, AddToCart }) {
  const [firstOptionId, setFirstOptionId] = useState();
  const [secondOptionId, setSecondOptionId] = useState();
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const firstVariantsAvaiable = product.variants[1] !== undefined;
  const secondVariantsAvaiable = product.variants[0] !== undefined;
  let firstVariants;
  let secondVariants;
  if (firstVariantsAvaiable) {
    firstVariants = product.variants[1].options;
  } else {
    firstVariants = null;
  }
  if (secondVariantsAvaiable) {
    secondVariants = product.variants[0].options;
  } else {
    secondVariants = null;
  }

  const handleChangeFirst = (idx) => {
    setFirstOptionId(firstVariants[0].id || firstVariants[idx].id);
  };
  const handleChangeSecond = (idx) => {
    setSecondOptionId(secondVariants[0].id || secondVariants[idx].id);
  };

  const handleAddToCart = () => {
    if (firstVariantsAvaiable && secondVariantsAvaiable) {
      AddToCart(product.id, {
        [product.variants[0].id]: secondOptionId,
        [product.variants[1].id]: firstOptionId,
      });
    } else {
      AddToCart(product.id, {
        [product.variants[0].id]: secondOptionId,
      });
    }
  };

  return (
    <div>
      {firstVariantsAvaiable ? (
        <div className="option-container">
          {firstVariants.map((variant, idx) => (
            <div className="round mr-2 mb-1" key={idx}>
              <input
                type="radio"
                name={product.variants[1].id}
                id={firstVariants[idx].id}
                value={firstVariants[idx].name}
                defaultChecked={idx === 0}
                onChange={() => handleChangeFirst(idx)}
              />
              <label
                className="form-option-label color-label mb-0"
                htmlFor={firstVariants[idx].id}
              >
                <span
                  className="form-option-color"
                  style={{ background: `${firstVariants[idx].name}` }}
                />
              </label>
            </div>
          ))}
        </div>
      ) : null}
      {secondVariantsAvaiable ? (
        <div className="option-container">
          {secondVariants.map((variant, idx) => (
            <div className="square mr-2 mb-1" key={idx}>
              <input
                type="radio"
                name={product.variants[0].id}
                id={secondVariants[idx].id}
                value={secondVariants[idx].name}
                defaultChecked={idx === 0}
                onChange={() => handleChangeSecond(idx)}
              />
              <label
                className="form-option-label size-label"
                htmlFor={secondVariants[idx].id}
              >
                <span className="form-option-size">
                  {secondVariants[idx].name}
                </span>
              </label>
            </div>
          ))}
        </div>
      ) : null}
      <div className="card-buttons">
        <Button
          className="card-carritoButton"
          onClick={() => handleAddToCart()}
          block
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart2 mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          Agregar a Carrito
        </Button>
        <Button className="card-viewButton" onClick={handleShow} block>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-eye mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
          Vista Rapida
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src={product.media.source}
              className="img-fluid"
              alt={product.name}
            />
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
}
