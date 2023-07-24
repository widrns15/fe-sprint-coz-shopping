import React from "react";
import styled from "styled-components";
import ProductCard from "./components/ProductCard";

const MainPage = ({ products, handleBookMark }) => {
  const bookmarkedProducts = products.filter((product) => product.marked);

  return (
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
  );
};

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
