import { useState, useEffect } from "react"
import "./App.css"

const data = [
  { id: 1, name: "Laptop", tags: ["tech", "electronics"] },
  { id: 2, name: "Phone", tags: ["mobile"] },
  { id: 3, name: "Shoes", tags: ["fashion"] },
  { id: 4, name: "Watch", tags: ["accessories"] },
  { id: 5, name: "Bag", tags: ["fashion"] },
  { id: 6, name: "Tablet", tags: ["tech"] },
  { id: 7, name: "Headphones", tags: ["electronics"] },
  { id: 8, name: "Keyboard", tags: ["tech"] }
]

function App() {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [search, setSearch] = useState("")

  const itemsPerPage = 4

  useEffect(() => {
    setProducts(data)
  }, [])

  const filteredProducts = products.filter(p =>
    p.tags.join(" ").toLowerCase().includes(search.toLowerCase())
  )

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="bg-near-white min-vh-100">

      {/* 🔵 HEADER */}
      <div className="bg-dark-blue white pa3 shadow-2">
        <h1 className="tc ma0">🛍 Product Dashboard</h1>
      </div>

      <div className="pa4">

        {/* 🔍 SEARCH */}
        <input
          className="pa2 br2 w-100 mb4"
          placeholder="Search by tag (e.g. tech, fashion)..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🔁 SINGLE PRODUCT VIEW */}
        {selectedProduct ? (
          <div className="bg-white pa4 shadow-3 br3 w-50 center tc">
            <h2 className="mb2">{selectedProduct.name}</h2>

            <div className="mb3">
              {selectedProduct.tags.map((tag, i) => (
                <span key={i} className="bg-light-blue pa2 br-pill mr2">
                  {tag}
                </span>
              ))}
            </div>

            <button
              className="pa2 bg-dark-blue white bn br2"
              onClick={() => setSelectedProduct(null)}
            >
              ← Back
            </button>
          </div>
        ) : (
          <>
            {/* 📦 PRODUCT GRID */}
            <div className="flex flex-wrap justify-center">
              {paginatedProducts.map(product => (
                <div
                  key={product.id}
                  className="bg-white pa3 ma3 shadow-2 br3 w-20 grow"
                >
                  <h3 className="tc">{product.name}</h3>

                  <div className="tc mb3">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="bg-light-gray pa1 br2 mr1">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="w-100 pa2 bg-blue white bn br2"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* ⬅️➡️ PAGINATION */}
            <div className="tc mt4">
              <button
                className="pa2 mr3 bg-light-gray bn br2"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Prev
              </button>

              <span className="mr3">Page {currentPage}</span>

              <button
                className="pa2 bg-light-gray bn br2"
                disabled={startIndex + itemsPerPage >= filteredProducts.length}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default App