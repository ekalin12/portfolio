import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MrPort3000 from '../assets/images/Mr.Port3000.png';
import ApiExtension from '../assets/images/ApiExtension.png';
import FindYourSpace from '../assets/images/FindYourSpace.png';
import UnderConstruction from '../assets/images/under-construction.png';


import { Pagination, Navigation } from "swiper";


function Portfolio() {


  return (
  <section id="Portfolio" className="section">

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={MrPort3000} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">Mr.Port 3000</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={ApiExtension} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">API Extension</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={FindYourSpace} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">Find Your Space</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={UnderConstruction} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">Work in progress...</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={UnderConstruction} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">Work in progress...</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
        <SwiperSlide className="card swiper-slide">
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
              <img src={UnderConstruction} alt="" class="card-img" />
          </div>
      </div>
      <div class="card-content">
          <h2 class="name">Work in progress...</h2>
          <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
      </div>
        </SwiperSlide>
      </Swiper>

  </section>
  )

}

export default Portfolio;


    // <div class="slide-container swiper">
    //         <div class="slide-content">
    //             <div class="card-wrapper swiper-wrapper">
    //                 <div class="card swiper-slide">
    //                     <div class="image-content">
    //                         <span class="overlay"></span>
    //                         <div class="card-image">
    //                             {/* <!--<img src="images/profile1.jpg" alt="" class="card-img">--> */}
    //                         </div>
    //                     </div>
    //                     <div class="card-content">
    //                         <h2 class="name">David Dell</h2>
    //                         <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
    //                         <button class="button">View More</button>
    //                     </div>
    //                 </div>
    //                 <div class="card swiper-slide">
    //                     <div class="image-content">
    //                         <span class="overlay"></span>
    //                         <div class="card-image">
    //                             {/* <!--<img src="images/profile2.jpg" alt="" class="card-img">--> */}
    //                         </div>
    //                     </div>
    //                     <div class="card-content">
    //                         <h2 class="name">David Dell</h2>
    //                         <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
    //                         <button class="button">View More</button>
    //                     </div>
    //                 </div>
    //                 <div class="card swiper-slide">
    //                     <div class="image-content">
    //                         <span class="overlay"></span>
    //                         <div class="card-image">
    //                             {/* <!--<img src="images/profile3.jpg" alt="" class="card-img">--> */}
    //                         </div>
    //                     </div>
    //                     <div class="card-content">
    //                         <h2 class="name">David Dell</h2>
    //                         <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
    //                         <button class="button">View More</button>
    //                     </div>
    //                 </div>
    //                 <div class="card swiper-slide">
    //                     <div class="image-content">
    //                         <span class="overlay"></span>
    //                         <div class="card-image">
    //                             {/* <!--<img src="images/profile4.jpg" alt="" class="card-img">--> */}
    //                         </div>
    //                     </div>
    //                     <div class="card-content">
    //                         <h2 class="name">David Dell</h2>
    //                         <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
    //                         <button class="button">View More</button>
    //                     </div>
    //                 </div>
    //                 <div class="card swiper-slide">
    //                     <div class="image-content">
    //                         <span class="overlay"></span>
    //                         <div class="card-image">
    //                             {/* <!--<img src="images/profile5.jpg" alt="" class="card-img">--> */}
    //                         </div>
    //                     </div>
    //                     <div class="card-content">
    //                         <h2 class="name">David Dell</h2>
    //                         <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>
    //                         <button class="button">View More</button>
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>
    //         <div class="swiper-button-next swiper-navBtn"></div>
    //         <div class="swiper-button-prev swiper-navBtn"></div>
    //         <div class="swiper-pagination"></div>
    //     </div>

    // <div className="portfolioTop">
    //   <div className="portfolioText">
    //     PORTFOLIO
    //     <div className="portfolioTextOutline">.</div>
    //   </div>
    // </div>
    // <div className="portfolioBottom">
    //   <div className="portfolioCard">
    //     <div className="pcTop">
    //       <div className="pcTopText">
    //         <div className="pcTopNumber">01.</div>
    //         <div className="pcTopTitle">Mr. Port 3000</div>
    //       </div>
    //       <div className="pcTopImage">Image Here</div>
    //     </div>
    //     <div className="pcBottom">
    //       <div className="pcBottomTitle">Technologies</div>
    //       <div className="pcBottomTech">
    //         <div className="pcBottomTechTitle">Javascript</div>
    //         <div className="pcBottomTechTitle">React</div>
    //         <div className="pcBottomTechTitle">Sass</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="portfolioCard">
    //     <div className="pcTop">
    //       <div className="pcTopText">
    //         <div className="pcTopNumber">01.</div>
    //         <div className="pcTopTitle">Mr. Port 3000</div>
    //       </div>
    //       <div className="pcTopImage">Image Here</div>
    //     </div>
    //     <div className="pcBottom">
    //       <div className="pcBottomTitle">Technologies</div>
    //       <div className="pcBottomTech">
    //         <div className="pcBottomTechTitle">Javascript</div>
    //         <div className="pcBottomTechTitle">React</div>
    //         <div className="pcBottomTechTitle">Sass</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="portfolioCard">
    //     <div className="pcTop">
    //       <div className="pcTopText">
    //         <div className="pcTopNumber">01.</div>
    //         <div className="pcTopTitle">Mr. Port 3000</div>
    //       </div>
    //       <div className="pcTopImage">Image Here</div>
    //     </div>
    //     <div className="pcBottom">
    //       <div className="pcBottomTitle">Technologies</div>
    //       <div className="pcBottomTech">
    //         <div className="pcBottomTechTitle">Javascript</div>
    //         <div className="pcBottomTechTitle">React</div>
    //         <div className="pcBottomTechTitle">Sass</div>
    //       </div>
    //     </div>
    //   </div>

    // </div>