import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 20px;
  & > li:not(:last-child) {
    margin-right: 36px;
  }
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  border: none;
  &:hover {
    color: #ff9800;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  & > a {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  a:hover {
    color: #ff9800;
  }
`;
