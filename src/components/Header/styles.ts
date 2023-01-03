import styled from 'styled-components';

import bannerBackground from 'assets/rickym.jpg';

export const BannerContainer = styled.section`
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  background-position: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  background-color: #010a01;
  animation: flicker 1.5s infinite alternate;
  color: #fff;
  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa,
        0 0 80px #0fa, 0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
  body {
    font-size: 18px;
    font-family: 'Helvetica Neue', sans-serif;
    background-color: #010a01;
  }
`;

interface ITitleRMProps {
  fontSize: number;
}

export const TitleRM = styled.h1<ITitleRMProps>`
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: 'Mouse Memoirs', sans-serif;
  text-align: -webkit-center;
`;

export const Nav = styled.span`
  font-size: 25px;
  font-family: 'Helvetica Neue', sans-serif;
  color: white;
`;
