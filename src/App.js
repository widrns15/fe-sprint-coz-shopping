import React from "react";
import BookMarkPage from "./pages/BookMarkPage";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
        <Route path="/products/list" element={<ProductListPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
