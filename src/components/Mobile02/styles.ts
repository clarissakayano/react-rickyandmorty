import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 35%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: start;

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transition: 0.7s;
  }
`;

export const BgContainer = styled.div`
  background-color: #252b42;
  height: 100%;
  width: 100%;
  transition: 0.5s;
`;
