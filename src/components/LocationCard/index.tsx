import React, { memo } from 'react';

import { Card } from 'react-bootstrap';

import { LocationType } from 'types/LocationsType';

import { CardLoc, Cover } from './styles';

interface ILocationsCardProps {
  children?: React.ReactNode;
  location: LocationsType;
}

const LocationCard: React.FC<ILocationsCardProps> = ({ location }) => (
  <Card>
    <Card.Body>
      <Card.Title>
        <h2>Name:</h2>
        <li> {location.name}</li>
      </Card.Title>
      <CardLoc fontSize={1} className="d-flex mb-2 flex-wrap">
        <ul>
          <h2>Type</h2>
          <li>{location.type}</li>
          <ul />
          <h2>Dimension:</h2>
          <li> {location.dimension}</li>

          {location.residents.length > 0 && (
            <>
              <h2>Residents:</h2>
              <ul>
                {location.residents.map((residents) => (
                  <li key={residents}>{residents}</li>
                ))}
              </ul>
            </>
          )}
        </ul>
        <ul>
          <h2>Created:</h2>
          <li> {location.created}</li>
        </ul>
      </CardLoc>
    </Card.Body>
  </Card>
);
export default memo(LocationCard);
