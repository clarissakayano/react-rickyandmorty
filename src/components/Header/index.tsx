import { memo } from 'react';

import { Link } from 'react-router-dom';

import { BannerContainer, TitleRM } from './styles';

const Header = () => (
  <BannerContainer className="flex-grow-1 mb-3">
    <header>
      <div className="container py-4 d-flex justify-content-3 align-items-center">
        <div className="container">
          <ul className="d-flex justify-content-between list-unstyled">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/location">
                Location
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/episodes">
                Episodes
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <TitleRM fontSize={4} className="mt-5">
          {' '}
          The Ricky and Morty
        </TitleRM>
      </div>
    </header>
  </BannerContainer>
);

export default memo(Header);
