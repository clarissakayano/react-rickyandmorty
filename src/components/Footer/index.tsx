import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import {
  BsFillSuitHeartFill,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { SiNetlify } from 'react-icons/si';

import { BgColor, By, Color } from './styles';

const Footer: React.FC = () => (
  <BgColor>
    <Container className="mb-2">
      <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <Col>
          <div className="d-flex justify-content-center mt-2">
            <SiNetlify color="#ffffff" size={30} />
            <div>
              <div className="col">
                <span className="color m-2">DEPLOYS BY</span>
              </div>

              <div>
                <Color className=" m-2">netlify</Color>
              </div>
            </div>
          </div>
        </Col>
        <Col>
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
            <a
              href="https://www.linkedin.com/in/clarissa-a-kayano-37a011259/"
              target="blank"
            >
              <BsLinkedin className="me-3" color="#6f7072" />
            </a>
          </div>
        </Col>
        <Col>
          <div className="d-flex justify-content-center mt-3">
            <MdOutlineArrowBackIosNew color="#6f7072" />
            <MdOutlineArrowForwardIos color="#6f7072" />
            <By>
              by <Color>Clarissa Kayano </Color>2022
            </By>
          </div>
        </Col>
      </Row>
    </Container>
  </BgColor>
);

export default memo(Footer);
