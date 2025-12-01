import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onSelectProduct }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={() => onSelectProduct(p)} />
      ))}
    </div>
  );
}

export default ProductList;