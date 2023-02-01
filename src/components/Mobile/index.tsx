import { memo, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

import { Bars, LinkMenu, MenuMobile, MenuOverlay, Nav } from './styles';

const Menu: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <Bars>
        <GiHamburgerMenu
          onClick={() => setIsMenuOpened(true)}
          className="align-self-center mx-3 d-block d-sm-none mt-2"
        />
      </Bars>
      <MenuMobile
        isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-md-none position-fixed bg-dark"
      >
        <RiCloseFill
          onClick={() => setIsMenuOpened(false)}
          className="text-white align-self-end mb-5"
        />

        <Nav className="align-self-center">
          <LinkMenu to="/">
            <p>Characters</p>
          </LinkMenu>

          <LinkMenu to="/location">
            <p>Locations</p>
          </LinkMenu>

          <LinkMenu to="/episodes">
            <p>Episodes</p>
          </LinkMenu>
        </Nav>
      </MenuMobile>
    </>
  );
};

export default memo(Menu);
