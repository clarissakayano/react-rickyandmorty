import { memo } from 'react';

import { Link } from 'react-router-dom';

import Mobile from 'components/Mobile';

import { BannerContainer, TitleRM, Nav, Log, ContainerMobile } from './styles';

const Header: React.FC = () => {
  return (
    <header>
      <ContainerMobile>
        <div className="container d-sm-none">
          <div className="row">
            <Log className="d-flex justify-content-end">
              <Mobile />
            </Log>
          </div>
        </div>
      </ContainerMobile>
      <BannerContainer className="flex-grow-1">
        <div className="container">
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
        </div>

        <div className="d-flex justify-content-center">
          <TitleRM fontSize={6} className="mt-5">
            {' '}
            The Rick and Morty
          </TitleRM>
        </div>
      </BannerContainer>
    </header>
  );
};

export default memo(Header);
