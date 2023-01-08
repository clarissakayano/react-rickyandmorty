import { memo, useState } from 'react';

import { Button, Container, Nav } from 'react-bootstrap';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const MenuMobile: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <Container>
      <Button onClick={() => setMenuIsVisible(!menuIsVisible)} />
      <FiXCircle color="white" size={30} />
      {menuIsVisible && (
        <div id="menu-background">
          <div className="d-flex justify-content-center">
            <nav className="">
              <Link className="nav-link" to="/">
                <Nav>Home</Nav>
              </Link>
              <Link className="nav-link" to="/location">
                <Nav>Location</Nav>
              </Link>
              <Link className="nav-link" to="/episodes">
                <Nav>Episodes</Nav>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </Container>
  );
};

export default memo(MenuMobile);
