import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Parallax,Keyboard,Autoplay} from 'swiper';
import React from 'react';
import { ProductConsumer } from '../context/context';
import Hero from '../components/hero';

import Img from '../images/aboutUS/ab.jpg';
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
    const {about,title} = value ;
    
    return(
      <>
                           <Hero backGround={Img}>
                                    <div className="title" style={{
                                          "background":`linear-gradient(to right bottom, var(--lightMain),var(--darkMain))`

                                    }}>{title.about}</div>
                            </Hero>
      <Slid>
      <Container>
      <Swiper className="swiper-container"
            slidesPerView={1}
            spaceBetween={50}
            autoplay={{delay:10000}}
            navigation
            pagination={{ clickable: true }}
      
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {about.map(i =>{
              const Content =i.content;
              const items=i.secoundry;
              
              return(
                
                  <SwiperSlide className="swiper-slide">
              <div>
                <h1 className="titleSections">{i.title}</h1>

                <ol>
                {
                Content.map(i => {return(
                  <li>{i}</li>
                )})
              }
                </ol>
                <ol className="country">
                    {items ? 

                      items.map(i => {return(
                        <li >{i}</li>
                      )})
                    :""}
                </ol>
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
  margin:50px 0;
  color:white;
  display:flex;
  flex-wrap: wrap;
  padding: 30px;

  align-content: center;

  .swiper-pagination-bullets {
    margin-bottom: 30px;
  
}

ol{
  margin:50px auto;
  width:77%;
  li{
    list-style-type:initial;
    line-height: 35px;
  }
  li:lang(en){
    text-align: left;
  }
  li:lang(ar){
    text-align: right;
  }
  
}
.swiper-slide:nth-of-type(1) {

  ol{
    li{
      list-style-type:none;

    }
  }
}
.country {
  columns: 7;
  @media (max-width: 992px) {
    columns: 5;
  }
  @media (max-width: 768px) {
    columns: 3;
  }
  li{
    margin: 5px 40px;
    list-style: square;
    font-size: 16px;  }
}
`
