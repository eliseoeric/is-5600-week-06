
// Importing required components from 'react-router-dom' for managing routing functionality in the application
import { Route, Routes } from 'react-router-dom';

// Importing custom components for various parts of the application
import SingleView from './components/SingleView';  // Component for displaying detailed information about a single product
import Header from './components/Header';  // Header component for site navigation and branding
import CardList from './components/CardList';  // Component for displaying a paginated list of products
import productData from './data/full-products';  // Sample data containing comprehensive information about products

// Main App component that serves as the entry point of the application
function App() {
  return (
    <div className="App">  {/* Main container for the overall application layout */}
      <Header />  {/* Rendering the Header component at the top of the page for navigation */}

      {/* Defining the routing structure for application navigation */}
      <Routes>
        {/* Route for the homepage; renders the CardList component and passes product data as a prop */}
        <Route path="/" element={<CardList data={productData} />} />

        {/* Route for viewing a single product; uses a dynamic segment in the path to capture the product ID */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

export default App;  // Exporting the App component as the default export for integration with other parts of the application