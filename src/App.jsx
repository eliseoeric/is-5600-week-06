import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import SingleView from "./components/SingleView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/product/:id" element={<SingleView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
