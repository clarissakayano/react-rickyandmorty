import styled from 'styled-components';

interface IBannerMainContainerProps {
  backgroundImage: string;
}

export const BannerMainContainer = styled.div<IBannerMainContainerProps>`
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;
