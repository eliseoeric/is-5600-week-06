import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
  );
}
import Header from './components/Header';

import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
  export default App;
  // App.jsx
  import { Route, Routes } from 'react-router-dom';

  // ...
  function App() {
    return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>

      </div>
    );
  }