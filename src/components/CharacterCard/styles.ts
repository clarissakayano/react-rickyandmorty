import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
  fontSize: number;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  font-size: ${({ fontSize }) => fontSize}rem;
  background-size: cover;
  background-position: center center;
`;
