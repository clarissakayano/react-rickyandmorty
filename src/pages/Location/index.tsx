import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import LocationCard from 'components/LocationCard';

import { Pagination } from 'styles/GlobalStyles/Pagination';

import { LocationType } from 'types/LocationsType';

import { BgColor, Title } from './styles';

const Locations: React.FC = () => {
  const params = useParams();
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [InfoPages, setInfoPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchLocations = useCallback(async (page: number) => {
    setIsLoading(true);
    const { results, info } = await fetch(
      `https://rickandmortyapi.com/api/location?page=${page}`,
    ).then((response) => response.json());

    setIsLoading(false);
    setLocations(results);
    setInfoPages(info.pages);
    setCurrentPage(page);
  }, []);
  useEffect(() => {
    fetchLocations(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      fetchLocations(page);
    },
    [fetchLocations],
  );

  return (
    <>
      <BgColor className="sm={1} md={2}">
        <Header />
        <Container>
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="dark" />
              <Spinner animation="grow" variant="success" />
            </div>
          )}
          <Title>Location</Title>
          {!isLoading && (
            <>
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-center mb-5">
                {locations.map((location) => (
                  <Col key={location.id} className="d-flex sm={1}">
                    <LocationCard location={location} />
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

export default memo(Locations);
