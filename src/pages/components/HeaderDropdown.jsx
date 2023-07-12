import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HeaderDropdown = () => {
  const navigate = useNavigate();

  return (
    <DropDownSection>
      <Polygon />
      <MenuSection>
        <UserInfo>OOO님, 안녕하세요</UserInfo>
        <ListSection onClick={() => navigate("/products/list")}>
          <FontAwesomeIcon icon={faGift} />
          <span>상품리스트 페이지</span>
        </ListSection>
        <ListSection onClick={() => navigate("/bookmark")}>
          <FontAwesomeIcon icon={faStar} />
          <span>북마크 페이지</span>
        </ListSection>
      </MenuSection>
    </DropDownSection>
  );
};

const DropDownSection = styled.nav`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 12.5rem;
  height: 9.375rem;
  right: 2rem;
  top: 4.375rem;
`;

const Polygon = styled.div`
  position: absolute;
  width: 1rem;
  height: 1.125rem;
  right: 2.8rem;
  top: -0.5rem;
  transform: rotate(45deg);
  box-shadow: -1px -1px 1px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const MenuSection = styled.ul`
  height: 9.375rem;
  border-radius: 12px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  li {
    height: calc(150px / 3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const UserInfo = styled.li``;

const ListSection = styled.li`
  gap: 0.3125rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export default HeaderDropdown;
