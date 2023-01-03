import { Ratio } from 'react-bootstrap';
import styled from 'styled-components';

interface ICoverProps {
  coverImage: string;
}

export const Cover = styled(Ratio)<ICoverProps>`
  background-image: ${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center center;
`;

interface ICardLocProps {
  fontSize: number;
}

export const CardLoc = styled.li<ICardLocProps>`
  font-size: ${({ fontSize }) => fontSize};
`;

export const Subtitle = styled.span`
font-size:18px;
margin-top:10px;
`;