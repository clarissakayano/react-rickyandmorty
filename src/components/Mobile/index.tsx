import React, { memo, useState } from 'react';

import { Nav } from 'react-bootstrap';
import { MdOutlineClose } from 'react-icons/md';
// import { FiXCircle } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { BgContainer, Container, MenuNav } from './styles';

const Mobile: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="text-end">
        <RxHamburgerMenu onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <MenuNav
          onClick={() => setOpen(!open)}
          className="d-flex d-md-none flex-column position-fixed "
        >
          <BgContainer>
            <MdOutlineClose color="white" />
            <div className="d-flex justify-content-center">
              <nav className={open ? 'open' : 'closed'}>
                <div id="menu">
                  <Link className="nav-link mt-5 " to="/">
                    <Nav>Home</Nav>
                  </Link>

                  <Link className="nav-link mt-4" to="/location">
                    <Nav>Location</Nav>
                  </Link>

                  <Link className="nav-link mt-4" to="/episodes">
                    <Nav>Episodes</Nav>
                  </Link>
                </div>
              </nav>
            </div>
          </BgContainer>
        </MenuNav>
      )}
    </Container>
  );
};

export default memo(Mobile);
