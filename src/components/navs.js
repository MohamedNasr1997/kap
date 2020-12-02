
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import { MdLanguage } from "react-icons/md";
import logo from "../images/logo.png";
import {Link, Route,useParams,useRouteMatch} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { ThemeProvider, useTheme, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useTranslation } from 'react-i18next';
import { AiFillFormatPainter } from "react-icons/ai";
import {marginLeft} from '../assets/cssRTL'
import Icon from './iconNav';




export default function Navs() {
  window.addEventListener("scroll", function(){
    const Navbar = document.querySelector(".nav");
    Navbar.classList.toggle("sticky", window.scrollY > 20);
  })
    


  return (


      <Nav className="nav">
      <Container>
          <Grid container justify="space-between" alignItems="center">

                  <div className="logo">
                  <img src={logo}/>
                  </div>
                  <Icon />
          </Grid>

        </Container>
      </Nav>

    
  )

   }

const Nav = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 16px;
  z-index:99;
  position: absolute;
  width:100%;
  color:white;
  padding: 20px 0;
  transition:.6s;
  @media (max-width: 768px) {
    padding: 5px 0;

  }
 
  .logo{
    width:155px;
    height:70px;
}
`
/**<>
  
    </> */