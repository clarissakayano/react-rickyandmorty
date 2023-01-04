import { memo } from 'react';

import { Container } from 'react-bootstrap';
import { BsFillSuitHeartFill, BsGithub, BsTwitter } from 'react-icons/bs';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { SiNetlify } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { BgColor, By, Color } from './styles';

const Footer: React.FC = () => (
  <BgColor>
    <Container>
      <div className="d-flex justify-content-center mt-3">
        <SiNetlify color="#ffffff" size={30} />
        <div>
          <div className="col">
            <span className="color m-2">DEPLOYS BY</span>
          </div>

          <div className="col">
            <Color className=" m-2">netlify</Color>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div>
          <a href="https://github.com/clarissakayano" target="blank">
            <BsGithub className="me-3" color="#6f7072" />
          </a>
        </div>
        <a href="https://twitter.com/i/flow/login" target="blank">
          <BsTwitter className="me-3" color="#6f7072" />
        </a>

        <a href="https://www.instagram.com/" target="blank">
          <BsFillSuitHeartFill className="me-3" color="#6f7072" />
        </a>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <MdOutlineArrowBackIosNew color="#6f7072" />
        <MdOutlineArrowForwardIos color="#6f7072" />
        <By>
          by <Color>Clarissa Kayano </Color>2022
        </By>
      </div>

      <p>The Ricy and Morty</p>
    </Container>
  </BgColor>
);

export default memo(Footer);
