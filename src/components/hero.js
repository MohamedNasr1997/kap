import React from 'react';
import styled from "styled-components";
import logo from "../images/header/t.jpg";
import { ImageAspectRatioRounded } from '@material-ui/icons';
import Soon from '../components/soon';








       

export function Neben({img, title, max, children}) {
         
  


    return (
   <>
   
        <HeroWrapper img={img} max={max}>
               
        </HeroWrapper>
       

</>
    )
}




const HeroWrapper = styled.div`

color: white;
	padding: 40px;
    height:95vh;
    background-image:linear-gradient(to right bottom, rgba(0,0,0,.15), rgba(0,0,0,.25)),url(${logo});
	background-size: cover;
	background-position: bottom;
	clip-path: polygon(0 0, 100% 0,100% 92%,0 100%);
  
  
 
`
















function Hero({backGround, title, max, children}) {
    
    return (
 <Bann backGround={backGround}> <div className="banner"></div>
 {children}
</Bann>
    )
}







export default Hero;

const Bann=styled.div`
.banner {
  position:relative;
    height:40vh;
    width:100%;
    background-image:linear-gradient(to right bottom, rgba(0, 0, 0,.2),rgba(0,0,0,.5)), url(${props => props.backGround});
			  background-size: cover;
			  background-position: center;
        clip-path: polygon(0 0, 100% 0,100% 75%,50% 100%,0 75%);
        @media (max-width: 768px) {
          height:25vh;

                    }
}
.title{

      font-size: xx-large;
      color: white;
      text-transform: uppercase;
      position: absolute;
			top: 28.5vh;
      border-radius: 2px;
      @media (max-width: 768px) {
                      font-size:18px;
                      top: 19vh;
                    }
				
}
.title:lang(en){
  letter-spacing: 8px;
  padding: 2px 4px;
}
.title:lang(ar){
  padding: 2px 8px;
}
.title:lang(en){
    left: 5vh;
    text-align:left;
    @media (max-width: 768px) {
              left:10px
                  }
}
.title:lang(ar){
right: 5vh;
text-align:right;
    @media (max-width: 768px) {
              right:10px
                  }
 
}
`