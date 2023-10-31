import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top aos" data-aos="fade-up">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Useful Links</h2>
                  <ul>
                    <li>
                      <a href="about.html">
                        <i className="fas fa-angle-right me-1"></i>About Us
                      </a>
                    </li>
                    <li>
                      <a href="blog-list.html">
                        <i className="fas fa-angle-right me-1"></i>Blog
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i className="fas fa-angle-right me-1"></i>Login
                      </a>
                    </li>
                    <li>
                      <a href="register.html">
                        <i className="fas fa-angle-right me-1"></i>Register
                      </a>
                    </li>
                    <li>
                      <a href="forgot-password.html">
                        <i className="fas fa-angle-right me-1"></i>Forgot Password
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Help & Support</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-right me-1"></i>Browse Candidates
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-right me-1"></i>Employers
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-right me-1"></i>Job Packages
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-right me-1"></i>Jobs Featured
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-angle-right me-1"></i>Post A Job
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Other Links</h2>
                  <ul>
                    <li>
                      <a href="freelancer-dashboard.html">
                        <i className="fas fa-angle-right me-1"></i>Freelancers
                      </a>
                    </li>
                    <li>
                      <a href="freelancer-portfolio.html">
                        <i className="fas fa-angle-right me-1"></i>Freelancer
                        Details
                      </a>
                    </li>
                    <li>
                      <a href="project.html">
                        <i className="fas fa-angle-right me-1"></i>Project
                      </a>
                    </li>
                    <li>
                      <a href="project-details.html">
                        <i className="fas fa-angle-right me-1"></i>Project Details
                      </a>
                    </li>
                    <li>
                      <a href="post-project.html">
                        <i className="fas fa-angle-right me-1"></i>Post Project
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">Join our Newsletter</h2>
                  <p>
                    We help our customers harness the power of AI to make
                    smarter decisions
                  </p>
                  <div
                    className="banner-content aos aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <form
                      className="form"
                      name="store"
                      method="post"
                      action="https://kofejob.dreamguystech.com/template/project.html"
                    >
                      <div className="form-inner">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email address....."
                          />
                          <button className="btn btn-primary sub-btn" type="submit">
                            <i className="fas fa-long-arrow-alt-right long-arrow"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="social-icon d-flex">
                    <span>Follow us on : </span>
                    <ul>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fab fa-facebook-f"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fab fa-instagram"></i>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fab fa-twitter"></i>{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6 ">
                  <div className="footer-bottom-logo">
                    <a href="index.html" className="menu-logo">
                      <img
                        src="../../../assets/img/logo.png"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 right-text">
                  <ul className="nav footer-bottom-nav">
                    <li>
                      <a href="chats.html">Chat</a>
                    </li>
                    <li>
                      <a href="faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="review.html">Reviews</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="term-condition.html">Terms of use</a>
                    </li>
                  </ul>
                  <div className="copyright-text">
                    <p className="mb-0">
                      Copyright 2023 © KofeJob. All right reserved. Powered by
                      Dreamguys Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
