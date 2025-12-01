// src/components/ProductList.jsx
import ProductCard from "./ProductCard";

function ProductList({ products, onSelect }) {
  return (
    <div className="flex flex-wrap">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProductList;
