import { memo } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { strToSlug } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Cover, Subtitle, Name } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
  children?: React.ReactNode;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => (
  <Card className="w-100 color mb-3">
    <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
      <Cover aspectRatio="1x1" coverimage={character.image}>
        <div />
      </Cover>
    </Link>
    <Card.Body>
      <Card.Title>
        <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          <Name>{character.name}</Name>
        </Link>
      </Card.Title>
      <p>
        {character.status}-{character.species}
      </p>
      <span />
      <Subtitle>Last known location:</Subtitle>
      <p>{character.location.name}</p>
      <Subtitle>Origin:</Subtitle>
      <p>{character.origin.name}</p>
    </Card.Body>
  </Card>
);

export default memo(CharacterCard);
