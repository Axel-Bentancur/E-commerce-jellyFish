import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles.css";
import "./ColorForm.css";

export default function ColorForm({ product }) {
  const [color, setProductColor] = useState({ ProductoColor: "White" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductColor({ [name]: value });
  };

  return (
    <Form.Group>
      <p className="option-text">
        Color:
        <strong> {color.ProductoColor}</strong>
      </p>
      <div className="options-container">
        {product.color.map((item, idx) => (
          <div key={idx} className="options color-options">
            <input
              type="radio"
              name="ProductoColor"
              value={item.color}
              id={item.color}
              onChange={handleChange}
              className="input-option input-option-color"
            />
            <Form.Label htmlFor={item.color}>
              <span
                className="option-img-color"
                style={{
                  backgroundImage: `url(${item.url})`,
                }}
              ></span>
            </Form.Label>
          </div>
        ))}
      </div>
    </Form.Group>
  );
}
