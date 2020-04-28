import styled from "styled-components";

export const GridLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 100px 1fr 82px;
  grid-template-areas:
    "menu header"
    "menu content"
    "menu footer";
`;

export const NavArea = styled.aside`
  grid-area: menu;
`;

export const FooterArea = styled.footer`
  grid-area: footer;

  bottom: 0;
  padding: 15px 0;
  border-top: 1px solid #e3e3e3;
  z-index: 4;
  font-weight: 300;
  line-height: 1.5em;
`;
