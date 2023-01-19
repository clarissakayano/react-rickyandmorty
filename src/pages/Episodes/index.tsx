import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { Pagination } from 'styles/GlobalStyles/Pagination';

import { EpisodesType } from 'types/EpisodesType';

import { BgColor, Title } from './styles';

const Episodes: React.FC = () => {
  const params = useParams();

  const [episodes, setEpisodes] = useState<EpisodesType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [InfoPages, setInfoPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchEpisodes = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    ).then((response) => response.json());

    setIsLoading(false);
    setEpisodes(results);
    setInfoPages(info.pages);
    setCurrentPage(page);
  }, []);
  useEffect(() => {
    fetchEpisodes(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchEpisodes(page);
    },
    [fetchEpisodes],
  );

  return (
    <>
      <BgColor>
        <Header />
        <Container>
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="dark" />
              <Spinner animation="grow" variant="success" />
            </div>
          )}
          <Title>Episodes</Title>
          {!isLoading && (
            <div className="d-flex flex-column">
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center mb-5">
                {episodes.map((episode) => (
                  <Col key={episode.id} className="d-flex sm={1}">
                    <EpisodeCard episode={episode} />
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
            </div>
          )}
        </Container>
      </BgColor>
      <Footer />
    </>
  );
};

export default memo(Episodes);
