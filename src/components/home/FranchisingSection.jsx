import { forwardRef, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

const FranchisingSection = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "letter" or "form"
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    businessBackground: "",
    investmentCapacity: "",
    letterFile: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" or "error"
 
  // Get it from https://formspree.io/
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqedqrgg";

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
    setSubmitStatus(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      businessBackground: "",
      investmentCapacity: "",
      letterFile: null
    });
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      letterFile: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("businessBackground", formData.businessBackground);
      formDataToSend.append("investmentCapacity", formData.investmentCapacity);
      formDataToSend.append("applicationType", modalType === "letter" ? "Letter of Intent" : "Franchise Form");
      
      if (modalType === "letter" && formData.letterFile) {
        formDataToSend.append("letterFile", formData.letterFile);
      }

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          handleCloseModal();
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section ref={ref} className="franchising_section py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#dc3545", fontSize: "2.5rem" }}>
            Join Our Franchise
          </h2>
          <p className="text-center mb-5" style={{ fontSize: "1.2rem", color: "#666" }}>
            Start your own burger business with us! Follow these simple steps to get started.
          </p>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0" style={{ borderRadius: "15px", overflow: "hidden" }}>
                <div className="card-header text-white p-4" style={{ backgroundColor: "#dc3545" }}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-white text-danger fw-bold d-flex align-items-center justify-content-center" 
                         style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}>
                      1
                    </div>
                    <h4 className="ms-3 mb-0">Send Your Letter of Intent</h4>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
                    Express your interest by sending us a letter of intent. Tell us about yourself, 
                    your location preference, and why you want to be part of our franchise family.
                  </p>
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#dc3545" }}>What to include:</h5>
                    <ul style={{ fontSize: "1rem", color: "#555" }}>
                      <li className="mb-2">Your full name and contact details</li>
                      <li className="mb-2">Preferred location for the franchise</li>
                      <li className="mb-2">Business background (if any)</li>
                      <li className="mb-2">Investment capacity</li>
                    </ul>
                  </div>
                  <Button 
                    variant="danger" 
                    className="w-100 mt-3 py-2"
                    style={{ borderRadius: "10px" }}
                    onClick={() => handleShowModal("letter")}
                  >
                    📄 Upload Letter of Intent
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card h-100 shadow-lg border-0" style={{ borderRadius: "15px", overflow: "hidden" }}>
                <div className="card-header text-white p-4" style={{ backgroundColor: "#28a745" }}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-white text-success fw-bold d-flex align-items-center justify-content-center" 
                         style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}>
                      2
                    </div>
                    <h4 className="ms-3 mb-0">Complete the Franchise Form</h4>
                  </div>
                </div>
                <div className="card-body p-4">
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
                    Fill out our official franchise application form with detailed information. 
                    Our team will review your application and guide you through the next steps.
                  </p>
                  <div className="mt-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#28a745" }}>What happens next:</h5>
                    <ul style={{ fontSize: "1rem", color: "#555" }}>
                      <li className="mb-2">Application review (3-5 business days)</li>
                      <li className="mb-2">Initial consultation meeting</li>
                      <li className="mb-2">Site evaluation and approval</li>
                      <li className="mb-2">Training and store setup</li>
                    </ul>
                  </div>
                  <Button 
                    variant="success" 
                    className="w-100 mt-3 py-2"
                    style={{ borderRadius: "10px" }}
                    onClick={() => handleShowModal("form")}
                  >
                    📝 Fill Franchise Form
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="p-4 rounded-3" style={{ backgroundColor: "#f8f9fa", border: "2px dashed #dc3545" }}>
              <h4 className="fw-bold mb-3" style={{ color: "#dc3545" }}>Ready to Start?</h4>
              <p style={{ fontSize: "1.1rem", color: "#666" }}>
                Contact us today to begin your franchise journey!
              </p>
              <p style={{ fontSize: "1rem", color: "#666" }}>
                📧 Email: hungergiantb@gmail.com | 📞 Phone: (02) 8123-4567
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Letter of Intent and Franchise Form */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: modalType === "letter" ? "#dc3545" : "#28a745", color: "white" }}>
          <Modal.Title>
            {modalType === "letter" ? "📄 Upload Letter of Intent" : "📝 Franchise Application Form"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitStatus === "success" && (
            <Alert variant="success">
              <Alert.Heading>✅ Success!</Alert.Heading>
              <p>
                Thank you for your interest! We've received your {modalType === "letter" ? "letter of intent" : "application"} and 
                will review it within 3-5 business days. We'll contact you via email or phone.
              </p>
            </Alert>
          )}

          {submitStatus === "error" && (
            <Alert variant="danger">
              <Alert.Heading>❌ Submission Failed</Alert.Heading>
              <p>
                Sorry, there was an error submitting your application. Please try again or contact us directly at 
                hungergiantb@gmail.com
              </p>
            </Alert>
          )}

          {submitStatus !== "success" && (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+63 912 345 6789"
                  required
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Preferred Franchise Location *</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City, Province"
                  required
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Business Background</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="businessBackground"
                  value={formData.businessBackground}
                  onChange={handleInputChange}
                  placeholder="Tell us about your business experience (if any)"
                  disabled={isSubmitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Investment Capacity *</Form.Label>
                <Form.Select
                  name="investmentCapacity"
                  value={formData.investmentCapacity}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select investment range</option>
                  <option value="500k-1m">₱500,000 - ₱1,000,000</option>
                  <option value="1m-2m">₱1,000,000 - ₱2,000,000</option>
                  <option value="2m-3m">₱2,000,000 - ₱3,000,000</option>
                  <option value="3m+">₱3,000,000+</option>
                </Form.Select>
              </Form.Group>

              {modalType === "letter" && (
                <Form.Group className="mb-3">
                  <Form.Label>Upload Letter of Intent (PDF, DOC, DOCX) *</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                    disabled={isSubmitting}
                  />
                  <Form.Text className="text-muted">
                    Maximum file size: 5MB
                  </Form.Text>
                </Form.Group>
              )}

              <div className="d-flex justify-content-end gap-2 mt-4">
                <Button variant="secondary" onClick={handleCloseModal} disabled={isSubmitting}>
                  Cancel
                </Button>
                <Button 
                  variant={modalType === "letter" ? "danger" : "success"} 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

FranchisingSection.displayName = "FranchisingSection";

export default FranchisingSection;