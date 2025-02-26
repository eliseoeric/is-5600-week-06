// Importing necessary components from 'react-router-dom' for handling routing
import { Route, Routes } from 'react-router-dom';

// Importing custom components
import SingleView from './components/SingleView';  // Component to display details of a single product
import Header from './components/Header';  // Navigation header component
import CardList from './components/CardList';  // Component for displaying a list of products
import productData from './data/full-products';  // Sample product dataset

// Main App component that defines the application structure
function App() {
  return (
    <div className="App">
      <Header />  {/* Renders the navigation header */}

      {/* Defining application routes */}
      <Routes>
        {/* Default route ('/') that displays a paginated list of products */}
        <Route path="/" element={<CardList data={productData} />} />

        {/* Dynamic route ('/product/:id') to view details of a single product */}
        <Route path="/product/:id" element={<SingleView data={productData} />} />
      </Routes>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
