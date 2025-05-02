// App.jsx
import { Route, Routes} from 'react-router-dom';
import CardList from './components/CardList';
import Header from './components/Header';
import SingleView from './components/SingleView';
import productData from './data/full-products';

function App() {
  console.log('lol',productData);
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