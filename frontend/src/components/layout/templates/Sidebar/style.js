import styled, { css } from "styled-components";

export const SidebarStyle = styled.nav`
  box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  height: 100vh;
  width: 260px;

  ${(props) =>
    props.image
      ? css`
          background-image: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0%,
              rgba(0, 0, 0, 0.6) 100%
            ),
            url(${props.image});
          background-position: center center;
          background-size: cover;
          background-blend-mode: darken;
        `
      : css`
          background: rgba(0, 0, 0, 0.8);
        `}

  &:after {
    opacity: 0.2;
    z-index: -1;
  }

  ul {
    padding-top: 10px;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    width: auto;
    margin: 10px 15px 0;
    padding: 10px 15px;
    border-radius: 3px;
    line-height: 1.5em;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 300;
    display: block;
    text-decoration: none;
    color: #fff;
    font-weight: 30;
    padding: 15px;
    transition: all 300ms linear;

    svg {
      top: 3px;
      float: left;
      width: 30px;
      height: 24px;
      position: inherit;
      text-align: center;
      margin-right: 15px;
      vertical-align: middle;
    }
  }

  .linkName {
    color: inherit;
    height: auto;
    margin: 0;
    display: block;
    opacity: 1;
    padding: 0 16px !important;
    position: relative;
    font-size: 14px;
    transform: translate3d(0px, 0, 0);
    transition: transform 300ms ease 0s;
    white-space: nowrap;
    line-height: 25px;
    font-weight: 300;
  }

  a:hover {
    outline: none;
    box-shadow: none;
    background-color: rgba(200, 200, 200, 0.2);
  }

  .active,
  .active:hover {
    color: #fff;
    box-shadow: 0 12px 20px -10px rgba(0, 172, 193, 0.28),
      0 4px 20px 0 rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2);
    background-color: #00acc1;
  }
`;

export const Background = styled.div`
  background-color: rgba(0, 120, 144, 0.8);
  position: absolute;
  z-index: 1;
  height: 100vh;
`;
