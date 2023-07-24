import React, { useState, useEffect } from "react";
import BookMarkPage from "./pages/BookMarkPage";
import MainPage from "./pages/MainPage";
import ProductListPage from "./pages/ProductListPage";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import markStar from "./pages/img/markstar.svg";
import unMarkStar from "./pages/img/unmarkstar.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        const updatedProducts = res.data.map((product) => ({
          ...product,
          marked: savedBookmarks.includes(product.id),
        }));
        setProducts(updatedProducts);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const bookmarks = products
        .filter((product) => product.marked)
        .map((product) => product.id);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);

  const toggleBookmark = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, marked: !product.marked } : product
      )
    );
  };

  const handleBookMark = (id) => {
    toggleBookmark(id);
    const isMarked = products.find((product) => product.id === id)?.marked;
    const message = isMarked
      ? "상품이 북마크에서 제거되었습니다."
      : "상품이 북마크에 추가되었습니다.";
    const icon = isMarked ? unMarkStar : markStar;

    toast(<CustomToast icon={icon} message={message} />, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const CustomToast = ({ icon, message }) => (
    <ToastSection>
      <img src={icon} alt="checkmark" />
      <div>{message}</div>
    </ToastSection>
  );

  return (
    <>
      {isLoading ? (
        <LoadingSection>Loading...</LoadingSection>
      ) : (
        <HashRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <MainPage products={products} handleBookMark={handleBookMark} />
              }
            />
            <Route
              path="/products/list"
              element={
                <ProductListPage
                  products={products}
                  handleBookMark={handleBookMark}
                />
              }
            />
            <Route path="/bookmark" element={<BookMarkPage />} />
          </Routes>
          <Footer />
        </HashRouter>
      )}
    </>
  );
}

const LoadingSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: black;
`;

const ToastSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-weight: 700;
  font-size: 1rem;
  line-height: 0.88rem;
`;

export default App;
