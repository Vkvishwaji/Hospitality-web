import React from "react";

const Aboutus = () => {
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

      <article class="container-fluid">
        <div class="col-6 abuot">
          <h4
            class="text-center  fw-bold"
            style={{
              letterSpacing: ".1em",
              lineHeight: "1.25",
              margin: "0 0 0.75em",
              padding: "0.75em 0 0",
              textTransform: "uppercase",
            }}
          >
            ABOUT US
          </h4>
        </div>

        <div className="container">
          <div className="row cont-r">
            <div className="col-sm-4">
              <img
                src="../images/epeppy_edited-2.png"
                width="370"
                alt="epeppy-a.png"
              />
              <br />
              <ul className="list-inline wp-container-1 wp-block-social-links">
                <li className="wp-social-link wp-social-link-instagram wp-block-social-link">
                  <a href="http://facebook.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </li>
                <li className="wp-social-link wp-social-link-instagram wp-block-social-link">
                  <a href="http://linkedin.com">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                </li>
              </ul>

              <div class="mt-5 mr-5">
                <span class="badge like rounded-pill bg-light text-dark">
                  *Like
                </span>
                <br />
                <small>Be the first to like this.</small>
              </div>
             </div>
            <div className="col-sm-8 mt-3">
              <h6 className="fw-bold ajourney h4">
                A JOURNEY OF MORE THAN TWO DECADES
              </h6>
              <small>
                At E-Peppy Hospitality, we work daily with a single mission of
                making travel more fun and pocket friendly. With the collection
                of all travel services at one stop, we are a complete travel
                management company altogether. We have a dedicated team to
                accomplish your travel requests and hence have a task force
                capable of providing you with best experience throughout.
              </small>
              <br />
              <br />
              <blockquote className="blockquote block-qute">
                <small className="text-muted">
                  I have spent over 20 years in tourism industry focusing on
                  luxury travel as well as business travel. I have learnt that
                  every corporate needs business travel managers to frame their
                  travel needs. We want to make the corporate travel relaxing
                  and fit as per everyone’s requirement.
                </small>
                <br />
                <br />
                <footer className="blockquote-footer mt-3">
                  Richa B. Diwakar,<strong>Business Head</strong>{" "}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Aboutus;
