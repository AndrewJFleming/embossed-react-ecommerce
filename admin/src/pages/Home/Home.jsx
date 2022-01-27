import { Container, Row, Col } from "react-bootstrap";
import WidgetSmall from "../../components/WidgetSmall/WidgetSmall";
import WidgetLarge from "../../components/WidgetLarge/WidgetLarge";
import FeaturedContent from "../../components/FeaturedContent/FeaturedContent";

const Home = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} sm={3} md={4}>
          <WidgetSmall />
        </Col>
        <Col xs={12} sm={9} md={8}>
          <WidgetLarge />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <FeaturedContent />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
