import productData from "../data/full-products.json";
import { useState } from "react";
import Card from "./Card";
import Search from "./Search";

function CardList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 10;

  const filtered = productData.filter((p) =>
    p.tags.join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const currentProducts = filtered.slice(firstIndex, lastIndex);

  return (
    <div>
      <Search value={searchTerm} onChange={setSearchTerm} />

      <h1>All Products</h1>

      {currentProducts.map((p) => (
        <Card key={p.id} product={p} />
      ))}

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={lastIndex >= filtered.length}
      >
        Next
      </button>
    </div>
  );
}

export default CardList;
