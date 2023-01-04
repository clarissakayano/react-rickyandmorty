import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: absolute;
  width: 100%;
  height: 35%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  font-family: Open Sans;
  margin-bottom: 50px;

  background: #252b42;

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  a {
    font-size: 30px;
  }

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(100deg);
    transition: 0.7s;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: 0.7s;
    margin-top: 70px;
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    height: 35%;
    padding-bottom: 30px;
    margin-bottom: 10px;
    z-index: 1;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      svg {
        transform: rotate(0deg);
      }
      nav {
        transform: scale(1);
      }
    `}

  #menu-background {
    color: transparent;
    height: 100%;
    width: 100%;
    z-index: 9;
  }
`;

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: ${theme.layers.overlay};
  `}
`;
