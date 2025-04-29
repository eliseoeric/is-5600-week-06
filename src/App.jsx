import productData from './data/full-products';
// App.jsx
import Header from './components/Header';

import productData from './data/full-products';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

function App() {
  
  return (
    <div className="App">
      <h1>Hello There.</h1>
    </div>
  );
}


export default App;
// App.jsx

// ...

function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}
// App.jsx
function App() {
  return (
    <div className="App">
      <Header />
      <CardList data={productData} />
    </div>
  );
}
