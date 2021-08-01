import React from "react";
import { Breadcrumb } from "react-bootstrap";
import "./styles.css";

export default function BreadcrumbItem() {
  return (
    <Breadcrumb aria-label="breadcrumb">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Productos</Breadcrumb.Item>
      <Breadcrumb.Item>Carteras</Breadcrumb.Item>
    </Breadcrumb>
  );
}
