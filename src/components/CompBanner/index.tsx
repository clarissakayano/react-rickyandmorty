import { memo } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

import rm from 'assets/ricky1.jpg';

import NavBanner from 'components/NavBanner';

import { BannerMainContainer } from './styles';

const BannerContainer: React.FC = () => (
  <>
    <BannerMainContainer className="img-fluid" backgroundImage={rm} />
    <Link to="/" className="px-4">
      HOME
    </Link>
    <Link to="/locations" className="px-4">
      LOCATIONS
    </Link>
    <Link to="/episodes" className="px-4">
      EPISODES
    </Link>
  </>
);

export default memo(BannerContainer);
