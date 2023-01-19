import React, { memo } from 'react';

import { Card } from 'react-bootstrap';

import { EpisodesType } from 'types/EpisodesType';

import { Text } from './styles';

interface IEpisodesCardProps {
  episode: EpisodesType;
}

const EpisodeCard: React.FC<IEpisodesCardProps> = ({ episode }) => (
  <Card className="w-100">
    <Card.Body>
      <Card.Title>
        <p>
          <Text>Episode: {episode.episode}</Text>
        </p>
        <p>Air Date: {episode.air_date}</p>
        <p className="fw-bold">Characters: {episode.characters.length}</p>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default memo(EpisodeCard);
