
import React from 'react';
import styled from "styled-components";
import {Left,Right,MarginLeft,MarginRight,Direction} from '../assets/cssRTL';
import Cover from '../images/contactUs/cover.jpg';
import Plane from '../images/contactUs/plane.jpg';

import {Link, Route,useParams,useRouteMatch} from "react-router-dom";


import { ProductConsumer } from '../context/context';
import Hero from '../components/hero';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Brazil from '../images/flags/brazil.png';
import Egypt from '../images/flags/egypt.png';
import Uae from '../images/flags/uae.png';
import India from '../images/flags/india.png';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import { VscClose } from 'react-icons/vsc';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';







const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      marginTop:"80px"

    },
  },
  textField: {
   marginBottom:"50px"
  },
}));


export default function Contact() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const Inp = withStyles((theme) => ({
    root: {
      width:"30%",
      fontSize:"18px",
      fontFamily: 'Cairo',

      
    },
  }))(Input);
  const classes = useStyles();

  
      /*global $, alert, console*/
$(function () {
  $(".btn").on('click',function () {
    $(".popup").css("display", "flex");
  });

  $(".popup, .close").on('click',function () {
    $(".popup").css("display", "none");
 });

  });


  return (

<ProductConsumer>
{value => {
    const {filterContact, contact,flag,title} = value ;
    const Contact =contact[flag]

    const Country = Contact.country;
    const Title = Contact.title;
    const Adress = Contact.adress;
    const Tel = Contact.tel;
    const Fax = Contact.fax;
    const Email = Contact.email;
    const Location = Contact.location;
    let Langauge =document.documentElement.lang;


console.log(Country)
    return(
      <>
                           <Hero backGround={Cover}>
                                    <div className="title" style={{
                                          "background":`linear-gradient(to ${Right} bottom, var(--lightMain),var(--darkMain))`

                                    }}>{title.contact}</div>
                           </Hero>
            <Contacts>
                         
               <Container>
                <div className="content">
                <Grid container spacing={3}>
                   {
                       contact.map((i,index) =>{
                         return(
                          <Grid item md={3} xs={6}>

                          <div className="parent">
                           <div className="box">
                             <img src={require(`../images/flags/${i.img}`)} />
                             
                           </div>
                           <div className="but"> 
                                       <Link className="btn btn-country btn-white" val={index} onClick={filterContact}>{i.country}</Link>
                           </div>
                          </div>
                          
                        </Grid>
                         )
                       })
                   }
                   

                 </Grid>
                </div>

                



                
                



               </Container>
               <div className="popup">
                 <div className="content">
                     
                      <div className="map">
    <iframe src={Location}width="400" height="300" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                      </div>
                      <div className="contact">
                        <h2 className="country">{Country}</h2>
                        <p className="title">{Title}</p>
                        <hr />
                        <p>Adress: {Adress}</p>
                        {
                        Email.map(i => {
                        return(<p>Email: {i}</p>)
                        })
                         }
                         {
                        Tel.map(i => {
                        return(<p>Tel: {i}</p>)
                        })
                         }
                         <p>Fax: {Fax}</p>
                          <div className="but">
									           	 <Link class="btn btn-main" to="/branchs">Where To Buy</Link>
							          	</div>
                      </div>
                
                    <span className="close"><VscClose /></span>
                 </div>
               </div>
</Contacts>

              

              <Form>
                <h1 className="titleSections">Contact-Us</h1> 
                <form className={classes.root} noValidate autoComplete="off">
                  <Inp placeholder={ Langauge =="en" ? "First Name" : "الاسم الاول"} inputProps={{ 'aria-label': 'description' }} />
                  <Inp placeholder={ Langauge =="en" ? "Last Name" : "الاسم الاخير"} inputProps={{ 'aria-label': 'description' }} />
                  <Inp placeholder={ Langauge =="en" ? "Mobil Namber" : "رقم الهاتف"} inputProps={{ 'aria-label': 'description' }} />
                  <Inp placeholder={ Langauge =="en" ? "E-Mail Adress" : "البريد الالكتروني"} inputProps={{ 'aria-label': 'description' }} />
                </form>
                <div className={classes.textField}>
                <TextField
          id="standard-multiline-static"
          label={ Langauge =="en" ? "Subject" : "الموضوع"}
          multiline
          rows={8}
          style={{width:"65%",marginTop:"50px",fontSize:"18px"}}
        /> 
                </div>

                <Button variant="contained" color="secondary" disableElevation style={{fontSize:"16px",fontWeight: "700"}}>
                  { Langauge =="en" ? "send" : "ارسال"}
                </Button>

              </Form>
   
  </>
    )
}}
</ProductConsumer>
  )

   }

