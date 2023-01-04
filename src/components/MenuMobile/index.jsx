import { Nav } from 'react-bootstrap';
import { FiXCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles.js';

export const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container isVisible={menuIsVisible}>
      <div id="menu-background" onClick={() => setMenuIsVisible(false)}>
        <FiXCircle
          color="white"
          size={30}
          onClick={() => setMenuIsVisible(false)}
        />
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
    </Container>
  );
};

export default MenuMobile;
