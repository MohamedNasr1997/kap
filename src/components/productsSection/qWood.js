import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Hero from '../../components/hero';
import Img from '../../images/aboutUS/ab.jpg';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles,withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ff from "../../aa.pdf";







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


export default function QWood() {
  const classes = useStyles();
  

  return (
    

        <ProductConsumer>
        {value => {
            const {question} = value ;
            const questionWood =question.wood
            const Tilte =question.title.wood           
            
            
            return(
                <>
                           <Hero backGround={Img}>
                                    <div className="title" style={{
                                          "background":`linear-gradient(to right bottom, var(--lightMain),var(--darkMain))`

                                    }}>{Tilte}</div>
                           </Hero>
                <Where>

                    
                
                <div className={classes.root}>
                    {
                        questionWood.map(i => {
                    return(
                        <Container>
                            <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography className={classes.heading}>{i.q}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography className={classes.heading}>
                                                <div>{i.a}</div>
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
    `