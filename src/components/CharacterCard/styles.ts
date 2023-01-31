import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverimage: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverimage }) => `url(${coverimage})`};
  background-size: cover;
  background-position: center center;
`;

export const Subtitle = styled.span`
  color: rgb(158, 158, 158);
`;
export const Name = styled.p`
  color: white;
  text-shadow: 0 0 0.2em #3daa3c, 0 0 0.2em #f87;
  display: flex;
  justify-content: center;
`;
