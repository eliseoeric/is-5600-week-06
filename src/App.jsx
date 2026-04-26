import Header from './components/Header';
import CardList from './components/CardList';
import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;