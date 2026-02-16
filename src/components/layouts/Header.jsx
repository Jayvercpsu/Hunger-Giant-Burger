import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import Logo from "/assets/logo/logo.png";

function Header({ aboutRef, visionMissionRef, menuRef, franchisingRef, faqRef, contactRef }) {
  const [nav, setNav] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setNav(scrollValue > 100);
      setIsTop(scrollValue < 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Nav.Link
              className="logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Nav.Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className={isTop ? "home-top" : ""}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(aboutRef)}>
                About Us
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(visionMissionRef)}>
                Vision & Mission
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(menuRef)}>
                Our Menu
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(franchisingRef)}>
                Franchising
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(faqRef)}>
                FAQ
              </Nav.Link>
              <Nav.Link onClick={() => scrollToSection(contactRef)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;