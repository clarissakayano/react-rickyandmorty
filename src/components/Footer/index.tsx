import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { BgColor } from './styles';

const Footer = () => (
  <BgColor>
    <Container>
      <p>The Ricy and Morty</p>
    </Container>
  </BgColor>
);

export default memo(Footer);
