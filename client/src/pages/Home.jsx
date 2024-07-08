import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftBar from "../layout/sidebar/LeftBar";
import RightBar from "../layout/sidebar/RightBar";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <Col className="bg-primary py-2">
            <LeftBar/>
          </Col>
          <Col xs={6} className="bg-danger py-2">Main Content Coming Soon...</Col>
          <Col className="bg-warning py-2">
            <RightBar/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
