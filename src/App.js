import React from "react";
import BookMarkPage from "./pages/BookMarkPage";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import Header from "./pages/components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookmark" element={<BookMarkPage />} />
        <Route path="/products/list" element={<ProductListPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
