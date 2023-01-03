import { memo } from 'react';

import { Link } from 'react-router-dom';

import { Navbanner } from './styles';

const NavBanner: React.FC = () => (
  <Navbanner>
    <Link to="/" className="px-4">
      HOME
    </Link>
    <Link to="/locations" className="px-4">
      LOCATIONS
    </Link>
    <Link to="/episodes" className="px-4">
      EPISODES
    </Link>
  </Navbanner>
);

export default memo(NavBanner);
