import styled from 'styled-components';

import bannerBackground from 'assets/rickym.jpg';

export const BannerContainer = styled.section`
  background-image: url(${bannerBackground});
  background-repeat: no-repeat;
  background-size: cover;
  height: 500px;
  background-position: center;
  margin-top: -8px;
  padding: 0;
  box-sizing: border-box;

  @media screen and (width: 320px) {
    height: 230px;
    background-size: 120%;
    background-position-y: 0rem;
    background-size: cover;
  }

  @media screen and (min-width: 321px) and (max-width: 375px) {
    height: 300px;
    background-size: 120%;
    background-position-y: 0rem;
    background-size: cover;
  }

  @media screen and (min-width: 376px) and (max-width: 575px) {
    height: 300px;
    background: cover;
  }
`;
export const BgColor = styled.div`
  background-color: transparent;
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

  @media screen and (min-width: 320px) and (max-width: 475px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 476px) and (max-width: 576px) {
    font-size: 4rem;
  }
`;

export const Nav = styled.span`
  font-size: 25px;
  font-family: 'Helvetica Neue', sans-serif;
  color: white;
`;

export const Log = styled.div`
  color: white;
  font-family: Martel;
  font-size: 24px;
  align-items: flex-start;
  margin-left: 0px;
  background-color: transparent;
  color: white;
`;

export const Cont = styled.div`
  padding-top: -8;
`;
