import React, { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";

export default function ProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    fetch("/products.json")
      .then((r) => r.json())
      .then((data) => { setAllProducts(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // filter & sort
  const filtered = useMemo(() => {
    let list = allProducts;
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      list = list.filter(p => (p.title||"").toLowerCase().includes(q) || (p.description||"").toLowerCase().includes(q));
    }
    if (selectedTag) {
      list = list.filter(p => Array.isArray(p.tags) && p.tags.includes(selectedTag));
    }
    if (sortBy === "dueDate") list = [...list].sort((a,b)=>new Date(a.dueDate)-new Date(b.dueDate));
    if (sortBy === "completed") list = [...list].sort((a,b)=> (a.completed===b.completed?0: a.completed?1:-1));
    return list;
  }, [allProducts, searchText, selectedTag, sortBy]);

  useEffect(() => { setPage(1); }, [searchText, selectedTag, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPageItems = filtered.slice((page-1)*perPage, page*perPage);

  if (loading) return <div>Loading…</div>;
  if (!allProducts.length) return <div>No products found.</div>;

  const tags = Array.from(new Set(allProducts.flatMap(p => p.tags || [])));

  return (
    <div>
      <h2 className="f4">Products</h2>
      <div className="mb3">
        <SearchBar value={searchText} onChange={setSearchText} />
        <TagFilter tags={tags} value={selectedTag} onChange={setSelectedTag} />
        <label className="ml2">Sort:
          <select className="ml2" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="none">None</option>
            <option value="dueDate">Due date</option>
            <option value="completed">Completion</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap">
        {currentPageItems.map(p => (
          <div key={p.id} className="w-100 w-50-m w-33-l pa2">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      <div className="mt2">Showing {filtered.length} result(s)</div>
    </div>
  );
}
