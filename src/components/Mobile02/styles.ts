import styled from 'styled-components';

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
    transition: all 0.15s ease-in-out;
    transition: transform 0.5s ease;
  }

  .nav-link {
    color: white;
  }
`;

export const BgContainer = styled.div`
  background-color: purple;
  height: 105%;
  width: 100%;
  transition: 0.5s;
`;
