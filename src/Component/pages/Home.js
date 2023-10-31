import React from "react";
import "./alert/alert.css";
const Home = () => {
  return (
    <div>
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="rating d-flex">
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <i className="fas fa-star checked"></i>
                  <h5>Trused by over 2M+ users</h5>
                </div>
                <h1>
                  Get the perfect{" "}
                  <span className="orange-text">Developers & Projects</span>
                </h1>
                <p>With the world's #1 Developers marketplace</p>
                <form
                  className="form"
                  name="store"
                  id="store"
                  method="post"
                  action="https://kofejob.dreamguystech.com/template/project.html"
                >
                  <div className="form-inner">
                    <div className="input-group">
                      <span className="drop-detail">
                        <select className="form-control select" name="storeID">
                          <option value="project.html">Projects</option>
                          <option value="developer.html">Freelancers</option>
                        </select>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Search here"
                      />
                      <button className="btn btn-primary sub-btn" type="submit">
                        Search Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="banner-img aos" data-aos="fade-up">
                <img
                  src="../assets/img/banner-img.svg"
                  className="img-fluid"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div
                className="feature-item freelance-count aos"
                data-aos="fade-up"
              >
                <div className="feature-icon">
                  <img
                    src="../../../assets/img/icon/icon-01.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">9,207</h3>
                  <p>Freelance developers</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src="../../../assets/img/icon/icon-02.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="feature-content course-count">
                  <h3>
                    <span className="counter-up">6000 </span>
                    <span>+</span>
                  </h3>
                  <p>Projects Added</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item comp-project aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src="../../../assets/img/icon/icon-03.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">919,207</h3>
                  <p>Completed projects</p>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="feature-item comp-project aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img
                    src="../../../assets/img/icon/icon-03.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="feature-content course-count">
                  <h3 className="counter-up">998</h3>
                  <p>Companies Registered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section work">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 work-box bg1">
              <div className="work-content aos" data-aos="fade-up">
                <h2>
                  I need a Developed <span>Project</span>
                </h2>
                <p>
                  Get the perfect Developed project for your budget from our
                  creative community.
                </p>
                <a href="project.html">
                  <i className="fas fa-long-arrow-alt-right long-arrow"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 work-box want-works bg2">
              <div className="work-content aos" data-aos="fade-up">
                <h2>
                  Find Your Next Great <span>Job Opportunity!</span>
                </h2>
                <p>
                  Do you want to earn money, find unlimited clients and build
                  your freelance career?
                </p>
                <a href="developer.html">
                  <i className="fas fa-long-arrow-alt-right long-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <p>High performing solutions to your requests</p>
                <h2 className="header-title">
                  Get Inspired By Development Projects
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="../../../assets/img/project/project-01.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">Android apps</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-02.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">Laravel Projects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-03.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">React Projects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-04.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">Angular Projects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-05.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">.Net Projects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-06.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">Java Pojects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-07.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">Python Projects</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="project-item aos" data-aos="fade-up">
                <div className="project-img">
                  <a href="project.html">
                    <img
                      src="assets/img/project/project-08.jpg"
                      alt
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="project-content">
                    <h4>45</h4>
                    <h5>
                      <a href="project.html">PHP Development</a>
                    </h5>
                  </div>
                  <div className="pro-icon">
                    <div className="project-icon"></div>
                  </div>
                  <div className="project-content">
                    <h4>20</h4>
                    <h5>
                      <a href="project.html">Developers</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="see-all aos" data-aos="fade-up">
                <a href="project.html" className="btn all-btn">
                  View More Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section developer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mx-auto">
              <div className="section-header aos" data-aos="fade-up">
                <p>Work with talented people at the most affordable price</p>
                <h2 className="header-title">Most Hired Developers</h2>
              </div>
            </div>
          </div>
          <div
            id="developers-slider"
            className="owl-carousel owl-theme developers-slider aos"
            data-aos="fade-up"
          >
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-1.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Dran Gonzalez</a>
                  </h3>
                  <div className="freelance-specific">React Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">5.0 (30)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Illinois,
                      USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-2.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Timothy Smith</a>
                  </h3>
                  <div className="freelance-specific">PHP Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">3.5 (25)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Illinois,
                      USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Janet Paden</a>
                  </h3>
                  <div className="freelance-specific">Graphic Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.1 (30)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Illinois,
                      USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-4.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">James Douglas</a>
                  </h3>
                  <div className="freelance-specific">iOS Developer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.3 (31)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Florida, USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-2.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.7 (32)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Illinois,
                      USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.7 (32)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Alabama, USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-4.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.7 (32)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Illinois,
                      USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-5.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.7 (32)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Alabama, USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a
                  data-toggle="modal"
                  href="#rating"
                  className="favourite favourited"
                >
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-3.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.8 (55)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Alabama, USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
            <div className="freelance-widget">
              <div className="freelance-content">
                <a data-toggle="modal" href="#rating" className="favourite">
                  <i className="fas fa-star"></i>
                </a>
                <div className="freelance-img">
                  <a href="developer-details.html">
                    <img src="assets/img/user/avatar-5.jpg" alt="User Image" />
                    <span className="verified">
                      <i className="fas fa-check-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="freelance-info">
                  <h3>
                    <a href="developer-details.html">Richard Wilson</a>
                  </h3>
                  <div className="freelance-specific">UI/UX Designer</div>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">5.0 (4)</span>
                  </div>
                  <div className="freelance-tags">
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Web Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        UI Design
                      </span>
                    </a>
                    <a href="#">
                      <span className="badge badge-pill badge-design">
                        Node Js
                      </span>
                    </a>
                  </div>
                  <div className="freelance-blk-location">
                    <div className="freelancers-price">$25 Hourly</div>
                    <div className="freelance-location">
                      <i className="fas fa-map-marker-alt me-1"></i>Alabama, USA
                    </div>
                  </div>
                </div>
              </div>
              <div className="cart-hover">
                <a
                  href="developer-details.html"
                  className="btn-cart"
                  tabIndex="-1"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonial-section review">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-header aos" data-aos="fade-up">
                <p>High Performing Developers To Your</p>
                <h2 className="header-title">Review of the Users</h2>
              </div>
            </div>
          </div>
          <div
            id="testimonial-slider"
            className="owl-carousel owl-theme testimonial-slider aos"
            data-aos="fade-up"
          >
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <a href="review.html">
                    <img
                      className="img-fluid"
                      src="assets/img/review/review-01.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="review-info">
                  <h3>
                    <a href="review.html">Durso Raeen</a>
                  </h3>
                  <h5>Project Lead</h5>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.7</span>
                  </div>
                </div>
                <div className="test-quote-img">
                  <img
                    className="img-fluid"
                    src="assets/img/test-quote.svg"
                    alt="quote"
                  />
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
              </div>
            </div>

            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <a href="review.html">
                    <img
                      className="img-fluid"
                      src="assets/img/review/review-02.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="review-info">
                  <h3>
                    <a href="review.html">Camelia Rennesa</a>
                  </h3>
                  <h5>Project Lead</h5>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">4.8</span>
                  </div>
                </div>
                <div className="test-quote-img">
                  <img
                    className="img-fluid"
                    src="assets/img/test-quote.svg"
                    alt="quote"
                  />
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
              </div>
            </div>

            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <a href="review.html">
                    <img
                      className="img-fluid"
                      src="assets/img/review/review-03.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="review-info">
                  <h3>
                    <a href="review.html">Brayan</a>
                  </h3>
                  <h5>Team Lead</h5>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">5.0</span>
                  </div>
                </div>
                <div className="test-quote-img">
                  <img
                    className="img-fluid"
                    src="assets/img/test-quote.svg"
                    alt="quote"
                  />
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
              </div>
            </div>

            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <a href="review.html">
                    <img
                      className="img-fluid"
                      src="assets/img/review/review-02.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="review-info">
                  <h3>
                    <a href="review.html">Davis Payerf</a>
                  </h3>
                  <h5>Project Lead</h5>
                  <div className="rating">
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star"></i>
                    <span className="average-rating">3.2</span>
                  </div>
                </div>
                <div className="test-quote-img">
                  <img
                    className="img-fluid"
                    src="assets/img/test-quote.svg"
                    alt="quote"
                  />
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section app-version">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div
                className="app-version-img text-center aos"
                data-aos="fade-up"
              >
                <img
                  className="img-fluid"
                  src="assets/img/app-version.png"
                  alt="App"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="app-version-blk aos" data-aos="fade-up">
                <h2>
                  Get More In Our Application and Enjoy The Mobile App Version
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                  tempor nisl feugiat lectus in. Placerat pharetra eleifend
                  integer integer at. Nunc nunc eu arcu amet faucibus. Lorem
                  ipsum dolor sit amet consectetur. Nunc{" "}
                </p>
                <h5>Download our Mobile app in Both Platform</h5>
                <div className="app-img-inside">
                  <img
                    className="img-fluid"
                    src="assets/img/app-01.png"
                    alt="App"
                  />
                  <img
                    className="img-fluid"
                    src="assets/img/app-02.png"
                    alt="App"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section top-company">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <h6>Top Hiring Company</h6>
              </div>
            </div>
          </div>
          <div
            id="company-slider"
            className="owl-carousel owl-theme testimonial-slider aos"
            data-aos="fade-up"
          >
            <div className="company-logos">
              <img src="assets/img/company-logo-01.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-02.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-03.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-04.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-05.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-06.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-03.svg" alt />
            </div>
            <div className="company-logos">
              <img src="assets/img/company-logo-02.svg" alt />
            </div>
          </div>
        </div>
      </section>

      <section className="section news">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <p>High Performing Developers To Your</p>
                <h2 className="header-title">Feature Blog</h2>
              </div>
            </div>
          </div>
          <div className="row blog-grid-row">
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-01.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <a href="developer-details.html">
                          <img src="assets/img/img-02.jpg" alt="Post Author" />{" "}
                          <span> David Lee</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i> 4 Oct 2021
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Your next job starts right here
                    </a>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="blog-read">
                    <a href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-02.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <a href="developer-details.html">
                          <img src="assets/img/img-03.jpg" alt="Post Author" />{" "}
                          <span> Deborah Angel</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i> 10 Oct 2021
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">People who completed NAND?</a>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="blog-read">
                    <a href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex">
              <div className="blog grid-blog aos" data-aos="fade-up">
                <div className="blog-image">
                  <a href="blog-details.html">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/blog-03.jpg"
                      alt="Post Image"
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <ul className="entry-meta meta-item">
                    <li>
                      <div className="post-author">
                        <a href="developer-details.html">
                          <img src="assets/img/img-04.jpg" alt="Post Author" />{" "}
                          <span>Darren Elder</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="fas fa-calendar-alt"></i> 3 Nov 2021
                    </li>
                  </ul>
                  <h3 className="blog-title">
                    <a href="blog-details.html">
                      Kofejob - How to get job through online?
                    </a>
                  </h3>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur. Nunc tristique neque
                    tempor nisl feugiat lectus in. Placerat pharetra eleifend
                    integer integer at. Nunc nunc eu arcu amet faucibus.
                  </p>
                  <div className="blog-read">
                    <a href="blog-details.html">
                      Read More <i className="fas fa-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="see-all aos" data-aos="fade-up">
                <a href="blog-details.html" className="btn all-btn">
                  More Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section job-register">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="register-job-blk">
                <div className="job-content-blk aos" data-aos="fade-up">
                  <h1>Find Your Next Great Job Opportunity!</h1>
                  <p>
                    Quisque pretium dolor turpis, quis blandit turpis semper ut.
                    Nam malesuada eros nec luctus laoreet.
                  </p>
                </div>
                <div className="see-all mt-0 aos" data-aos="fade-up">
                  <a href="register.html" className="btn all-btn">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
