import React from "react";

import png from "../pages/images/epeppy_edited-2.png";

const Services = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img src="../images/abc.jpg" className="img-fluid " alt="home" />
            <div className="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../images/home-p.jpg"
              className="d-block w-100"
              alt="ab"
            />
            <div className="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/ab.jpg" class="d-block w-100" alt="abc" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <header className="entry-header text-center">
          <span className="h1">SERVICES</span>
        </header>
        <p className="text-align-left">
          We offer a range of services to help you achieve the results you’re
          after. From hotel bookings to manage conference, from organizing an
          entire <br />
          event to booking long stays at apartments, we capable of giving you
          the best solution always a your ease.
        </p>
        <div class="row">
          <div class="col">
            <div>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="../images/s-1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../images/s-2.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="../images/s-3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <h2 className="has-text-align-center">HOTEL BOOKINGS</h2>
            <p className="has-small-font-size">
              With global contracts with renowned hotel chains like Taj Group of
              Hotels, The Oberoi Group, Hilton Hotels, Accor Hotels, ITC Hotels,
              Marriott Group of Hotels, Radisson Hotels, Sarovar Group of
              Hotels, we offer you our services at the best price possible
            </p>
          </div>

          <div class="col">
            <div className="wp-container-2 wp-block-column">
              <div className="wp-block-image">
                <figure className="aligncenter ">
                  <img src="../images/car-1.jpg" className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <h2 className="has-text-align-center">MICE</h2>
            <p className="has-small-font-size">
              Meetings and conference being an integral part of an established
              business followed by events are to be conducted keeping in mind
              all the requirement. You can rely on our experienced team to
              deliver that.
            </p>
          </div>
          <div class="col">
          <div className="wp-container-2 wp-block-column">
              <div className="wp-block-image">
                <figure className="aligncenter ">
                  <img src="../images/horses.jpg" className="img-fluid" alt="" />
                </figure>
              </div>
              <h2 className="has-text-align-center">TRAVEL DESK</h2>
            <p className="has-small-font-size">
              MHaving a professional sitting adjacent to you to work as you ask for is always a step forward. We give you the ease of placing one of our learned professional at your office to get your bookings processed swiftly and efficiently
            </p>
            </div>
           

          </div>  
        </div>
      </div>
      <hr className="featurette-divider"style={{ maxWidth: "650px",marginLeft: "auto",marginRight: "auto"}} />
      <h2 className="text-center fw-bold" style={{color:"#ccc"}}>LET’S BUILD SOMETHING TOGETHER.</h2>
      <div className="wp-block-button aligncenter text-center">
        <a className="wp-block-button_link btn-get" href="#">Get in touch!</a>
      </div>
      <hr className="featurette-divider"style={{ maxWidth: "650px",marginLeft: "auto",marginRight: "auto"}} />
      <div className="col-2 text-align-center service-bot my-5">
      <hr className="featurette-divider"style={{ maxWidth: "248px",marginLeft: "auto",marginRight: "auto"}} />
               <h6 class="sb-title">
                SHARE THIS:
               </h6>
               <button type="button" class="btn btn-light">Twiter</button>
               <button type="button" class="btn btn-light">facebook</button><br/>
               <span class="badge bg-light text-dark">*Like</span><br/>
               <small>
                 Be the first to like this.
                </small>
      </div>
    </>
  );
};

export default Services;
