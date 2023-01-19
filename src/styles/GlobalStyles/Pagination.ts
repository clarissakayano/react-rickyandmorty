import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  color: white;

  li {
    list-style: none;

    a {
      display: inline-block;
      border: solid 1px #ccc;
      padding: 10px 20px;
      border-radius: 3px;
      margin: 0 5px;
      color: inherit;
      text-decoration: none;
    }

    &.selected a {
      background-color: #000;
      color: #fff;
      border: none;

      &:hover {
        color: #f00;
      }
    }
  }
`;
