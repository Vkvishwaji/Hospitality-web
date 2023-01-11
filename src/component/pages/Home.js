import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../images/ab.jpg" className="img-fluid img-f" alt="home" />
            <div className="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src="../images/epeppy_edited-2.png" alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="../images/abc.jpg" className="d-block w-100" alt="ab" />
            <div className="carousel-caption d-none d-md-block">
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






      <div className="container marketing">
    
        <div className="row featurette" style={{padding: "50px"}}>
          <div className="col-md-7" style={{position: "relative",top: "90px"}}>
            <h4 className="featurette-heading fw-bold" style={{color:"#800080"}}>
              <span>CORPORATE TRAVEL MANAGEMENT SERVICES</span>
            </h4>
            <p class="lead">
              E-Peppy Hospitality is a Corporate Travel Management company which
              excels in managing and delivering all travel allied services under
              a single roof.
            </p>
            <p>
              We have designated team members to look after the various travel
              segments (hotel bookings, car rentals, meetings & conferences, bus
              & train bookings, etc.), who are masters of their segment and
              hence deliver the best as per your requirement parameters.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src="https://epeppy.files.wordpress.com/2020/06/element5-digital-ue2t1tcfsn8-unsplash.jpg"
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              alt=""
            />
          </div>
        </div>
        <div className="row text-center">
        <a href="http://www.epeppy.com/service" style={{textDecoration: "none",padding:" 15px"}}>
          <span style={{color: '#800080',padding:"40px"}} className="has-inline-color h3  fw-bold"> WHAT WE DO</span>
        </a>
       

          <hr className="featurette-divider"style={{ maxWidth: "100px",marginLeft: "auto",marginRight: "auto"}} />
         
        </div>

         
        <div class="row featurette hotel-car-bus">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">HOTEL BOOKINGS </h2>
            <p class="lead">
              We are closely knit with almost the major hotel brands and
              independent hotels of the world. You can rely on us for our
              masterly team for all your accommodation needs. We are highly
              experience in organizing conferences, meeting, product launches,
              seminars etc. too
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="https://epeppy.files.wordpress.com/2020/05/lewis-parsons-xifiocgx4pc-unsplash.jpg?strip=info&w=2000"
              alt=""
            />
          </div>
        </div>
         
        <div class="row featurette hotel-car-bus">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">CAR RENTALS </h2>
            <p class="lead">
              We are closely knit with almost the major hotel brands and
              independent hotels of the world. You can rely on us for our
              masterly team for all your accommodation needs. We are highly
              experience in organizing conferences, meeting, product launches,
              seminars etc. too
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="../images/download-6.webp"
              alt=""
            />
          </div>
        </div>
         
        <div class="row featurette hotel-car-bus">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">BUS & TRAIN BOOKINGS</h2>
            <p class="lead">
              We are closely knit with almost the major hotel brands and
              independent hotels of the world. You can rely on us for our
              masterly team for all your accommodation needs. We are highly
              experience in organizing conferences, meeting, product launches,
              seminars etc. too
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="../images/download-2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr className="featurette-divider"style={{ maxWidth: "100px",marginLeft: "auto",marginRight: "auto"}} />
      <div 
        data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
        className="container wp-block-cover alignfull has-background-dim-30 has-background-dim"
        style={{ backgroundImage: "url("+"../images/kira-auf.jpg"+")" }}
        //style={{backgroundColor:"blue", backgroundImage: "url("+"./images/kira-auf.jpg"+")" }}
      >
        <div
          data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
          className="h2-custom wp-block-cover__inner-container"
          style={{color:"white"}}
        >
          <div
            data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
            aria-hidden="true"
            class="wp-block-spacer"
         
          ></div>

          <p className="has-text-align-center meet-b margin-bottom-half has-small-font-size">
          
            <strong>Meet the better us</strong>
          </p>

          <h2 className="text-center margin-top-half">
            Our Organization in Numbers
          </h2>

          <hr className="wp-block-separator" />

          <div
            data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
            class="wp-container-7 wp-block-columns alignwide"
          >
            <div
              data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
              className="wp-container-3 twothousend wp-block-column"
            >
              <h2 class="has-text-align-center margin-bottom-none">
                <strong>2000+</strong>
              </h2>

              <p class="has-text-align-center margin-top-none">
                bookings per month
              </p>
            </div>

            <div
              data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
              className="wp-container-4 twentythree wp-block-column"
            >
              <h2 className="has-text-align-center margin-bottom-none">
                <strong>23</strong>
              </h2>

              <p className="has-text-align-center margin-top-none">
                experts working
              </p>
            </div>

            <div
              data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
              className="text-center ninetysix"
            >
              <h2 className="has-text-align-center margin-bottom-none">
                <strong>96</strong>
              </h2>

              <p className="has-text-align-center margin-top-none">
                active clients
              </p>
            </div>

            <div
        
              data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
              className="text-end hundred mb-3"
            >
              <h2 className="has-text-align-center margin-bottom-none">
                <strong>100%</strong>
              </h2>

              <p className="has-text-align-center margin-top-none">
                satisfied customers
              </p>
            </div>
          </div>

          <div
            data-carousel-extra='{"blog_id":176118490,"permalink":"https:\/\/epeppy.com\/"}'
            aria-hidden="true"
            class="wp-block-spacer"
          ></div>
        </div>
      </div>

      <hr className="featurette-divider"style={{ maxWidth: "100px",marginLeft: "auto",marginRight: "auto"}} />
      <div class="row featurette why-love">
        <div class="col-md-6 order-md-2">
          <h3 class="featurette-heading fw-bold" style={{color:"#800080"}}>WHY YOU’LL LOVE US</h3>
          <p class="lead">
            We understand that one solution doesn’t fit for all.
            <br /> We groom your every requirement of travel segment with our
            touch of expertise.
          </p>
          <p>
            <strong>We’re available 24 by 7 a week</strong>
          </p>
          <ul>
            <li>
              <em>Intense geographical knowledge</em>
            </li>
            <li>
              <em>Tailored to your needs</em>
            </li>
            <li>
              <em>Competitive costing</em>
            </li>
            <li>
              <em>24/7 service</em>
            </li>
            <li>
              <em>Our values outweighs our costing</em>
            </li>
          </ul>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            className="rounded img-oxford float-start ms-5"
            width="250"
            height="250"
            src="../images/bill-oxford.webp"
            alt=""
          />
        </div>


        </div>
         <div className="container" style={{ padding: "15px"}}>
         <div className="row">
          <div className="col">
          <div
        className="wp-block-jetpack-rating-star margin-bottom-half"
        
        itemprop="reviewRating"
        itemscope=""
        itemtype="http://schema.org/Rating"
      >
        <p>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
        </p>
        <span
          itemprop="ratingValue"
          class="screen-reader-text fw-bold"
          content="5"
        >
          “Excellent Service”
        </span>
        <p class="fw-lighter">I have been associated with E-Peppy team since years for now and they have hardly ever disappointed me. They deserve more than just a praise</p>
        <p class="fw-normal">Prachi Jain</p>
       </div>
           </div>
            <div class="col">
            <div
        class="wp-block-jetpack-rating-star margin-bottom-half"
        
        itemprop="reviewRating"
        itemscope=""
        itemtype="http://schema.org/Rating"
      >
        <p>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
        </p>
        <span
          itemprop="ratingValue"
          class="screen-reader-text fw-bold"
          content="5"
        >
          “Love the flexibility”
        </span>
        <p class="fw-lighter">You make my job easy. Being 24/7 available with no compromise over the services is the best part
          </p><br/>
          <p class="fw-normal">Arpit Sharma</p>
       </div>
            </div>
           <div class="col">
           <div
        class="wp-block-jetpack-rating-star margin-bottom-half"
        
        itemprop="reviewRating"
        itemscope=""
        itemtype="http://schema.org/Rating"
      >
        <p>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
          <span aria-hidden="true">⭐</span>
        </p>
        <span
          itemprop="ratingValue"
          class="screen-reader-text fw-bold"
          content="5"
        >
          “Fantastic quality”
        </span>
        <p class="fw-lighter">I am always surprised by the level of geographical knowledge your team possess. I am tend to learn a lot too
           </p>
           <p class="fw-normal">Sameer Mittal</p>
       </div>
            </div>
           </div>
            </div>
      

       
    </>
  );
};

export default Home;
