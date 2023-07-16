import React, { useState } from "react";
import styled from "styled-components";
import markStar from "../img/markstar.svg";
import unMarkStar from "../img/unmarkstar.svg";

const ProductCard = ({ item }) => {
  const {
    type,
    title,
    sub_title,
    brand_name,
    price,
    discountPercentage,
    image_url,
    brand_image_url,
    follower,
    marked,
  } = item;

  const [isMarked, setIsMarked] = useState(item.marked);

  const bookMarkHandler = () => {
    setIsMarked(!isMarked);
  };

  switch (type) {
    case "Product":
      return (
        <CardSection>
          <div className="thumbnail">
            <img src={image_url} alt="thumbnail" />
            <img
              className="bookmark"
              onClick={bookMarkHandler}
              src={isMarked ? markStar : unMarkStar}
              alt="bookmark"
            />
          </div>
          <div>
            <span className="title">{title}</span>
            <span className="discount">{discountPercentage}%</span>
          </div>
          <div>
            <span></span>
            <span className="price">{price}원</span>
          </div>
        </CardSection>
      );
    case "Category":
      return (
        <CardSection>
          <div className="thumbnail">
            <img src={image_url} alt="thumbnail" />
            <img
              className="bookmark"
              onClick={bookMarkHandler}
              src={isMarked ? markStar : unMarkStar}
              alt="bookmark"
            />
          </div>
          <div>
            <span className="title"># {title}</span>
          </div>
        </CardSection>
      );
    case "Exhibition":
      return (
        <CardSection>
          <div className="thumbnail">
            <img src={image_url} alt="thumbnail" />
            <img
              className="bookmark"
              onClick={bookMarkHandler}
              src={isMarked ? markStar : unMarkStar}
              alt="bookmark"
            />
          </div>
          <div>
            <span className="title">{title}</span>
          </div>
          <div>
            <span className="sub_title">{sub_title}</span>
          </div>
        </CardSection>
      );
    case "Brand":
      return (
        <CardSection>
          <div className="thumbnail">
            <img src={brand_image_url} alt="thumbnail" />
            <img
              className="bookmark"
              onClick={bookMarkHandler}
              src={isMarked ? markStar : unMarkStar}
              alt="bookmark"
            />
          </div>
          <div>
            <span className="title">{brand_name}</span>
            <span className="follower">관심고객수</span>
          </div>
          <div>
            <span></span>
            <span className="follower">{follower}</span>
          </div>
        </CardSection>
      );
    default:
  }
};

const CardSection = styled.div`
  width: 16.5rem;
  height: 13.125rem;
  cursor: pointer;

  .thumbnail {
    width: 16.5rem;
    height: 13.125rem;

    img {
      width: 16.5rem;
      height: 13.125rem;
      border-radius: 0.9375rem;
    }
    .bookmark {
      position: absolute;
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 14.25rem;
      margin-top: 10.875rem;
      cursor: pointer;
    }
  }
  div {
    display: flex;
    margin-top: 6px;
  }
  span:first-child {
    flex: 1;
  }
  .title {
    font-weight: 800;
    font-size: 1rem;
    line-height: 1.21rem;
  }
  .discount {
    color: #452cdd;
    font-weight: 800;
    line-height: 1.21rem;
  }
  .price {
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .follower {
    font-weight: 700;
  }
`;

export default ProductCard;
