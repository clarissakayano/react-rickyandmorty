import React, { memo } from 'react';

import { Card } from 'react-bootstrap';

import { EpisodesType } from 'types/EpisodesType';

import { Cover } from './styles';

interface IEpisodesCardProps {
  episode: EpisodesType;
}

const EpisodeCard: React.FC<IEpisodesCardProps> = ({ episode }) => (
  <Card className="w-100">
    <Cover aspectRatio="1x1">
      <div />
    </Cover>
    <Card.Body>
      <Card.Title>
        <p>{episode.episode}</p>
        <p>{episode.air_date}</p>
        <p className="fw-bold">Characters:</p>
        <ul>
          {episode.characters.map((characters) => (
            <li>{characters}</li>
          ))}
        </ul>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default memo(EpisodeCard);
