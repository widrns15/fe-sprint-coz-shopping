import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import axios from "axios";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoding(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isLoding ? (
        <LoadingSection>Loading...</LoadingSection>
      ) : (
        <MainSection>
          {products.slice(0, 4).map((product, idx) => {
            return <ProductCard item={product} key={product.id}></ProductCard>;
          })}
        </MainSection>
      )}
    </>
  );
};

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
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100vw;
  height: 82.6vh;
  margin-top: 8.3vh;
  background: #ffffff;
`;

export default MainPage;
