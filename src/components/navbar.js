
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import { MdLanguage } from "react-icons/md";
import logo from "../images/logo.png";
import {Link, Route,useParams,useRouteMatch} from "react-router-dom";

import { useTranslation } from 'react-i18next';
import { AiFillFormatPainter } from "react-icons/ai";




export default function ButtonAppBar() {
    const { i18n } = useTranslation();
    const changeLanguag=(lang)=>{
        i18n.changeLanguage(lang);
        window.location.reload(true);
    }
    
/*global $, alert, console*/

$(function () {
    $("ul li a").on('click',function () {
       
      $("ul li a").removeClass('active');
  $(this).addClass('active');
       




        
    });
   
    });

  return (

<ProductConsumer>
{value => {
    const {links,megaProduct} = value ;
const Cars =megaProduct[0];
const Woods =megaProduct[1];
const Paints =megaProduct[2];
const Carsss =megaProduct[0].links[0].products;

console.log(Carsss)


    return(
            <Nav>
     <nav class="navbar navbar-expand-lg navbar-dark">
 <div class="container">
     <div className="logo">
         <img src={logo}/>
     </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbar">
    <ul class="navbar-nav float-right">
    <li class="nav-item">
    <Link class="nav-link active" to='/'>{links[0].text}</Link>
      </li>
      
      <li class="nav-item dropdown menu-area">
        <a class="nav-link dropdown-toggle" href="#" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {links[1].text}
        </a>
        <div class="dropdown-menu mega-area" aria-labelledby="mega-one">
          <div class="row">
              <div class="col-lg-3 col-sm-6">
                  <h2>{Cars.section}</h2>
                  {
                    Cars.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Woods.section}</h2>
                  {
                    Woods.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Paints.section}</h2>
                  {
                    Paints.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              
          </div>
          
        </div>
      </li>
      
      <li class="nav-item">
      <Link class="nav-link" to='/gallery'>{links[3].text}</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/careers'>{links[4].text}</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/aboutus'>{links[5].text}</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <MdLanguage />
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=>changeLanguag('en')}>English</a>
          <a class="dropdown-item" onClick={()=>changeLanguag('ar')}>العربية</a>
        </div>
      </li>
    </ul>
    
  </div>
 </div>
</nav>

</Nav>
  
    )
}}
</ProductConsumer>
  )

   }

const Nav = styled.div`
font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 16px;
    z-index:99;
  position: absolute;
  width:100%;
 
  
  
  
.logo{
    width:155px
}
li {
    margin-left:12px;
    letter-spacing:1px;
    transition:all 1s ease-in-out;

}
.menu-area{
  position: static !important;

}

.mega-area{
    position:absolute;
    width:800px;
    left:0;
    right:0;
    padding:20px


}
.active {
  color:orange !important
}

`
/**<>
  
    </> */