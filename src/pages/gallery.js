
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import Hero from '../components/hero';
import Soon from '../components/soon';
import Body from '../images/header/phone/body.png';
import Power from '../images/header/phone/power.png';
import Content from '../images/header/phone/content.png';










export default function Gallery() {
    
 /*global $, alert, console*/

 $(function () {
  
  $(".power").delay(1000).animate({opacity:'1'}).delay(3000).animate({right:'+=4px'});
  $(".content").delay(5000).animate({opacity:'1'});


     
  });
    
  return (

<ProductConsumer>
{value => {
    const {links} = value ;
    console.log(links[0].text)
    
    return(
            <Gallerys>
                <Hero></Hero>
               <Soon />

              
</Gallerys>
  
    )
}}
</ProductConsumer>
  )

   }

const Gallerys = styled.div`

color:orange;
.phone{
  height:330px;
  width:340px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  .body{
    z-index:3;
   

  }
  .content{
    width: 143px;
    height: 304px;
    position: absolute;
    left: 48.7%;
    transform: translateX(-50%);
    z-index: 2;
    opacity:0;
    transition:2s

  }
  .screen{
    position: absolute;
    background: #3e3e3e;
    height: 317px;
    width: 150px;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

  }
  .power{
    position: absolute;
    top: 22%;
    right: 24%;
    height: 44px;
    width: 23px;
  
}
}

`
/**<>
  
    </> */