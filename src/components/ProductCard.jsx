// src/components/ProductCard.jsx

function ProductCard({ product, onSelect }) {
  return (
    <div
      className="pa3 ba b--light-gray br2 ma2 pointer"
      onClick={() => onSelect(product)}
    >
      <h2 className="f4 mb2">{product.name}</h2>
      <p className="mv1">Price: ${product.price}</p>

      {product.tags && (
        <p className="mv1">
          <span className="b">Tags:</span> {product.tags.join(", ")}
        </p>
      )}
    </div>
  );
}

export default ProductCard;
