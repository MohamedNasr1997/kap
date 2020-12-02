import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';

import "react-image-gallery/styles/css/image-gallery.css";


import one from "../../images/gallery/1.jpg";
import two from "../../images/gallery/2.jpg";
import three from "../../images/gallery/3.jpg";
import four from "../../images/gallery/4.jpg";
import five from "../../images/gallery/5.jpg";
import six from "../../images/gallery/6.jpg";
import seven from "../../images/gallery/7.jpg";
import eight from "../../images/gallery/8.jpg";

import ImageGallery from 'react-image-gallery';






const images = [
  {
    original: `${one}`,
    thumbnail: `${one}`,
  },
  {
    original: `${two}`,
    thumbnail: `${two}`,
  },
  {
    original: `${three}`,
    thumbnail: `${three}`,
  },
  {
    original: `${four}`,
    thumbnail: `${four}`,
  },
  {
    original: `${five}`,
    thumbnail: `${five}`,
  },
  {
    original: `${six}`,
    thumbnail: `${six}`,
  },
  {
    original: `${seven}`,
    thumbnail: `${seven}`,
  },
  {
    original: `${eight}`,
    thumbnail: `${eight}`,
  }


];

function Gallery() {
  return (
    
      <ProductConsumer>
        {value => {
            const {home} = value ;
            const Title =home.title.gallery;

        
        
        return( 
     <OurGallery>

            <div className="titleSection transform">
               {Title}
            </div>
            <div class="container"> 
               <ImageGallery items={images} />
            </div>
    
    </OurGallery>
        )
      }}
      </ProductConsumer>
   
   

    
      
    )
}


export default Gallery;

const OurGallery=styled.div`
   margin: 100px 0;
    padding: 50px 0;
background-color:#656565;
background-attachment: fixed;
background-size: cover;
transform: skewY(-2deg);

	& > *{
    transform: skewY(2deg);
     }
     .transform{
      transform: skewY(2deg) translateX(-50%) !important;
    }
   

`

