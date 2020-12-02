

import React from 'react';
import styled from "styled-components";
import Img from '../../images/home/ex.jpg';
import { ProductConsumer } from '../../context/context';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
import { Waypoint } from 'react-waypoint';

import { FiUsers } from "react-icons/fi";
import { IoMdGitBranch, IoIosBusiness } from "react-icons/io";
import { RiProductHuntLine } from "react-icons/ri";




 






  


function Counter() {
    
    const { countUp } = useCountUp({ end: 1234567 });

    return (
      <ProductConsumer>
{value => {
                     const {home} = value ;
                     const Count =home.experience;
                     const Title =home.title.experience;


    
    return(
      <>
      
      <section>
      <div className="apSection">
 
      <Counters>
                   <div className="titleSection transform">
                           {Title}
                    </div>
             
 
       <div className="overlay">
       
     <Container>
         <Grid container spacing={2}>
    
              
            <Grid item md={3} xs={6}>
                        <div className="box">   
                           <div className="icon">
                               <IoIosBusiness />
                           </div>
                           <div className="counter">
                             <CountUp
                                       start={0}
                                       end={32}
                                       duration={1.3}
                                       delay={1}
                                     >
                                       {({ countUpRef, start }) => (
                                         <div>
                                             <span ref={countUpRef} />
                                             <Waypoint onEnter={start}  />
                                         </div>
                                     )}
                             </CountUp>
                           </div>
                           <p>{Count[0]}</p>
                       </div>
             </Grid>
             
 
             <Grid item md={3} xs={6}>
                                      <div className="box">   
                           <div className="icon">
                               <FiUsers />
                           </div>
                           <div className="counter">
                             <CountUp
                                       start={0}
                                       end={4302}
                                       duration={1.3}
                                       delay={1}
                                     >
                                       {({ countUpRef, start }) => (
                                         <div>
                                             <span ref={countUpRef} />
                                             <Waypoint onEnter={start}  />
                                         </div>
                                     )}
                             </CountUp>
                           </div>
                           <p>{Count[1]}</p>
                       </div>
             </Grid>
 
             <Grid item md={3} xs={6}>
                        <div className="box">   
                           <div className="icon">
                               <IoMdGitBranch />
                           </div>
                           <div className="counter">
                             <CountUp
                                       start={0}
                                       end={264}
                                       duration={1.3}
                                       delay={1}
                                     >
                                       {({ countUpRef, start }) => (
                                         <div>
                                             <span ref={countUpRef} />
                                             <Waypoint onEnter={start}  />
                                         </div>
                                     )}
                             </CountUp>
                           </div>
                           <p>{Count[2]}</p>
                       </div>
             </Grid>
 
             <Grid item md={3} xs={6}>
                        <div className="box">   
                           <div className="icon">
                               <RiProductHuntLine />
                           </div>
                           <div className="counter">
                             <CountUp
                                       start={0}
                                       end={8042}
                                       duration={1.3}
                                       delay={1}
                                     >
                                       {({ countUpRef, start }) => (
                                         <div>
                                             <span ref={countUpRef} />
                                             <Waypoint onEnter={start}  />
                                         </div>
                                     )}
                             </CountUp>
                           </div>
                           <p>{Count[3]}</p>
                       </div>
             </Grid>
   </Grid>
   </Container>
         </div>
       
      
 
      </Counters>
      
      </div>
      </section>
     
 </>
      )
    }}
    </ProductConsumer>
      )
        
    
    
}

export default Counter;


const Counters=styled.div`
    margin:200px 0;
    padding:80px;
    background: linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)),url(${Img}) no-repeat fixed center;
    background-size:cover;
    transform: skewY(-2deg);
    position: relative;
    color: white;
    .transform{
      transform: skewY(2deg) translateX(-50%) !important;
    }
 .overlay{
  & > *{
    transform: skewY(2deg);
  }
 }
  
 .box {
    text-align: center;
    padding: 20px;
         background-color: rgba(0,0,0,0.8);
    color: white;
    .counter{
      font-size:16px;
      font-weight:700;
      margin: 15px;

    }
    svg{
      font-size:26px;
      opacity:.8;
    }

    .icon{
    
      height: 70px;
    width: 70px;
    align-items: center;
    display: flex;
    justify-content: center;
    transition: all .3s linear;
    margin: 10px auto;
    position: relative;
   

        border:3px solid #fff;
        border-radius:50%;
        box-shadow:0 6px 17px var(--mainColor),
        inset 0 6px 17px transparent;
        &:hover{
         transform:scale(1.2)
        }  
      }
    }
  
  
  

  p{
    text-transform: uppercase;
    font-weight: 600;
  }
`





