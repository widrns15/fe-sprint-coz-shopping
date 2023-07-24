import React from "react";
import styled from "styled-components";
import filterAll from "../img/filterAll.svg";
import filterProduct from "../img/filterProduct.svg";
import filterCategory from "../img/filterCategory.svg";
import filterExhibition from "../img/filterExhibition.svg";
import filterBrand from "../img/filterBrand.svg";

const Filter = ({ filter, filterHandler }) => {
  const buttons = [
    { filter: "All", image: filterAll, text: "전체" },
    { filter: "Product", image: filterProduct, text: "상품" },
    {
      filter: "Category",
      image: filterCategory,
      text: "카테고리",
    },
    {
      filter: "Exhibition",
      image: filterExhibition,
      text: "기획전",
    },
    { filter: "Brand", image: filterBrand, text: "브랜드" },
  ];

  return (
    <FilterSection>
      {buttons.map((button) => (
        <button
          className={button.filter === filter ? "active" : ""}
          onClick={() => filterHandler(button.filter)}
          key={button.filter}
        >
          <img src={button.image} alt={button.filter} />
          <span>{button.text}</span>
        </button>
      ))}
    </FilterSection>
  );
};

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34.625rem;
  height: 7.625rem;
  gap: 2.25rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    gap: 0.4063rem;
    background-color: inherit;
  }

  img {
    width: 5.125rem;
    height: 5.125rem;
  }

  button.active span {
    color: #412dd4;
    border-bottom: 0.125rem solid #412dd4;
    font-family: Inter;
    font-weight: 700;
  }
`;

export default Filter;
