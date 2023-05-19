import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';

import CharacterCard from 'components/CharacterCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import useTitle from 'hooks/useTitle';

import { Pagination } from 'styles/GlobalStyles/Pagination';

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

  const setTitle = useTitle();

  useEffect(() => {
    setTitle('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <>
      <BgColor>
        <Header />
        <Container className="mt-5">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="dark" />
              <Spinner animation="grow" variant="success" />
            </div>
          )}
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center mb-5">
                {characters.map((character) => (
                  <Col key={character.id} className="d-flex sm={1}">
                    <CharacterCard character={character} />
                  </Col>
                ))}
              </Row>

              {InfoPages > 1 && (
                <Pagination
                  className="flex-wrap justify-content-center mb-5"
                  forcePage={currentPage - 1}
                  onPageChange={(p) => handlePageChange(p.selected + 1)}
                  pageCount={InfoPages}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={2}
                  previousLabel="<<"
                  nextLabel=">>"
                />
              )}
            </>
          )}
        </Container>
      </BgColor>
      <Footer />
    </>
  );
};
export default memo(Home);
