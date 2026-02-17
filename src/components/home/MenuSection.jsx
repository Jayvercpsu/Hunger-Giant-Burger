import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../components/cards/Cards";
import burgerData from "../../data/burgerData";
import { menuSectionContent } from "../../data/contentData";
import { forwardRef } from "react";

const MenuSection = forwardRef((props, ref) => {
  const { heading, description } = menuSectionContent;

  return (
    <section ref={ref} id="menu" className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>{heading}</h2>
            <p className="para">{description}</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col className="text-center">
            <img src="/images/6.jpg" alt="Special Menu" className="img-fluid rounded" />
          </Col>
        </Row>

        <Row>
          {burgerData.map((cardData, index) => (
            <Cards key={index} image={cardData.image} />
          ))}
        </Row>

        <Row className="pt-5 g-4">
          <Col md={4}>
            <div className="ads_box ads_img text-center">
              <h4 className="mb-2">Menu 1</h4>
              {/* <p>Check out our delicious burger selections from our franchise menu.</p> */}
              <img src="/images/franchise1.jpg" alt="Franchise 1" />
            </div>
          </Col>
          <Col md={4}>
            <div className="ads_box ads_img text-center">
              <h4 className="mb-2">Menu 2</h4>
              <p>Another tasty option.</p>
              <img src="/images/franchise2.jpg" alt="Franchise 2" />
            </div>
          </Col>
          <Col md={4}>
            <div className="ads_box ads_img text-center">
              <h4 className="mb-2">Hunger Indoor Cart FRANCHISE</h4>
              <p>Visit our Hunger Indoor Cart for a cozy experience and affordable burgers.</p>
              <img src="/images/hunger-indoor-cart.jpg" alt="Hunger Indoor Cart" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default MenuSection;
