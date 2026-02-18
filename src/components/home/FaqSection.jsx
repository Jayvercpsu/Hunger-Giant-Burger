import { forwardRef } from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const faqData = [
  {
    question: "Location?",
    answer: "We are conveniently located at Gatingga Building, H. Mendoza Street, Barangay Manggahan, Puerto Princesa City.",
  },
  {
    question: "Best value deals?",
    answer: "Enjoy our affordable rice meal combos, each served with a complimentary 16oz juice.",
  },
  {
    question: "What makes your burgers special?",
    answer: "We use fresh ingredients, homemade sauces, and cook to order for the best flavor. Every burger is prepared with care to ensure maximum taste and quality."
  },
  {
    question: "Do you offer delivery?",
    answer: "We offer delivery through Grab, Happy App, and Backride Pinas for your convenience.",
  },
  {
    question: "Can I customize my burger?",
    answer: "Absolutely! You can choose toppings, sauces, and add-ons to make your burger perfect. Just let us know your preferences when ordering."
  },
  {
    question: "Are your meals affordable?",
    answer: "Yes, we focus on providing high-quality, delicious meals at prices everyone can enjoy. We believe great food should be accessible to all."
  },
  {
    question: "What are your operating hours?",
    answer: "We're open 24/7! Whether it's breakfast, lunch, dinner, or a late-night craving, we're here to serve you anytime."
  },
  {
    question: "Do you have rice meals besides burgers?",
    answer: "Yes! We offer a variety of rice meals including chicken meals, and more. Check our menu for the complete selection."
  },
  {
    question: "Do you have combo meals or promos?",
    answer: "Absolutely! We regularly offer exciting combo meals and value promos. Follow our social media pages for the latest deals and limited-time offers."
  },
  {
    question: "Can I order for pickup?",
    answer: "Yes! You can order ahead for pickup. Just call us or order through our app, and we'll have your food ready when you arrive."
  },
  {
    question: "Do you cater for events or parties?",
    answer: "Yes, we offer catering services for events, parties, and gatherings. Contact us in advance to discuss your needs and we'll create a customized package for you."
  }, 
  {
    question: "How can I become a franchisee?",
    answer: "We're always looking for passionate partners! Check out our Franchising section for details on requirements and the application process."
  },
  {
    question: "How much is the franchise fee?",
    answer: "",
  },
  {
    question: "Do you accept e-wallets?",
    answer: "Yes, we accept cash, and all major e-wallets like GCash, PayMaya, and more for your convenience."
  },
  {
    question: "How can I give feedback or file a complaint?",
    answer: "We value your feedback! You can reach us through our Contact section, call our hotline, or message us on social media. We're committed to addressing all concerns promptly."
  },
  {
  question: "What are the requirements to become a Hunger Giant Burger franchisee?",
  answer:
    "We look for passionate entrepreneurs with business experience and a commitment to our brand values.",
  },
  {
    question: "How much is the initial investment for a Hunger Giant Burger franchise?",
    answer:
      "The initial investment starts at 180,000 to 250,000 which includes initial inventory for 1 week, equipment, and other setup costs for a 24-hour stall.",
  },
  {
    question: "What kind of support does Hunger Giant Burger provide to franchisees?",
    answer:
      "We offer comprehensive training, marketing support, and ongoing operational guidance.",
  },
  {
    question: "What is the typical size of a Hunger Giant Burger branch?",
    answer:
      "Our branches typically range from 4 to 8 square meters.",
  },
  {
    question: "Do I need to be involved in day-to-day operations?",
    answer:
      "Yes, we encourage hands-on ownership and management together with your staff.",
  },
  {
    question: "How long does it take to break even on the investment?",
    answer:
      "Typically, franchisees break even within 3 to 6 months.",
  },
  {
    question: "Are there any financing options available for franchisees?",
    answer:
      "We have partnerships with financial institutions to help with financing.",
  },
  {
    question: "How long does it take to operate the stall after signing up for the franchise?",
    answer:
      "After full payment of the franchise fee, you only need to wait around 3 weeks to start operating.",
  },
];

const FaqSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="faq_section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        <Row className="justify-content-center mb-5">
          <Col sm={8} className="text-center">
            <h2 className="fw-bold" style={{ color: "#dc3545", fontSize: "2.5rem" }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#666" }}>
              Got questions? We've got answers! Find everything you need to know below.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={9}>
            <Accordion defaultActiveKey="0">
              {faqData.map((item, index) => (
                <Accordion.Item 
                  eventKey={index.toString()} 
                  key={index}
                  className="mb-3 border-0 shadow-sm"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                  <Accordion.Header style={{ backgroundColor: "#fff" }}>
                    <strong style={{ color: "#dc3545" }}>{item.question}</strong>
                  </Accordion.Header>
                  <Accordion.Body style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#333" }}>
                    {item.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

FaqSection.displayName = "FaqSection";

export default FaqSection;