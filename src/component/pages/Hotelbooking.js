 
import React from 'react'
  
import png from "../pages/images/epeppy_edited-2.png";
 


const Hotelbooking = () => {
  return (
    <>
    <div>
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
                <img src={png} alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../images/home-p.jpg" class="d-block w-100" alt="abc" />
            <div class="carousel-caption d-none d-md-block">
              <a href="https://epeppy.com">
                <img src={png} alt="png" />
              </a>
              <h1>E-PEPPY HOSPITALITY</h1>
              <p>Circumscribe the globe</p>
            </div>
          </div>
        </div>
      </div>
     </div>


        <div className="container">
           <div className="col-6">
             <h3 className="text-center fw-bold">HOTEL BOOKINGS</h3>
           </div>
        </div>     
        

             <div className="container-fluid royal">
              <img src="../images/m_royal.jpg" classNameName="img-fluid d-block w-100 " alt="..."/>
              <div className="inner-container">
              <h3 className='has-text-align-center royal-1'>CHOOSING THE CORRECT ACCOMMODATION</h3>
              <p className='has-text-align-center royal-2'>Take advantage of our geographical knowledge to get you the best hotel bookings</p>
             </div>
            </div>


             <div class="container ">
             <div class="row">
             <div class="col-10">
              <h4 class="fw-bold text-center">DIVERSITY IS THE KEY!</h4>
          
              <small class="textcenter">
                Everyone’s needs differ when it comes to the booking of accommodation. We let you choose from a variety of hotel and other accommodation options to suit your travel duration, budget and style.
            
              <br/><br/>
               We’re closely knit with hoteliers across the globe. Hence, we are capable of helping you pick the right choice as per your assigned budget.
               </small>
               <hr />
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
             
           </div>
         </div>
         
       
       
            
   </>
  )
}

export default Hotelbooking