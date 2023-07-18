import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import axios from "axios";
import markStar from "./img/markstar.svg";
import unMarkStar from "./img/unmarkstar.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
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

  const bookmarkedProducts = products.filter((product) => product.marked);

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
        <MainSection>
          <ListSection>
            <h2>상품 리스트</h2>
            <ProductSection>
              {products.slice(0, 4).map((product, idx) => {
                return (
                  <ProductCard
                    item={product}
                    key={product.id}
                    handleBookMark={handleBookMark}
                  />
                );
              })}
            </ProductSection>
          </ListSection>
          <ListSection>
            <h2>북마크 리스트</h2>
            <ProductSection>
              {bookmarkedProducts.length ? (
                bookmarkedProducts
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      item={product}
                      key={product.id}
                      handleBookMark={handleBookMark}
                    />
                  ))
              ) : (
                <h4>북마크한 항목이 없습니다.</h4>
              )}
            </ProductSection>
          </ListSection>
        </MainSection>
      )}
    </>
  );
};

const ToastSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-weight: 700;
  font-size: 1rem;
  line-height: 0.88rem;
`;

const LoadingSection = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: black;
`;

const MainSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 82.6vh;
  margin-top: 8.3vh;
  background-color: white;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

const ListSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 41.3vh;
`;

const ProductSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 70.5rem;
  height: 13.125rem;
`;

export default MainPage;
