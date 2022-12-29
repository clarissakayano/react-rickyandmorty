import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { CharacterType } from 'types/CharacterType';

import { BgColor } from './styles';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [InfoPages, setInfoPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchCharacters = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`,
    ).then((response) => response.json());

    setIsLoading(false);
    setCharacters(results);
    setInfoPages(info.pages);
    setCurrentPage(page);
  }, []);
  useEffect(() => {
    fetchCharacters(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchCharacters(page);
    },
    [fetchCharacters],
  );

  return (
    <BgColor>
      <Container>
        <Header />
        {isLoading && (
          <div className="text-center">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="dark" />
            <Spinner animation="grow" variant="success" />
          </div>
        )}
        {!isLoading && (
          <>
            <Row className="row-cols-4 g-3 justify-content-center mb-5">
              {characters.map((character) => (
                <Col key={character.id} className="d-flex sm={1}">
                  <CharacterCard character={character} />
                </Col>
              ))}
            </Row>

            {InfoPages > 1 && (
              <Pagination className="flex-wrap justify-content-center mb-5">
                {Array(InfoPages)
                  .fill(null)
                  .map((_, index) => (
                    <Pagination.Item
                      key={index} // eslint-disable-line react/no-array-index-key
                      active={currentPage === index + 1}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
              </Pagination>
            )}
          </>
        )}
      </Container>
    </BgColor>
  );
};
<Footer />;
export default memo(Home);
