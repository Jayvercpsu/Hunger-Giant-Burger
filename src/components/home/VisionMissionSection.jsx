import { forwardRef } from "react";

const VisionMissionSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="vision_mission_section py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold" style={{ color: "#dc3545", fontSize: "2.5rem" }}>
          Vision, Mission & Core Values
        </h2>
        
        {/* Vision Card */}
        <div className="row g-4 mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0" style={{ backgroundColor: "#fff3cd", borderRadius: "15px" }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center justify-content-center" 
                       style={{ width: "60px", height: "60px", backgroundColor: "#ffc107", borderRadius: "12px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                  </div>
                  <h3 className="ms-3 mb-0 fw-bold" style={{ color: "#856404" }}>Vision</h3>
                </div>
                <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#333" }}>
                  To become the most trusted and loved affordable burger and rice meal brand, serving delicious, 
                  high-quality food anytime, anywhere across the Philippines.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="row g-4 mb-4">
          <div className="col-12">
            <div className="card shadow-sm border-0" style={{ backgroundColor: "#d1ecf1", borderRadius: "15px" }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="d-flex align-items-center justify-content-center" 
                       style={{ width: "60px", height: "60px", backgroundColor: "#17a2b8", borderRadius: "12px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                  </div>
                  <h3 className="ms-3 mb-0 fw-bold" style={{ color: "#0c5460" }}>Mission</h3>
                </div>
                <ul style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#333" }} className="ps-3 mb-0">
                  <li className="mb-2">To serve freshly prepared, flavorful, and affordable meals 24/7.</li>
                  <li className="mb-2">To provide fast, friendly, and reliable service for dine-in, pickup, and delivery.</li>
                  <li className="mb-2">To continuously create exciting promos and value meals that satisfy every customer.</li>
                  <li className="mb-2">To build a strong community by supporting local employment and online marketing partners nationwide.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="row g-4">
          <div className="col-12">
            <div className="card shadow-sm border-0" style={{ backgroundColor: "#d4edda", borderRadius: "15px" }}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <div className="d-flex align-items-center justify-content-center" 
                       style={{ width: "60px", height: "60px", backgroundColor: "#28a745", borderRadius: "12px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 16 16">
                      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                  </div>
                  <h3 className="ms-3 mb-0 fw-bold" style={{ color: "#155724" }}>Core Values</h3>
                </div>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Quality First</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          We never compromise on taste, freshness, and food safety.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Customer Happiness</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          Every customer matters. We aim to exceed expectations every time.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Affordability</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          Great food should be accessible to everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Integrity</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          We operate with honesty, transparency, and accountability.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Innovation</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          We continuously improve our menu, promotions, and service.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="p-3 rounded d-flex align-items-start" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
                      <div className="d-flex align-items-center justify-content-center flex-shrink-0" 
                           style={{ width: "45px", height: "45px", backgroundColor: "#28a745", borderRadius: "10px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 16 16">
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        </svg>
                      </div>
                      <div className="ms-3">
                        <h5 className="fw-bold mb-2" style={{ color: "#155724" }}>Teamwork</h5>
                        <p className="mb-0" style={{ fontSize: "1rem", color: "#333" }}>
                          Success comes from strong teamwork and respect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

VisionMissionSection.displayName = "VisionMissionSection";

export default VisionMissionSection;