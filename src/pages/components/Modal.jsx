import React, { useRef } from "react";
import styled from "styled-components";
import markStar from "../img/markstar.svg";
import unMarkStar from "../img/unmarkstar.svg";

const Modal = ({ item, isMarked, handleModalClose, bookMarkHandler }) => {
  const modalRef = useRef();

  const backgroundImage = item.brand_image_url
    ? `url(${item.brand_image_url})`
    : `url(${item.image_url})`;

  const closeModal = () => {
    handleModalClose();
  };

  const toggleBookmark = () => {
    bookMarkHandler();
  };

  const getItemTitle = () => {
    if (item.type === "Category") {
      return `# ${item.title}`;
    }
    return item.title || item.brand_name;
  };

  const closeModalHandler = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <ModalSection onClick={closeModalHandler}>
      <div ref={modalRef} className="background" style={{ backgroundImage }}>
        <button className="closebutton" onClick={closeModal}>
          X
        </button>
        <div className="description">
          <img
            onClick={toggleBookmark}
            className="bookmark"
            src={isMarked ? markStar : unMarkStar}
            alt="bookmark"
          />
          <span>{getItemTitle()}</span>
        </div>
      </div>
    </ModalSection>
  );
};

const ModalSection = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.4);
  color: white;
  cursor: grab;
  z-index: 1;

  .background {
    position: absolute;
    background-size: cover;
    background-position: center;
    border-radius: 0.75rem;
    top: 50%;
    left: 50%;
    width: 46.5rem;
    height: 30rem;
    transform: translate(-50%, -50%);
  }

  .closebutton {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    color: white;
    background-color: transparent;
    cursor: pointer;
  }

  .bookmark {
    cursor: pointer;
  }

  .description {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 1.5rem;
    left: 1.5rem;
    gap: 4px;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export default Modal;
