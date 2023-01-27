import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 35%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: start;
  z-index: 1;

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: all 0s ease-in-out;
    transition: transform 0.5s ease;
  }

  .nav-link {
    color: white;
    transition: all 0.2s ease-out;
  }
  nav {
    transition: all 0.5s ease-out;
  }
`;

export const BgContainer = styled.div`
  .open {
    animation: down 0.5s ease-in-out;
  }
  .closed {
    animation: up 0.5s ease-in-out;
  }
`;

interface IMenuProps {
  isMenuOpened: boolean;
}

const down = keyframes`
    from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
`;
const toup = keyframes`
   from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

export const MenuOverlay = styled.div<IMenuProps>`
  transition: all 0.2s ease-out;
`;

export const MenuNav = styled.div<IMenuProps>`
  height: 100vh;
  right: ${(props) => (props.isMenuOpened ? 0 : 0)}px;
  padding: 30px;
  width: 160px;
  animation: ${(props) => (props.isMenuOpened ? down : toup)} 0.3s ease-out;
  transition: all 0.3s ease-out;

  background-color: black;
  height: 40%;
  width: 100%;

  a:hover {
    color: green;
  }
`;
