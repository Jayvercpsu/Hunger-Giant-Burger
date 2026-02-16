import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, aboutRef, visionMissionRef, menuRef, franchisingRef, faqRef, contactRef }) {
  return (
    <>
      <Header
        aboutRef={aboutRef}
        visionMissionRef={visionMissionRef}
        menuRef={menuRef}
        franchisingRef={franchisingRef}
        faqRef={faqRef}
        contactRef={contactRef}
      />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;