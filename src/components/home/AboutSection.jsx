import { forwardRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutData from "../../data/aboutData";
import { aboutSectionContent } from "../../data/contentData";

const AboutSection = forwardRef((props, ref) => {
  const { heading, description, path, buttonText } = aboutSectionContent;

  const images = [
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg", 
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg", 
    "/images/18.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
    "/images/27.jpg",
  ];

  return (
    <>
      <section ref={ref} id="about" className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>{heading}</h2>
              <p>{description}</p>
              {/* <Link to={path} className="btn order_now btn_red">
                {buttonText}
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper pt-5">
        <Container>
          <Row className="justify-content-md-center">
            {aboutData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon mb-3">
                    <img src={cardData.image} alt="icon" className="img-fluid" />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.description}</p>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="mt-4 g-3">
            {images.map((imgSrc, index) => (
              <Col md={4} key={index}>
                <div className="about_image_box">
                  <img src={imgSrc} alt={`about-${index}`} className="img-fluid rounded" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
});

export default AboutSection;
