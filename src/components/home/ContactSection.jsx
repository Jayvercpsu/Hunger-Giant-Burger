import { Col, Container, Row } from "react-bootstrap";
import { forwardRef } from "react";
import { contactSectionContent } from "../../data/contentData";

const ContactSection = forwardRef((props, ref) => {
  const { heading1, heading2, description, socialLinks } = contactSectionContent;

  return (
    <section ref={ref} id="contact" className="contact_section py-5">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col sm={8} className="text-center">
            <h4 className="text-muted">{heading1}</h4>
            <h2 className="mb-3">{heading2}</h2>
            <p className="mb-4">{description}</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="social_links d-flex justify-content-center gap-4 fs-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

export default ContactSection;
