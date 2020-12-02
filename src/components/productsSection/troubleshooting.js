
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Hero from '../hero';
import CarBackg from '../../images/car.jpg';
import Test from '../../images/products/img.png';

import Edge from "../../aa.pdf";



import Container from '@material-ui/core/Container';



import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
  
}));








export default function Troubleshooting() {
    const classes = useStyles();


  return (

<ProductConsumer>
{value => {
                     const {title,troubleshooting} = value ;

    
    return(
    
            <Troubleshootings>
                    <Hero backGround={CarBackg}>
                        <div className="title">{title.car}</div>
                    </Hero>
            
                    <Container className="content">
                        <h1 className="titleSections">Troubleshooting</h1>
                        <ul>
                            {
                                troubleshooting.map(i =>{
                                    return(
                                        <li>
                                            <a href={require(`../../images/products/car/troubleshooting/${i.pdf}`)} target="_blank">
                                              {i.name}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </Container>


                
          
                   
                         
            
                
</Troubleshootings>
  
    )
}}
</ProductConsumer>
  )

   }

const Troubleshootings = styled.div`


.title{
    background-image:linear-gradient(to right bottom, var(--lightOrange),var(--darkOrange));

}
.titleSections{
    width:100%;
    text-align:center;
    font-size:28px;
}



ul{
        margin-top:50px;
        column-count: 3;
     
             @media (max-width: 992px) {
            column-count:2;
             }
             @media (max-width: 768px) {
            column-count:1;
             }
        li{
            margin-bottom: 15px;
            background:white;
            padding: 10px;
            border-radius: 5px;
            border:1px solid  var(--mainColor);
            text-align: center;
            a{
                color: #777;
                font-size:16px;
                font-weight:700;
                text-decoration:none;
                display:block;
                width:100%;
                height:100%
            }
            &:hover{
                background: var(--mainColor);
            }
            &:hover a{
                color: white;
            }
        }
    }
`



const ListProducts = styled.div`
    margin:20px 0;
    padding: 50px 0;
    background:gray;
    



` 

/**<>
  
    </> */