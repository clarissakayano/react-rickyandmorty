import React, { memo } from 'react';

import { Card } from 'react-bootstrap';

import { LocationType } from 'types/LocationsType';

import { CardLoc, Subtitle } from './styles';

interface ILocationsCardProps {
  // children?: React.ReactNode;
  location: LocationType;
}

const LocationCard: React.FC<ILocationsCardProps> = ({ location }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <h4>Name: {location.name}</h4>
      </Card.Title>
      <CardLoc fontSize={1} className="d-flex mb-3 flex-wrap">
        <div className="row">
          <div className="col">
            <h4>
              Type:<Subtitle> {location.type}</Subtitle>{' '}
            </h4>
          </div>

          <h4>
            Dimension:<Subtitle> {location.dimension}</Subtitle>
          </h4>
          <h4>
            Created:<Subtitle> {location.created}</Subtitle>
          </h4>
        </div>
      </CardLoc>
    </Card.Body>
  </Card>
);
export default memo(LocationCard);
