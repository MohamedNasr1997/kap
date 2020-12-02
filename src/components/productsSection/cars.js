
import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Hero from '../hero';
import CarBackg from '../../images/car.jpg';

import { ImFilePdf } from "react-icons/im";
import { RiArrowDropRightLine } from "react-icons/ri";


import Container from '@material-ui/core/Container';
import Pagination from './pagination';


import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
  
}));








export default function Cars() {
    const classes = useStyles();
   
  return (

<ProductConsumer>
{value => {
                     const {Products, categoryFilter,  typeFilter, searchFilter,type,category,indexFirst,indexLast,title,defaultCurrent} = value ;
                     let carsData = Products.filter(prod => prod.product == 'car');
                     let currentData = carsData.slice(indexFirst,indexLast);
                   
    
    return(
            <>
            <Carss>
                                <Hero backGround={CarBackg}>
                                    <div className="title">
                                           {title.car}
                                    </div>
                                </Hero>

                <div className="container">

                <div className="control">
             
             <div className="select">
               <FormControl className={classes.formControl}>
                       <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                       <Select
                       labelId="demo-controlled-open-select-label"
                       id="demo-controlled-open-select"
                       value={category}
                       onChange={categoryFilter}
                       >
                       <MenuItem value="">
                           <em>All</em>
                       </MenuItem>
                       <MenuItem value="kapci">Kapci</MenuItem>
                       <MenuItem value="dima">Dima</MenuItem>
                       <MenuItem value="latico">Latico</MenuItem>
                       </Select>    
                   </FormControl>
       
                   <FormControl className={classes.formControl}>
                       <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
                       <Select
                       labelId="demo-controlled-open-select-label"
                       id="demo-controlled-open-select"
                       
                       value={type}
                       onChange={typeFilter}
                       >
                       <MenuItem value="">
                           <em>All</em>
                       </MenuItem>
                       <MenuItem value="ANCILLARIES">ANCILLARIES</MenuItem>
                       <MenuItem value="BASECOATS">BASECOATS</MenuItem>
                       <MenuItem value="THINNERS">THINNERS</MenuItem>
                       <MenuItem value="ADDITIVES">ADDITIVES</MenuItem>
                       <MenuItem value="CLEARCOATS">CLEARCOATS</MenuItem>
                       <MenuItem value="SEALERS">SEALERS</MenuItem>
                       <MenuItem value="PUTTIES&BODY">PUTTIES&BODY FILLER</MenuItem>
                       <MenuItem value="PAINT">PAINT</MenuItem>
                       <MenuItem value="UNDERBODY">UNDERBODY</MenuItem>

                       </Select>
             </FormControl>
           </div>
       
                   <div style={{ width: 300 }}>
                       <Autocomplete
                               id="autocomplete"
                               freeSolo
                               autoSelect
                               options={[]}
                               renderInput={params => (
                         <TextField
                                   {...params}
                                   label="Search"
                                   margin="normal"
                                   variant="outlined"
                                   onChange={searchFilter}
                                   />
               )}
               />
             
                     </div>
                     </div>
                   

                         </div>

        
        <ListProducts>
                               
                <Container maxWidth="md">
                <h2 className="total">Total Products : <span>{carsData.length}</span></h2>
                    <ul>
                    {
                                 currentData.map(i => {
                                     return(
                      <li className="galleryProducts" key={i._id}>
                        
                                <div className="img">
                                    <div className="box">
                                        <img src={require(`../../images/products/${i.src}`)} />
                                    </div>
                                    
                                </div>
                         
                                <div className="item">
                                    <div className="inline">
                                        <h2 className="name">{i.title}</h2>
                                        <div className="filter">
                                            <h4 className="category">{i.category}</h4>
                                            <h4 className="type">{i.type}</h4>
                                        </div>
                                    </div>
                                    <p className="details">
                                    it is a long established fact that a reader will be distracted
                                     by the readable content of a page when looking at its layout.
                                      The point of using Lorem Ipsum is that it has a more-or-less normal
                                       distribution of letters.
                                    </p>
                                    <div className="pdf">
                                        <div className="file">
                                            <span>
                                                <h6>MSDS</h6>
                                                <a href={require(`../../images/products/car/pdf/msds/${i.msds}`)} target="_blank"><ImFilePdf /></a>
                                            </span>
                                             <div className="distance">|</div>
                                            <span>
                                                <h6>TDS</h6>
                                                <a href={require(`../../images/products/car/pdf/tds/${i.tds}`)} target="_blank"><ImFilePdf /></a>
                                            </span>
                                        </div>
                                        <div className="arrow"><RiArrowDropRightLine /></div>
                                    </div>
                                </div>
                         

                     </li>
                                     )
                                 })
                             }
                    </ul>
                
                </Container>
        </ListProducts>
                         
            
        {carsData.length <= 7 ?  ""  :<Pagination current={defaultCurrent}/>}

</Carss>

              
   
</>
  
    )
}}
</ProductConsumer>
  )

   }

const Carss = styled.div`
position:relative;

.title:lang(en){
    background-image:linear-gradient(to right bottom, var(--lightOrange),var(--darkOrange));

}
.title:lang(ar){
    background-image:linear-gradient(to left bottom, var(--lightOrange),var(--darkOrange));

}


`


const ListProducts = styled.div`
padding: 30px 0;

li.galleryProducts{
    box-shadow: 0 3px 8px var(--darkOrange);

.img:lang(en){
    background-image:linear-gradient(to right bottom, var(--lightOrange),var(--darkOrange));
  }
.img:lang(ar){
    background-image:linear-gradient(to left bottom, var(--lightOrange),var(--darkOrange));
  }  
}

.pdf{
    border:3px solid var(--darkOrange);
}
.pdf:lang(en){
background:linear-gradient(to right bottom,var(--darkOrange),var(--lightOrange));
}
.pdf:lang(ar){
background:linear-gradient(to left bottom,var(--darkOrange),var(--lightOrange));
}

` 


    
