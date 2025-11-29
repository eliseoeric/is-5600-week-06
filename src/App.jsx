import products from "../data/full-products";
import { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const perPage = 6;

  useEffect(() => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    setPaginatedProducts(products.slice(start, end));
  }, [page]);

  return (
    <div className="pa4">
      <h1 className="f2">Fullstack Prints</h1>
      <ProductList products={paginatedProducts} />

      <div className="mt4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <button
          disabled={page * perPage >= products.length}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
