
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../context/context';
import {Neben} from '../components/hero';
import BoxPro from '../components/home/boxProducts';
import Counter from '../components/home/experience';
import Gallery from '../components/home/ourGallery';
import Testmo from '../components/home/testmo';
import Family from '../components/home/family';
import New from '../components/home/whatIsNew';
import Phone from '../components/home/phone';










export default function Home() {
    

  return (

<ProductConsumer>
{value => {
 
    
    return(
            <Homes>
             
                <Neben style={{display:"block"}} />
                
                <BoxPro />
                <Family />
                <Gallery />
                <New />
                <Counter />
                <Testmo />
                <Phone />
            </Homes>
  
    )
}}

</ProductConsumer>
  )

   }

const Homes = styled.div`

width:100%;
`
/**<>
  
    </> */