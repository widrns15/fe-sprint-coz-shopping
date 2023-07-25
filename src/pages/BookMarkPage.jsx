import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Filter from "./components/Filter";
import ProductCard from "./components/ProductCard";

const BookMarkPage = ({ products, handleBookMark }) => {
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
    const bookmarkedProducts = filteredProducts.filter(
      (product) => product.marked
    );
    setDisplayedProducts(bookmarkedProducts.slice(0, visibleProductCount));
  }, [products, filter, visibleProductCount]);

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  return (
    <BookmarkListSection>
      <Filter filter={filter} filterHandler={filterHandler} />
      <ProductSection>
        {displayedProducts.length ? (
          displayedProducts.map((product) => (
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
    </BookmarkListSection>
  );
};

const BookmarkListSection = styled.div`
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

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55vh;
  }
`;

export default BookMarkPage;
