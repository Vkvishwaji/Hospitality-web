import React from "react";
import web from "../pages/images/ab.jpg";
import png from "../pages/images/epeppy_edited-2.png";

const Mice = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../images/ab.jpg" class="img-fluid " alt="home" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/abc.jpg" class="d-block w-100" alt="ab" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/home-p.jpg" class="d-block w-100" alt="abc" />
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

      <div className="container">
        <div className="col-6">
          <h3 className="text-center fw-bold">MICE</h3>
        </div>
      </div>

      <div class="container-fluid mice"  >
            <img src="images/mice.jpg" class="img-fluid d-block w-100 " alt="..."/>
            <div class="inner-container">
            <h3 class='has-text-align-center mice-1'>MEETINGS | INCENTIVES | CONFERENCES | EXHIBITIONS</h3>
            <p className="mice-2">Manage them all at one stop!Manage them all at one stop!</p>
           </div>
          </div>
         

        <div class="container ">
          <div class="row">
            <div class="col-10">
              <h4 class="fw-bold text-center">WELCOME!</h4>

              <small class="textcenter">
                Whatever be your event type be, we take pleasure in keeping
                every minor requirement in mind and construct the best event out
                of it.
                <br />
                <br />
                Events today are widened into many categories likes simple
                meetings, big conferences, product launches and so on. Our
                experts perfectly understand the difference between the types of
                events and make their project memorable with their creative
                touch and managerial skills.
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

export default Mice;
