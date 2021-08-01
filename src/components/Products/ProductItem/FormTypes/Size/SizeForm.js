import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "../styles.css";
import "./SizeForm.css";

export default function SizeForm({ product }) {
  const [size, setProductSize] = useState({ ProductoSize: "35" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductSize({ [name]: value });
  };
  return (
    <Form.Group>
      <p className="option-text">
        Size:
        <strong> {size.ProductoSize}</strong>
      </p>
      <div className="options-container">
        {product.size.map((item, idx) => (
          <div key={idx} className="options size-options">
            <input
              type="radio"
              name="ProductoSize"
              value={item}
              id={item}
              onChange={handleChange}
              className="input-option input-option-size"
            />
            <Form.Label htmlFor={item}>
              <span className="option-img-size">{item}</span>
            </Form.Label>
          </div>
        ))}
      </div>
    </Form.Group>
  );
}