const Contacts = styled.div`
    margin: 100px 0;
    padding: 100px 0;
    background-image:linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.55)),url(${Plane});
    background-attachment:fixed;
    background-position:center;
    background-size:cover;


.content{
  width:80%;
  @media (max-width: 768px) {
    width:95%;
  }
  margin:0 auto;
}


.box {
  width:200px;
  height:140px;
  margin:0 auto;
  position: relative;
  opacity:.7;
  transition: .3s ease-out;

   .info {
     position:absolute;
     width:100%;
     height:100%;
     top:0;
     left:0;
     background: rgba(0,0,0,.7);
     display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
     display:none;

   }
   &:hover .info{
     display:flex;
   }
}

.popup {
  background: rgba(0,0,0,.7);
  height:100vh;
  width:100%;
  position:fixed;
  z-index:100;
  top:0;
  display: none;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;

    
  .content{
    width:70%;
    height:80%;
    background:white;
    position: relative;
    display: flex;
    padding:20px;
    text-align:justify;
    @media (max-width: 768px) {
      flex-direction: column;
      
    width:90%;
    height:95%;
    
  }
  
  .contact{
    margin:20px;
    width:70%;
    .country{
text-transform:uppercase;
font-family:600

    }
    .title{
      font-size:20px;
      @media (max-width: 768px) {
        font-size:16px;
  }
    }
    p{
      line-height:1.7;
      @media (max-width: 768px) {
        line-height:1.4;

  }
    }
  }
  .map{
    display:flex;
    align-items:center;
    margin:auto 0;
    width:30%;
      height:300px;
    @media (max-width: 768px) {
      width:250px;
      height:170px;
    }
    iframe{
      width:100%;
      height:100%;
    }
  }
   
    .close {
      position: absolute;
      top:6px;
      ${Right}:6px;
      font-size:30px;
      color:var(--mainColor);
    }
    .close:lang(en) {
      right:6px;
    }
    .close:lang(ar) {
      left:6px;
    }

  }
}



.btn:link,
	.btn:visited {
			padding: 15px 25px;
			text-transform: uppercase;
			text-decoration: none;
			display: inline-block;
			font-size: 14px;
			margin: 25px auto;
      border-radius: 100px;
      box-shadow:0 4px 8px #777;
      transition: .3s ease-out;
			position: relative;

			&:hover{
				transform: translateY(-3px);
        box-shadow: 0 6px 16px black;
        color:white;
			}
			&:active{
				transform: translateY(-1px);
				box-shadow: 0 3px 8px black;
			}
			&::after{
				content: "";
				display: inline-block;
				width: 100%;
				height: 100%;
				border-radius: 100px;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				transition: .3s ease-out;

			}
			&:hover::after{
				transform: scale(1.5);
				opacity: 0;
			}
				
		
	}
	.btn-main{
		background: var(--mainColor);
		color: white;
		&::after{
			background: var(--mainColor);

    }
    
  }
  
  .btn-white{
		background: white;
		color: #777;
		&::after{
			background: white;

    }
  }
	.but{
		width:100%;
		text-align:center;
  
  }

	.btn-country:link,
	.btn-country:visited {
      box-shadow:0 4px 8px var(--mainColor)!important;
			&:hover{
        box-shadow: 0 6px 16px var(--darkMain)!important;
        color:#777;
			}
			&:active{
				box-shadow: 0 3px 8px var(--darkMain)!important;
      }
    }
`


const Form = styled.div`
width:70%;
text-align:center;
margin:50px auto;

@media (max-width: 768px) {
  width:95%;
    }
.MuiInputLabel-animated{
  font-size:18px;
  font-family: 'Cairo', sans-serif !important;
 

}
.MuiInputBase-inputMultiline{
  font-size:16px;



}

`
