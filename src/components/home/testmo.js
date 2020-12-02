import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Parallax,Keyboard,Autoplay} from 'swiper';
import React, {useEffect} from 'react';
import { ProductConsumer } from '../../context/context';
import six from "../../images/testimonal/testimo.png";
import Img from '../../images/aboutUS/ab.jpg';
import Container from '@material-ui/core/Container';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import styled from "styled-components";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Parallax,Keyboard,Autoplay]);

export default () => {
  return (
 
         
          <ProductConsumer>
{value => {
const {home} = value ;
const Testimonial =home.testimonial;   
const Title =home.title.testimonial;


    return(
      <>
                       
      <Slid>
                    <div className="titleSection">
                           {Title}
                    </div>
      <Container>
      <Swiper className="swiper-container"
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{delay:4000}}
            direction="horizontal"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Testimonial.map(i =>{
              
              return(
                
                  <SwiperSlide className="swiper-slide">
              <div>
                  <div className="img">
                      <img src={six} />
                  </div>
                <h4 className="name">{i.name}</h4>

                <p>
              {i.content}
                </p>
              </div>
            </SwiperSlide>
                
           
              )
            })}
            
            
          </Swiper>
          </Container>
          </Slid>
  
          </>)
}}
</ProductConsumer>

   
  );
}


const Slid = styled.div`

background-image:linear-gradient(to right bottom, rgba(0,0,0,.7), rgba(0,0,0,.85)),url(${Img});
	background-repeat:no-repeat;
  background-size: cover;
  background-attachment:fixed;
  margin: 100px 0;
  padding: 50px 0;
  color:white;
  display:flex;
  flex-wrap: wrap;
  position: relative;
  align-content: center;
  text-align:center;

  .swiper-pagination-bullets {
    margin-bottom: 30px;
  
}
.name{
 
color:white;
text-transform:uppercase;
font-size:14px;
margin-top: 0; 
font-weight:700;
letter-spacing:3px;
}
.name:lang(en){
  padding-left: 3px;
}
.name:lang(ar){
  padding-right: 3px;
}
p{
  margin:50px auto;
  width:77%;
  color: #ddd;
  text-align:justify

  
}

.img{
    width:100px;
    height:100px;
    border-radius:50%;
    margin:0 auto;
    overflow: hidden;

    
}

`
