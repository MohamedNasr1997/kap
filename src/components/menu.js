
import React,{useState} from 'react';
import {Helmet} from "react-helmet";

import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import IconLangauge from './matrialUi/iconLangauge'
import {Link, Route,useParams,useRouteMatch} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { MdLanguage } from "react-icons/md";

import { useTranslation } from 'react-i18next';
import {marginLeft} from '../assets/cssRTL'



export default function Menu({open}) {
    const { i18n,t } = useTranslation();
   

    const [menu,setMenu]=useState(false)
    const lange =i18n.language
/*global $, alert, console*/

$(function () {
    $("ul li a").on('click',function (e) {
       
      $("ul li a").removeClass('active');
  $(this).addClass('active');

       

    });

  
    });
 

  return (<>
           
<ProductConsumer>
{value => {
    const {links,megaProduct,lange} = value ;
const Cars =megaProduct[0];
const Woods =megaProduct[1];
const Paints =megaProduct[2];
const Carsss =megaProduct[0].links[0].products;

const changeLanguag=(lang)=>{
  i18n.changeLanguage(lang);
  window.location.reload(true);
}

document.getElementsByTagName("html")[0].setAttribute("lang", lange);

    return(
      <Menus open={open} menu={menu}>
             
             <Helmet>
                <html dir={ lange ==="en" ? "ltr" :"rtl"} />
            </Helmet>

              <li>
                <Link class="nav-link hov" data-link={links[0].text} to='/'>{links[0].text}</Link>
              </li>
              <li className="drop-down">
                <Link class="nav-link hov" data-link={links[1].text} >{links[1].text}</Link>
                <div class="mega-menu">
                <Container>
                <Grid className="mega" container spacing={3}>
                   <Grid className="child" item md={4} xs={12}>
                        <h2>{Cars.section}</h2>
                        {
                            Cars.links.map(li => {
                            return(
                            <Link class="mega-link" to={li.bath}>{li.name}</Link>
                            )
                            })
                        }
                        
                   </Grid>

                   <Grid className="child" item md={4} xs={12}>
                        <h2>{Woods.section}</h2>
                        {
                            Woods.links.map(li => {
                            return(
                            <Link class="mega-link" to={li.bath}>{li.name}</Link>
                            )
                            })
                        }
                        <hr />
                        <Link class="service" to="/branchs">
                          {document.documentElement.lang =="en" ? "Where To Buy" : "ابحث عن اقرب وكيل لك"}
                        </Link>
                   </Grid>

                   <Grid className="child" item md={4} xs={12}>
                        <h2>{Paints.section}</h2>
                        {
                            Paints.links.map(li => {
                            return(
                            <Link class="mega-link" to={li.bath}>{li.name}</Link>
                            )
                            })
                        }
                        <hr />
                   </Grid>
                 </Grid>
               </Container>

               </div>
          
              </li>
              
              <li>
                <Link class="nav-link hov" data-link={links[3].text} to='/gallery'>{links[3].text}</Link>
              </li>
              <li>
                <Link class="nav-link hov" data-link={links[4].text} to='/contact'>{links[4].text}</Link>
              </li>
              <li>
                <Link class="nav-link hov" data-link={links[5].text} to='/aboutus'>{links[5].text}</Link>
              </li>
                  <li class="nav-link">

    <IconLangauge changeLanguag={changeLanguag} />
                    
             </li>
         

      </Menus>

    )
}}
</ProductConsumer>
</>
  )

   }

const Menus = styled.ul`
display:flex;
align-items:center;
margin: auto 0;

 
  li {
    margin-left:25px;
    letter-spacing:1px;
    transition:all 1s ease-in-out;
    transition:.4s;
    position:relative;
    
    @media (max-width: 768px) {
      margin-top:28px;

        .nav-link{
          text-align: center;
        }
    

    }
    .hov {
     position:relative;
     color:var(--mainColor) !important;
     padding: 0 !important;
     text-decoration: none;


     &::before{
       content: attr(data-link);
       position:absolute;
       top: 3.5px;
       color:var(--darkMain);
       width:0%;
       border-bottom:3px solid;
       padding-bottom:5px;
       overflow:hidden;
       transition:.4s;
       white-space:nowrap; /*عشان الكلام اللي فيه مسافه*/
     }
     &::before:lang(en){
       left:0;
     }
     &::before:lang(ar){
       right:0;
     }
     &:hover:before{
      width:100%;
       
     }
    }
    
    

}
@media (max-width: 768px) {
    flex-flow:column;
    position: fixed;
    height:100%;
    width: 100%;
    top: 0;
    right: 0;
    overflow:auto;
    background:#ddd;
    transform:${({open}) => open ? "translateX(0)" : "translateX(100%)"};
    transition: transform .3s ease-out;
    padding-top: 55px;
    
    }

.active {
}


.drop-down{
  &:hover .mega-menu{
    visibility:visible;
    opacity:1;
  }
  @media (max-width: 768px) {
    &:hover .mega-menu{
      position:static;
      background:transparent;

  }

}
}

.mega-menu{
  position:fixed;
  top:90px;
  width:100%;
  left:0;
  padding: 25px 0;
  background: #ddd;
  box-shadow: 0 2px 6px var(--darkMain);
  visibility:hidden;
  transition:.3s all ease-out;
  opacity:0;
  &:hover {
    visibility:visible;
    opacity:1;
  }
 
  h2{
    font-size: 20px;
    font-weight: 550;
    color:var(--mainColor);
    margin-bottom: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
      font-weight: 550;
      margin-bottom: 10px;
      margin-top:0;
      }

    }
    h2:lang(en){
      letter-spacing:4px
    }

  .mega-link{
    display:block;
    padding: 0 15px;
    font-size: 14px;
    color:#777;
    padding-bottom: 10px;
    @media (max-width: 768px) {
      font-size: 12px;
      font-weight: 550;
      margin-bottom: 10px;
      
      }

  }
}
.mega .child:nth-child(n+2) a{
border-left:1px solid rgba(0,0,0,.09);
@media (max-width: 768px) {
  border-left:0px;
  }

}

.mega .child:nth-child(n+2) {
@media (max-width: 768px) {
  border-top:1px solid rgba(0,0,0,.09);
  }

}
hr {
  background-color: #adadad;
    height: 1px;
    border: 0;
    width: 107%;
}
.service{
  color:var(--mainColor);
  border-left:0!important;
  padding:15px 30px !important;
  font-size:18px;
}
.service:lang(en){
  letter-spacing:4px
}

`
/**<>
           <li class="nav-item">
    <Link class="nav-link active" to='/'>{links[0].text}</Link>
      </li>
      
      <li class="nav-item dropdown menu-area">
        <a class="nav-link dropdown-toggle" href="#" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {links[1].text}
        < /a>
        <div class="dropdown-menu mega-area" aria-labelledby="mega-one">
          <div class="row">
              <div class="col-lg-3 col-sm-6">
                  <h2>{Cars.section}</h2>
                  {
                    Cars.links.map(li => {
                      return(
                      <Link class="four" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Woods.section}</h2>
                  {
                    Woods.links.map(li => {
                      return(
                      <Link class="four" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Paints.section}</h2>
                  {
                    Paints.links.map(li => {
                      return(
                      <Link class="four" to={li.bath}>{li.name}</Link>
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
      <Link class="nav-link" to='/contact'>{links[4].text}</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/aboutus'>{links[5].text}</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <MdLanguage />
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="four" onClick={()=>changeLanguag('en')}>English</a>
          <a class="four" onClick={()=>changeLanguag('ar')}>العربية</a>
        </div>
      </li>
         </>
         }
          </ul>

    </> */