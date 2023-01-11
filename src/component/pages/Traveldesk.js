import React from "react";
import web from "../pages/images/ab.jpg";
import png from "../pages/images/epeppy_edited-2.png";
import royal from "../pages/images/m_royal.jpg";

const Traveldesk = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../images/abc.jpg" class="img-fluid " alt="home" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="./images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/ab.jpg" class="d-block w-100" alt="ab" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="./images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/home-p.jpg" class="d-block w-100" alt="abc" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="./images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-6">
          <h3 className="text-center fw-bold">TRAVEL DESK</h3>
        </div>
      </div>

      <div className="container-fluid trvel-d"  >
        <img
          src="images/travel-desk.jpg"
          className="img-fluid d-block w-100 "
          alt="..."
        />
        <div className="inner-container">
          <h3
            className="text-center travel-d1"
             
          >
            TRAVEL DESK SERVICES
          </h3>
          <p className="travel-d2"  >
            Your travel companion at your service!
          </p>
        </div>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col-10">
            <h4 class="fw-bold text-center">WELCOME!</h4>

            <small class="textcenter">
              Travel desk service allows you to have one of our travel
              operations expert at your defined location at a minimal cost and a
              minimum requirement of business volume.
              <br />
              <br />
              The expert will be working with full authority and capability of
              completing your travel request within minutes.
            </small>
            <hr />
            <h6 class="sb-title">SHARE THIS:</h6>
            <button type="button" class="btn btn-light">
              Twiter
            </button>
            <button type="button" class="btn btn-light">
              facebook
            </button>
            <br />
            <span class="badge bg-light text-dark">*Like</span>
            <br />
            <small>Be the first to like this.</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traveldesk;
