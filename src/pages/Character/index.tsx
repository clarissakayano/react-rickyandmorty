import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';

import { CharacterType } from 'types/CharacterType';

import { BgImg, NameColor, TextColor } from './styles';

const Character: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    ).then((r) => r.json());

    setIsLoading(false);
    setCharacter(response);
  }, [id]);

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BgImg>
        <Container>
          <Header />
          <NameColor className="d-flex justify-content-center">
            {character?.name ?? 'Loading...'}
          </NameColor>
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="dark" />
              <Spinner animation="grow" variant="success" />
            </div>
          )}
          {!isLoading && character && (
            <div className="d-flex justify-content-center mb-3">
              <TextColor>
                <img
                  className="mb-5"
                  src={character.image}
                  alt={character.name}
                />
                <TextColor>
                  <ul>
                    <p>
                      <span />
                      Status: {character.status}
                    </p>
                    <p>{character.species}</p>
                    <p>{character.type}</p>
                    <p>{character.gender}</p>
                    <p>{character.origin.name}</p>
                    <p>Location: {character.location.name}</p>
                  </ul>
                </TextColor>
              </TextColor>
            </div>
          )}
        </Container>
      </BgImg>
      <Footer />
    </>
  );
};

export default memo(Character);
