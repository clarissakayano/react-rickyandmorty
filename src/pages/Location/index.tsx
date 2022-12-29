import { memo, useCallback, useEffect, useState } from 'react';

import { Container, Row, Col, Spinner, Pagination } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import Header from 'components/Header';
import LocationCard from 'components/LocationCard';

import { LocationType } from 'types/LocationsType';

import { BgColor } from './styles';

const Locations: React.FC = () => {
  const params = useParams();
  console.log('params', params);
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
        {!isLoading && (
          <>
            <Row className="row-cols-2 g-3 justify-content-center mb-5">
              {locations.map((location) => (
                <Col key={location.id} className="d-flex sm={1}">
                  <LocationCard location={location} />
                </Col>
              ))}
            </Row>

            {InfoPages > 1 && (
              <Pagination className="flex-wrap justify-content-center mb-5">
                {Array(InfoPages)
                  .fill(null)
                  .map((pageItem, index) => (
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

export default memo(Locations);
