import { Container, Row, Col } from "react-bootstrap";
import NewUsers from "../../components/NewUsers/NewUsers";
import MyCarts from "../../components/MyCarts/MyCarts";
import ActiveSales from "../../components/ActiveSales/ActiveSales";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col xs={12} sm={3} md={4}>
          <NewUsers />
        </Col>
        <Col xs={12} sm={9} md={8}>
          <MyCarts />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <ActiveSales />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
