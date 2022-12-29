import { memo } from 'react';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { strToSlug } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Cover } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ character }) => (
  <Card className="w-100">
    <Cover
      aspectRatio="1x1"
      style={{
        backgroundImage: `url(${character.image})`,
      }}
    >
      <div/>
    </Cover>
    <Card.Body>
      <Card.Title>
        <Link to={`/characters/${character.id}/${strToSlug(character.name)}`}>
          {character.name}
        </Link>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default memo(CharacterCard);
