import React from 'react';
import styled from "styled-components";
import Body from '../../images/header/phone/body.png';
import Power from '../../images/header/phone/power.png';
import Content from '../../images/header/phone/content.png';
import { FaGooglePlay,FaApple } from "react-icons/fa";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';









       

export default function Phone() {
         
  
 /*global $, alert, console*/
/*
 $(function () {
 
  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $(".power").position().top;

    if(y_scroll_pos > 4000) {
      console.log(scroll_pos_test);
      $(".power").delay(1000).delay(1000).animate({right:'+=4px'});
    $(".content").delay(3000).animate({opacity:'1'});
    }
});
    
 



     
  });
  */

    return (
   <>
   
   <AP>
       <Container>
               <Grid container spacing={0}>
                       <Grid item md={6} xs={12}>
                        <div className="info">
                            <h2>Kapci Decorat</h2>
                            <p>{document.documentElement.lang == "en" ?"You can Download Oue App mobile with KAPCI Coatings' newest system SmartMix. Color Online Mobile brings the convenience of the car color search" :
                            "  يمكنك تنزيل تطبيق التطبيق للهاتف المحمول باستخدام SmartMix أحدث نظام KAPCI Coatings. يوفر Color Online Mobile راحة البحث عن لون السيارة"}
                            </p>
                            
                                <div class="flex social-btns">
                                <a class="app-btn blu flex vert" href="http:apple.com">
                                <FaApple className="icon"/>
                                <p>Available on the <br/> <span class="big-txt">App Store</span></p>
                                </a>

                                <a class="app-btn blu flex vert" href="http:google.com">
                                    <FaGooglePlay className="icon" />
                                    <p>Get it on <br/> <span class="big-txt">Google Play</span></p>
                                </a>
                                
                                
                                </div>


                        </div>

                       </Grid>
                        <Grid item md={6} xs={12}>
                        <div className={document.documentElement.lang == "ar" ? "phone wow backInLeft" : "phone wow backInRight"} data-wow-delay="1">
                  <div className="body">
                    <img src={Body} />
                  </div>
                  <div className="content">
                  <img src={Content} />
                  </div>
                    <div className="screen"></div>
                    <div className="power">
                    <img src={Power} />
                  </div> 
                </div>
                       </Grid>
               </Grid>
               
               
                </Container>
        </AP>

</>
    )
}






const AP = styled.div`
    margin: 100px auto;
   
   
.phone{
  height:330px;
  width:340px;
  margin:auto;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  transform:scale(1.2);
  @media (max-width: 768px) {
                margin-top: 50px;
            } 
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
  


 
  .info {
    color: white;
    font-weight: bold;
    width: 70%;
    margin: auto;
    padding: 20px;
    border-radius: 3px;
    box-shadow: 2px 4px 8px 2px var(--darkMain);
    @media (max-width: 768px) {
                width: 90%;
            } 
    h2{
      text-align:center;
      color:var(--mainColor)
    }  
}
    p {
      font-family: 'Amiri', serif;
    font-family: 'Julius Sans One', sans-serif;


      color:#928a8a;
      max-width:370px;
      margin:25px auto;
    }
    .flex {
 display: flex;
 align-items: center;
 justify-content: center;

}

.app {
 &-btn {
  width: 45%;
  max-width: 160px;
  color: #fff;
  margin: 20px 10px;
  text-align: left;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Lucida Grande", sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  padding:11px;
  height: 55px;

  .icon{
    font-size:24px
  }
  &.blu {
   background-color: #101010;
   transition: background-color 0.25s linear;
   &:hover {
    background-color: #777;
   }
  }
  i {
   width: 20%;
   text-align: center;
   font-size: 28px;
   margin-right: 7px;
  }
  .big-txt {
   font-size: 17px;
   text-transform: capitalize;
  }
 }
}

    






`



