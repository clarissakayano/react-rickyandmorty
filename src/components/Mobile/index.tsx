import { memo, useState } from 'react';

import { Container } from 'react-bootstrap';
import { VscThreeBars, VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { H3, LinkHeader, List, MenuMobile, MenuOverlay, Nav } from './styles';

const Mobile: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <VscThreeBars
        color="red"
        onClick={() => setIsMenuOpened(true)}
        className="fs-icon align-self-center mx-3 d-block d-sm-none"
      />

      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <Container>
        <MenuMobile
          isMenuOpened={isMenuOpened}
          className="d-flex flex-column d-md-none position-fixed bg-dark"
        >
          <VscChromeClose
            onClick={() => setIsMenuOpened(false)}
            className="text-white align-self-end mb-5"
          />

          <hr />
          <Nav>
            <LinkHeader to="/">Characters</LinkHeader>
            <hr />
            <LinkHeader to="/location">Locations123</LinkHeader>
            <hr />
            <LinkHeader to="/episodes">Episodes</LinkHeader>
            <hr />
          </Nav>
        </MenuMobile>
      </Container>
    </>
  );
};

export default memo(Mobile);
