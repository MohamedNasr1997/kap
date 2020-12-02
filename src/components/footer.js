import React from 'react';
import {Link, Route,useParams,useRouteMatch} from "react-router-dom";
import styled from "styled-components";
import { FaGooglePlusG, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineYoutube, AiOutlinePhone } from 'react-icons/ai';












       
function Footer() {
         



    return (
   <>
   
<Wooter>
    
    <div className="contact">
    
<div className="adress">
    <p>Alexandria - Port Saeed, south Port said City</p>
    <p><AiOutlinePhone /> +20663770000</p>
    <p>postal Code: 55656</p>
    <Link to="/branchs">
         {document.documentElement.lang =="en" ? "Where To Buy" : "ابحث عن اقرب وكيل لك"}
    </Link>
</div>

<div>
<h3 className="title">Social media</h3>
<ul>
        <li><a href="https://www.facebook.com/Kapci.Coatings.Official"><FaFacebookF /></a></li>
        <li><a href="https://www.facebook.com/Kapci.Coatings.Official"><AiOutlineWhatsApp /></a></li>
        <li><a href="https://www.facebook.com/Kapci.Coatings.Official"><FaGooglePlusG /></a></li>
        <li><a href="https://www.facebook.com/Kapci.Coatings.Official"><FaLinkedinIn /></a></li> 
        <li><a href="https://www.facebook.com/Kapci.Coatings.Official"><AiOutlineYoutube /></a></li>
        
    </ul>
</div>

    </div>
    
    <footer>All Rights Reserved &copy; 2020 KAPCI Coatings - Designed and Developed by  Mohamed Nasr</footer>

</Wooter>
</>
    )
}

export default Footer;

const Wooter=styled.div`
    background:#49494a;
    padding:50px;
    padding-bottom:20px;
    text-align:center;
    margin:auto;
    margin-top:400px;
    color:white;
    .title {
        font-family: 'Anton', sans-serif;
  font-family: 'Bebas Neue', cursive;
  letter-spacing: 5px;
  margin-bottom:30px;

    }
    .contact {
        display: flex;
    justify-content: space-around;    
    @media (max-width: 768px) {
       flex-flow:column-reverse;
            }

}
    
ul { 
    
    li {
        display: inline-block;
    width: 50px;
    height: 50px;
    background: linear-gradient(0deg, #fff, #ddd);
    margin: 15px;
    padding: 4px;
    box-shadow: 0 10px 15px rgba(0,0,0,1);
    cursor:pointer;
    border-radius: 50%;
    transition: .3s;
    @media (max-width: 768px) {
        width: 40px;
    height: 40px;
    margin: 10px;
            }
    &:hover {
        box-shadow: 0 2px 5px rgba(0,0,0,.3);

    }
    
        a {
            width:100%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            color: #585858;
            background: linear-gradient(0deg, #ddd, #fff);
            border-radius: 50%;


    font-size: 20px;
    text-decoration: none;
   
   
            }
            &:nth-child(1) a:hover {
               color: #3b5999;

            }
            &:nth-child(2) a:hover {
                color: #25D366;

            }
            &:nth-child(3) a:hover {
                color: #dd4b39;

            }
            &:nth-child(4) a:hover {
                color: #0077B5;

            }
            &:nth-child(5) a:hover {
                color: #cd201f;

            }
           
       
        
        }
    }
   


.adress{
    text-align: justify;
    padding: 20px;
    

    
p {
    color:#ddd;

}
}
footer{
    margin-top:50px;
    color:#bfbfbf;
    letter-spacing: 2px;
font-size:14px;
}

`


