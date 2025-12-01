import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products';

// React Router imports
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* Home page → list of products */}
        <Route path="/" element={<CardList data={productData} />} />

        {/* Single product view */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;
