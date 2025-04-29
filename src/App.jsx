import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import Search from './components/Search';
import productData from './data/full-products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = productData.filter(product => {
    const matchesSearch = (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.alt_description?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesTag = product.tags?.some(tag => 
      typeof tag === 'object' ? 
        tag.title?.toLowerCase().includes(searchTerm.toLowerCase()) : 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchesSearch || matchesTag;
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Search handleSearch={setSearchTerm} />
              <CardList data={filteredProducts} />
            </>
          } 
        />
        <Route 
          path="/product/:id" 
          element={<SingleView data={productData} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
