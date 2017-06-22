import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const PageNotFoundComponent = () => {
  return (
    <div>
      <Container style={{ marginTop: '50px' }}>
        <Row>
          <Col xs="12" md={{ size: '8', offset: '2' }}>
            <h1 style={{ color: '#C17DBF' }}>
              404
            </h1>
            <h2 className="lead" style={{ color: 'rgb(146,146,145)' }}>
              Page Not Found
            </h2>
            <hr className="my-2" />

            <p>
              Julie never gets lost, why not check in with her back
              {' '}
              <Link to="/" style={{ textDecoration: 'none' }}>home</Link>?
            </p>
            <hr className="my-2" />
            <p className="lead">
              <Link to={'/'} />
            </p>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default PageNotFoundComponent;
