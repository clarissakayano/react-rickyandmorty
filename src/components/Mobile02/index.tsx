import React, { memo, useState } from 'react';

import { Nav } from 'react-bootstrap';
// import { FiXCircle } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { BgContainer, Container } from './styles';

const Mobile02: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="text-end">
        <RxHamburgerMenu onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <BgContainer onClick={() => setOpen(!open)}>
          <RxHamburgerMenu />
          <div className="d-flex justify-content-center">
            <nav className=" mt-5 ">
              <Link className="nav-link mt-5 " to="/">
                <Nav>Home</Nav>
              </Link>

              <Link className="nav-link mt-4" to="/location">
                <Nav>Location</Nav>
              </Link>

              <Link className="nav-link mt-4" to="/episodes">
                <Nav>Episodes</Nav>
              </Link>
            </nav>
          </div>
        </BgContainer>
      )}
    </Container>
  );
};

export default memo(Mobile02);
