import React from 'react';
import { ProductConsumer } from '../../context/context';
import styled from "styled-components";
import Img from '../../images/products/img.png';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';





export default function New() {

  return (
    <ProductConsumer>
    {value => {
        const {home} = value ;
        const Title =home.title.new;
        

        
        
        return(
                <>
                   
                <Container>
                    
                  <News>
                     <div className="titleSection">
                           {Title}
                    </div>
                    <Grid container spacing={0}>
                       <Grid item md={5} xs={12}>
                           <div className="box">
                               <div className="img">
                                   <img src={Img} />
                               </div>
                           </div>
                       </Grid>
                       <Grid item md={7} xs={12}>
                           <div className="info">
                               <h2>Kapci_626 </h2>
                               <p>{document.documentElement.lang == "en" ? 
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." :
                                "هو فلر ذو اساس اكريلك سريع الجفاف ذو محتوى صلب عالى HS صمم خصيصا ليكون اساس لكابسى ديما 9670 المائى او اكريلك2K  او كابسى بيز. يمتاز هذا المنتج بسهولة التطبيق و الصنفرة و يعطى سطح نهائى ممتاز. يتميز بالقدرة العالية للمحافظة على اللمعة و درجة اللون للدهان النهائى.كما انه يمكن التطبيق عليه مباشرة بدون صنفرة (wet on wet) ولكن بعد ضبط نسب الخلط وطريقة التطبيق ."}</p>
                           </div>
                       </Grid>
                    </Grid>
                    

                    </News>    
                 </Container>
            </>
            )
        }}
        </ProductConsumer>
    
  );
}


const News = styled.div`
 height:400px;
 margin-top:235px;
 position:relative;
 box-shadow: 2px 4px 9px 1px;
 @media (max-width: 768px) {
    height:800px;
 }
 .titleSection{
     top:-140px !important
 }
  .box{
      height:400px;
      width:100%;
      background: linear-gradient(to right bottom, var(--lightMain),var(--darkMain));
      display:flex;
      align-items:center;
      justify-content:center;
    .img{
        width:70%;
        height:85%;
    }
  }
  
  
 .info{
     display:flex;
     flex-flow:column;
     justify-content:center;
     height:400px;
     padding:40px;
     background:white;
     h2{
         color:var(--darkMain);
         
     }
     p{
        max-width: 90%;
        margin: 45px auto;
        text-align:justify;
     }
 }
`
