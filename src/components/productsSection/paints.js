
import React,{useState,useEffect} from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Hero from '../hero';
import { ImFilePdf } from "react-icons/im";
import { RiArrowDropRightLine } from "react-icons/ri";

import PaintBackg from '../../images/products/paintBackground.jpg';
import Pagination from './pagination';


import Container from '@material-ui/core/Container';
import { makeStyles,withStyles } from '@material-ui/core/styles';
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
  },

  search:{
    width:"200px",
    fontSize:"20px",
}

  
}));


export default function Panits() {
    const classes = useStyles();

    const Item = withStyles((theme) => ({
        root: {
          fontSize:"14px"
        }
      }))(MenuItem);
    
  return (

<ProductConsumer>
{value => {
                     const {Products, categoryFilter,  typeFilter, searchFilter,type,category,indexFirst,indexLast,title,defaultCurrent} = value ;
                     let paintsData = Products.filter(prod => prod.product == 'paint');
                     let currentData = paintsData.slice(indexFirst,indexLast);
                    
                    

    
    return(
            <Panitss>
                <Hero backGround={PaintBackg}>
                                    <div className="title">
                                      {title.paint}
                                    </div>
                                    </Hero>
 <div className="container">
                           
    <div className="control">
       <div style={{ width: 300 }}>
                <Autocomplete
                        id="autocomplete"
                        freeSolo
                        autoSelect
                        className={classes.search}
                        options={[]}
                        renderInput={params => (
                  <TextField 
                            {...params}
                            label="Search"
                            margin="normal"
                            variant="outlined"
                            onChange={searchFilter}
                            className={classes.search}
                            />
                    )}
              />
      
              </div>      
      <div className="select">
        <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label" >Category</InputLabel>
                <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={category}
                onChange={categoryFilter}
                >
                <Item value="">
                    <em>All</em>
                </Item>
                <Item value="kapci">Kapci</Item>
                <Item value="latico">Latico</Item>
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
                <Item value="">
                    <em>All</em>
                </Item>
                <Item value="Alkyd.Paints">Alkyd Paints</Item>
                <Item value="Putties">Putties</Item>
                <Item value="Sealers">Sealers</Item>
                <Item value="Textures">Textures</Item>
                <Item value="Topcoats">Topcoats</Item>
                <Item value="Undercoats">Undercoats</Item>
                <Item value="Effects">Special Effects</Item>


                </Select>
      </FormControl>
    </div>

            
              </div>
                        
                             <ul>
                            
                         </ul>
                         </div>
                         
                         
                         <ListProducts>
                               
                               <Container maxWidth="md">
                               <h2 className="total">Total Products : <span>{paintsData.length}</span></h2>
                               <ul>
                              {
                                 currentData.map(i => {
                                     return(
                      <li className="galleryProducts">
                        
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
                       {paintsData.length <= 7 ?  ""  :<Pagination current={defaultCurrent}/>}


                
</Panitss>
  
    )
}}
</ProductConsumer>
  )

   }

const Panitss = styled.div`

position:relative;

.title:lang(en){
    background-image:linear-gradient(to right bottom, var(--lightBlue),var(--darkBlue));

}
.title:lang(ar){
    background-image:linear-gradient(to left bottom, var(--lightBlue),var(--darkBlue));

}


`


const ListProducts = styled.div`
padding: 30px 0;

li.galleryProducts{
    box-shadow: 0 3px 8px var(--darkBlue);

.img:lang(en){
    background-image:linear-gradient(to right bottom, var(--lightBlue),var(--darkBlue));
  }
.img:lang(ar){
    background-image:linear-gradient(to left bottom, var(--lightBlue),var(--darkBlue));
  }  
}

.pdf{
    border:3px solid var(--darkBlue);
}
.pdf:lang(en){
background:linear-gradient(to right bottom,var(--darkBlue),var(--lightBlue));
}
.pdf:lang(ar){
background:linear-gradient(to left bottom,var(--darkBlue),var(--lightBlue));
}

`