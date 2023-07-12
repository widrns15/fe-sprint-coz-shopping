import React from "react";
import BookMarkPage from "./pages/BookMarkPage";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
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
      <Footer />
    </HashRouter>
  );
}

export default App;
