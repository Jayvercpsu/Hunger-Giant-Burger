import { heroSectionContent } from "../../data/contentData";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroSection() {
  const {
    heading1,
    heading2,
    description,
    text1,
    text2,
    image,
    buttonText,
    path,
  } = heroSectionContent;

  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
             <img src={image} className="img-fluid" alt="Hero" style={{ borderRadius: 20 }} />
              {/* <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">{text1}</h4>5
                  <h4 className="h3_lg">{text2}</h4>
                </div>
              </div> */}
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center text-lg-start">
              <h1 className="text-white mb-3">{heading1}</h1>
              <h2 className="text-white mb-4">{heading2}</h2>
              {description.split("\n\n").map((para, i) => (
                <p key={i} className="text-white mb-3" style={{ lineHeight: "1.8" }}>
                  {para}
                </p>
              ))}
              {/* <Link to={path} className="btn order_now">
                {buttonText}
              </Link> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
