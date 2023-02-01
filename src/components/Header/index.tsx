import { memo } from 'react';

import { Link } from 'react-router-dom';

import Mobile from 'components/Mobile';

import { BannerContainer, TitleRM, Nav, Log, BgColor } from './styles';

const Header: React.FC = () => {
  return (
    <div>
      <BannerContainer className="flex-grow-1">
        <Log className="d-flex mt-2 d-sm-none justify-content-end">
          <Mobile />
        </Log>

        <div>
          <div className=" d-flex text-center p-4 row-col-none d-none d-sm-block d-lg-block d-xl-block">
            <ul className="d-flex justify-content-between list-unstyled">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <Nav>Home</Nav>
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
          <BgColor className="d-flex justify-content-center">
            <TitleRM fontSize={6} className="mt-5">
              {' '}
              The Rick and Morty
            </TitleRM>
          </BgColor>
        </div>
      </BannerContainer>
    </div>
  );
};

export default memo(Header);
