import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Hero from '../../components/hero';
import {Left,Right,MarginLeft,MarginRight,Direction} from '../../assets/cssRTL';
import Img from '../../images/aboutUS/ab.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Select,MenuItem } from '@material-ui/core';



const Option = withStyles((theme) => ({
    root: {
      color: 'black',
      fontSize:"16px",
      textTransform:"uppercase",
      
    },
  }))(MenuItem);
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    background:"#eee",
    padding:30

    
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
    width:"100%",
    textAlign:"justify"

  },
  select:{
      width:"160px",
      margin:`80px auto 0`,
      display:"flex",
      fontSize:"20px",
      textTransform:"uppercase",
      textAlign:"center"


  },
 
  
  
}));


export default function WhereToBuy() {
  const classes = useStyles();
  

  return (
    

        <ProductConsumer>
        {value => {
            const {place,flag,filterContact} = value ;
            let Langauge =document.documentElement.lang;
           
            
            
            
            return(
                <>
                           <Hero backGround={Img}>
                                    <div className="title" style={{
                                          "background":`linear-gradient(to ${Right} bottom, var(--lightMain),var(--darkMain))`
                                    }}>{Langauge == "en" ? "Our agents are in " : "وكلائنا في "} {place[flag].country}</div>
                           </Hero>
                    <Select value={flag} displayEmpty onChange={filterContact} className={classes.select}> 
                       <Option value=""  disabled>{Langauge == "en" ? "Choose Country" : "اختر البلد"}</Option> 
                       {
                         place.map((i,index) => {
                           return(
                            <Option value={index} val={index}>{i.country}</Option>
                           )
                         })
                       }
                       
                    </Select>
                <Where>

                <Container >
                  <div className="key">
                    <Grid container spacing={2}>
                            <Grid item md={2} xs={12}>
                                {Langauge == "en" ? "Agent":"الوكيل"}
                            </Grid>
                            <Grid item md={7} xs={12}>
                                {Langauge == "en" ? "Adress":"العنوان"} 
                            </Grid>
                            <Grid item md={3} xs={12}>
                                  {Langauge == "en" ? "Phone Number":"رقم الهاتف"}
                            </Grid>
                    </Grid>
                  </div>
              </Container>
                <div className={classes.root}>
                    {
                        place[flag].data.map(i => {
                            const branch =i.branch;
                    return(
                        <Container>
                          
                            <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>{i.city}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.heading}>
                                             
                                              <ul>
                                                  {
                                                      branch.map(i =>{
                                                          console.log(i)
                                                          return(
                                                          <li>
                                                               <Grid container spacing={0}>
                                                                <Grid item md={2} xs={12}>
                                                                  {i.name}
                                                                </Grid>
                                                                <Grid item md={7} xs={12}>
                                                                  {i.adress} 
                                                                </Grid>
                                                                <Grid item md={3} xs={12}>
                                                                  {i.tel}
                                                                </Grid>
                                                               </Grid>
                                                               <hr />
                                                              
                                                          </li>
                                                          
                                                          )
                                                      })
                                                  }
                                              </ul>
                                            </Typography>
                                        </AccordionDetails>
                            </Accordion>
                        </Container>
                           )
                        })
                    }
                
               
              </div>
              
              </Where>
              </>
            )
        }}
        </ProductConsumer>
          )
  
  
}

const Where = styled.div`
    margin:20px 0;
    padding: 50px 0;
    background:gray;
    .key{
      font-size: 22px;
    height: 40px;
    width: 100%;
    padding: 0 32px;
    color: white;
    margin-bottom: 18px;
    @media (max-width: 992px) {
      display:none;
    }
    }
    `