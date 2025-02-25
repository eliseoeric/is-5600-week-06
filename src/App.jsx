// App.jsx
import Header from './components/Header';

import productData from './data/full-products';
import { Route, Routes} from 'react-router-dom';
import SingleView from './components/SingleView';
import CardList from './components/CardList';

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

export default App;