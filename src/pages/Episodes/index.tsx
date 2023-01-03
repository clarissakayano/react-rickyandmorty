import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import EpisodeCard from 'components/EpisodeCard';
import Footer from 'components/Footer';
import Header from 'components/Header';

import { EpisodesType } from 'types/EpisodesType';

import { BgColor, Title } from './styles';

const Episodes: React.FC = () => {
  const params = useParams();
  console.log('params', params);
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
    console.log('results', results);
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
            </div>
          )}
        </Container>
      </BgColor>
      <Footer />
    </>
  );
};

export default memo(Episodes);
