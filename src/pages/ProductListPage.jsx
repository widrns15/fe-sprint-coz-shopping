import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import { useState } from "react";
import ProductCard from "./components/ProductCard";

const ProductListPage = ({ products, handleBookMark }) => {
  const [filter, setFilter] = useState("All");

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  return (
    <ProductListSection>
      <Filter filter={filter} filterHandler={filterHandler} />
      <ProductSection>
        {products
          .filter((product) => product.type === filter || filter === "All")
          .slice(0, 12)
          .map((product) => (
            <ProductCard
              item={product}
              key={product.id}
              handleBookMark={handleBookMark}
            />
          ))}
      </ProductSection>
    </ProductListSection>
  );
};

const ProductListSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100vw;
  height: 100vh;
  margin-top: 10.7vh;
`;

const ProductSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 4.5rem;
  max-width: 80vw;
  margin: 0 auto;
`;

export default ProductListPage;
