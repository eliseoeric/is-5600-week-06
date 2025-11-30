import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
  );
}

export default App;
import CardList from './components/CardList';
function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <CardList data={productData} />
    </div>
  );
}
