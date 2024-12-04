import productData from './data/full-products';
// Importing required components from 'react-router-dom' for routing
import { Route, Routes } from 'react-router-dom';

// Importing custom components
import SingleView from './components/SingleView';  // Component for displaying a single product
import Header from './components/Header';  // Header component
import CardList from './components/CardList';  // Component for displaying the list of products
import productData from './data/full-products';  // Sample data for products

// Main App component
function App() {
  return (
    <div className="App">
      <h1>Hello There.</h1>
      <Header />  {/* Rendering the header at the top of the page */}

      {/* Defining routes for navigation */}
      <Routes>
        {/* Route for the homepage that displays the CardList component with product data */}
        <Route path="/" element={<CardList data={productData} />} />

        {/* Route for viewing a single product based on its ID */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;
export default App;  // Exporting the App component as the default export