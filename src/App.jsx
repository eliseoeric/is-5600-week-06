import { Route, Routes} from 'react-router-dom';
import productData from './data/full-products';
import Header from "./components/Header.jsx"
import CardList from "./components/CardList.jsx"
import SingleView from "./components/SingleView.jsx"
function App() {
  return (
    <div className="App">
      <Header/>
             <Routes>
          <Route path="/" element={<CardList data={productData} />} />
          <Route path="/product/:id" element={<SingleView data={productData} />} />
        </Routes>
    </div>
  );
}

export default App;
