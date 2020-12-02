import React from 'react';
import { ProductConsumer } from '../../context/context';
import styled from "styled-components";



import Container from '@material-ui/core/Container';
import Img from '../../images/header/background.jpg';




export default function Family() {

  return (
    <ProductConsumer>
    {value => {
        const {home} = value ;
        console.log(home)
        const Family =home.family;
        const Title =home.title.family;

        
        
        return(
            <Familys>
                    <div className="titleSection transform">
                           {Title}
                    </div>
                <Container>
                    
                    <div className="parent wow bounceInUp">
                            {
                                Family.map(i => {
                                    return(
                                      <div className={`box ${i.class}`} >
                                          <div className="img">
                                              <img src={Img} />
                                          </div>
                                          <div className="info">
                                             <h2>{i.type}</h2>
                                             <p>{i.details}</p>
                                          </div>
                                      </div>
                                    
                                
                                    )
                                })
                            }
                            </div>

                        
                    </Container>
    </Familys>
            )
        }}
        </ProductConsumer>
    
  );
}


const Familys = styled.div`
    margin: 100px 0;
    padding: 50px 0;
    transform: skewY(-2deg);
    position: relative;
    & > * {
    transform: skewY(2deg);
     }

	.transform{
      transform: skewY(2deg) translateX(-50%) !important;
    }

.parent{

    position: relative;
    width: 100px;
    min-height: 500px;
    margin: 20px auto;
    @media (max-width: 768px){
        min-height: 800px;

    }
    
    .box {
        position: absolute;
    width:300px;
    height:300px;
    border-radius: 50%; /* may require vendor prefixes */
    display: inline-block;
  text-align: center;
  vertical-align: middle;
  background:white;
  overflow:hidden;
  cursor: pointer;
  
  box-shadow:0 6px 17px var(--mainColor),
        inset 0 6px 17px transparent;  transition: .3s ease-out;
  &:hover p{
display:block;
    }
  &:hover{
z-index:99;
transform:scale(1.15);
box-shadow:none; 
background: linear-gradient(to right bottom, var(--lightMain),var(--darkMain));


    }
    &:hover .info{
        height:100%;
    }
    &:hover .img{
        height:0;
    }
    &:hover h2{
      color:#615f5f !important;
      font-weight:900
    }
    &:hover .info p{
display:block;
    }
  .img{
      width:100%;
      height:50%;
      transition: .3s ease-out;


  }
  .info{
      width:100%;
      height:50%;
      transition: .3s ease-out;
      padding-top:7px;
      h2{
          color:var(--mainColor);
      }
      p{
        color:white;
          width: 75%;
          margin: 0 auto;
          display:none;
          transition: .3s ease-out;

      }
     
     }
    }
    .one{
        top: 252px;
        z-index:3;

    }
    .two{
        top: 70px;
        z-index:2;
        
    
    }
    .three{
        top: 70px;
        z-index:1;

    
    }
    @media (max-width: 768px) {
    
        .one{
            top: 50px;
            z-index:1;

    
    }
    .two{
        top: 300px;
    
    }
    .three{
        top: 550px;
        z-index:3;

    
    }
    }

}

  /*Langauge*/
    .one:lang(en){
    left: -100px;
     }
    .two:lang(en){
        left:  -235px;
     }
    .three:lang(en){
        right: -235px;
     }
@media (max-width: 768px) {

    .two:lang(en){
        left: -100px;
     }
    .three:lang(en){
        right: -100px;
     }
   }

  

    .one:lang(ar){
        right: -100px;
     }
    .two:lang(ar){
        right:  -235px;
     }
    .three:lang(ar){
        left: -235px;
     }
@media (max-width: 768px) {

    .two:lang(ar){
        right: -100px;
     }
    .three:lang(ar){
        left: -100px;
     }
   }

  
  

`
