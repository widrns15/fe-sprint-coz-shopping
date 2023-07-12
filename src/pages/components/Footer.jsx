import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSection>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>All rights reserved @ Codestates</div>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  width: 100vw;
  height: 3.625rem;
  gap: 9px;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;

  div {
    color: #888;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.66rem;
  }
`;

export default Footer;
