import { memo } from 'react';

import { Link } from 'react-router-dom';

import { BannerContainer, TitleRM, Nav } from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Header = () => (
  <BannerContainer className="flex-grow-1 mb-3">
    <header>
      <div className="container py-4 d-flex justify-content-3 align-items-center">
        <div className="container">
          <ul className="d-flex justify-content-between list-unstyled">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <Nav>HOME</Nav>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/location">
                <Nav>Location</Nav>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">
                <Nav>Episodes</Nav>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <TitleRM fontSize={6} className="mt-5">
          {' '}
          The Ricky and Morty
        </TitleRM>
      </div>
    </header>
  </BannerContainer>
);

export default memo(Header);
