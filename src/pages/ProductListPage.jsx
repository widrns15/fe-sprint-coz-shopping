import React from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";

const ProductListPage = ({ products, handleBookMark }) => {
  const [filter, setFilter] = useState("All");
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleProductCount, setVisibleProductCount] = useState(12);

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (isBottom) {
      setVisibleProductCount((prevCount) => prevCount + 12);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.type === filter || filter === "All"
    );
    const slicedProducts = filteredProducts.slice(0, visibleProductCount);
    setDisplayedProducts(slicedProducts);
  }, [products, filter, visibleProductCount]);

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  return (
    <ProductListSection>
      <Filter filter={filter} filterHandler={filterHandler} />
      <ProductSection>
        {displayedProducts.map((product) => (
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
  margin-top: 10.7vh;
`;

const ProductSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 4.5rem;
  max-width: 80vw;
  margin: 0 auto;
  margin-bottom: 10.7vh;
`;

export default ProductListPage;
