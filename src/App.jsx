import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CardList from './components/CardList';
import SingleView from './components/SingleView';
import productData from './data/full-products.json';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pa3 pa4-ns">
        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
          <Route
            path="*"
            element={
              <div className="mw7 center pa4 bg-white ba b--black-10 br2 shadow-1 tc">
                <h2 className="f3">Page not found</h2>
                <p className="gray">Please return to the home page to view available products.</p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
