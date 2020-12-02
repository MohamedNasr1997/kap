
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import {Left,Right,MarginLeft,MarginRight,Direction} from '../assets/cssRTL';

import Hero from '../components/hero';
import Cars from '../components/productsSection/cars';
import Woods from '../components/productsSection/woods';
import Paints from '../components/productsSection/paints';




import {Route, Link, Switch,useParams,useRouteMatch} from "react-router-dom";




export function Aa() {
    

    return (
        <h2>sd</h2>
    ) 
 }

export default function Products() {
    

  return (

<ProductConsumer>
{value => {
    const {links} = value ;
    console.log(links[0].text)
    console.log(Direction)
    
    return(
            <Productss>
               <Route  path={`/products/cars`} component={Cars} />
               <Route  path={`/products/woods`} component={Woods} />
               <Route  path={`/products/paints`} component={Paints} />


                       

</Productss>
  
    )
}}
</ProductConsumer>
  )

   }

const Productss = styled.div`

li.galleryProducts{
    background:#fff;
    margin:30px 0;
    height:200px;
    display:flex;
    transform: skewX(-4deg);
    overflow:hidden;
    
    @media (max-width: 768px) {
        min-height: 400px;
        width: 70%;
        flex-flow: column;
        margin:30px auto;
                    }
   
       

    .img{
        height:100%;
        width:30%;
        z-index:2;
        position:relative;
        @media (max-width: 768px) {
        height: 35%;
        width:100%;
                    }


        .box{
            width: 70%;
            height:100%;
            margin: auto; 

            @media (max-width: 768px) {
                width: 47%;
            }             
           img{
             transform: skewX(4deg);
            }

        }
     } 
    
    .item{
        position: relative;
        color:var(--mainColor);
        width: 70%;
        padding:20px;
        & > *{
    transform: skewX(4deg);
        }
        @media (max-width: 768px) {
        width:100%;
        height: 65%;

                    }
        .inline{
            display:flex;
            justify-content:space-between;
            @media (max-width: 768px) {
                    flex-flow:column;
                    }
            .name{
                margin-top: 0px;
                background: var(--mainColor);
                color: white;
                padding: 3px 10px;
                word-spacing: 5px;
                border-radius: 7px;
                text-align: justify;
                font-size:22px
                    }

                @media (max-width: 768px) {
                      font-size:18px
                    }
             }
            .filter{
                height:100%;
                width:20%;
                position: relative;
                text-transform: uppercase;
                @media (max-width: 768px) {
                    display:none;
                    }
                
                h4{
                    font-weight: 600;
                    font-size: 12px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);

                }
                .category{
                    top:-10px
                }
                .type{
                    top:10px;
                }
            }
          }
        .details{
            margin: 10px;
            ${MarginLeft}: 28px;
            text-align: justify;
          }
        
          
    }

        


      



    .total {
        margin:20px;
    }

   
    .pdf{
    height:60px;
    width:180px;
    display:flex;
    justify-content:space-between;
    position:absolute;
    bottom:0;
    transition:.3s ease-in;
    .file{
        background: white;
        padding: 4px 7px;
        font-size:18px;
        display:flex;
        justify-content:space-between;
        border-radius:7px;
        .distance{
        margin: 4px 0;
        font-size: 25px;
        color: gray;
          }
        
        span{
            font-size: 20px;
            margin:0 8px;
            text-align:center;
            a{
                color: var(--mainColor);
            }
            h6{
                margin:0;
                font-weight:900;
                color: #000;
            }

        }
        
    }
    }
    
    .arrow{
        display:flex;
        font-size: 35px;
        color:white;
        flex-flow:column;
        justify-content:space-around;

    }
    
   
    .control{
    display:flex;
    justify-content:space-between;
      
    .MuiInputLabel-formControl{
    font-size:14px;
    margin-bottom:5px;
        }
    .MuiSelect-select{
            margin-bottom:5px
        }

     }


    /*langauge*/
    li.galleryProducts:lang(en){

&:hover .pdf{
   left: -25px;;
}

.details{
    margin-left: 28px;
  }

}



li.galleryProducts:lang(ar){

&:hover .pdf{
right: -25px;;
}

.details{
    margin-right: 28px;
}

}



.arrow:lang(en){
transform:rotate(0);
}
.arrow:lang(ar){
transform: rotate(180deg);
}


.pdf:lang(en){
left:-143px;
.file{
margin-left:25px;
  }
}

.pdf:lang(ar){
right:-143px;
.file{
margin-right:25px;
}
}



ul.pagination{
 width:100%;
 text-align:center;
 
   }
   ul.pagination li{
    margin: 2px;
display: inline-block;
width: 35px;
height: 35px;
line-height: 35px;
border-radius: 50%;
border: 1px solid var(--mainColor);
cursor: pointer;
background: #ffe1e1;
font-weight: bold;
text-align: center;

}
.activePagination{
  color: white;
  background: var(--mainColor)!important;
}


`