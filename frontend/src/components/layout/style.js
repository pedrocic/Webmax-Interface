import styled from 'styled-components';

export const GridLayout = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 100px 1fr 40px;
  grid-template-areas:
    'menu header'
    'menu content'
    'menu footer';
`;

export const NavArea = styled.aside`
  grid-area: menu;
`;

export const FooterArea = styled.footer`
  grid-area: footer;
`;
