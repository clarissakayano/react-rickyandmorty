import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface IMenuProps {
  isMenuOpened: boolean;
}

export const LinkMenu = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  border: none;

  p:hover {
    color: green;
  }
  p {
    color: white;
  }
`;

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;
const up = keyframes`
    from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;
const down = keyframes`
    from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 170px;
  & > li:not(:last-child) {
    margin-right: 36px;
  }
`;
export const MenuMobile = styled.div<IMenuProps>`
  height: 35vh;
  width: 100%;
  margin-top: ${(props) => (props.isMenuOpened ? 0 : -500)}px;
  padding: 4px 1px;
  animation: ${(props) => (props.isMenuOpened ? up : down)} 0.2s ease-out;
  transition: all 0.2s ease-out;
  z-index: 4;
`;
export const MenuOverlay = styled.div<IMenuProps>`
  animation: ${(props) => (props.isMenuOpened ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  transition: all 0.2s ease-out;
  z-index: 3;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  color: white;
  & > a {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`;
export const Bars = styled.nav`
  display: inline-block;
`;
