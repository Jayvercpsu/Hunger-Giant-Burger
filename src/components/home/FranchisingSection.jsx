import { forwardRef } from "react";
import { Button } from "react-bootstrap";

const FranchisingSection = forwardRef((props, ref) => {
  const handleDownloadForm = () => { 
    const link = document.createElement('a');
    link.href = '/Franchise-Assessment-Form.pdf';
    link.download = 'Franchise-Assessment-Form.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hungergiantburger@gmail.com?subject=Franchise Application';
  };

  return (
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
                  <h4 className="ms-3 mb-0">Download Franchise Form</h4>
                </div>
              </div>
              <div className="card-body p-4">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
                  Download our official franchise assessment form and fill it out with your information. 
                  This form helps us understand your business goals and qualifications.
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
                  onClick={handleDownloadForm}
                >
                  📄 Download Franchise Form
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
                  <h4 className="ms-3 mb-0">Submit via Email</h4>
                </div>
              </div>
              <div className="card-body p-4">
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#333" }}>
                  After completing the form, send it to our email address. 
                  Our team will review your application and contact you within 3-5 business days.
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
                  onClick={handleEmailClick}
                >
                  📧 Send to Email
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
              📧 Email: hungergiantburger@gmail.com | 📞 Phone: 09456601813
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

FranchisingSection.displayName = "FranchisingSection";

export default FranchisingSection;