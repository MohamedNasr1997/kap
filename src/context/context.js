import React, { useState, useEffect } from "react";

import { useTranslation } from 'react-i18next';
import { matchPath } from "react-router-dom";

const ProductContext = React.createContext();
//Provider
//Consumer


function ProductProvide({ children }) {
 
       
       
    const { t, i18n } = useTranslation();
    console.log(t("navbar",{returnObjects: true}));
    const [lange, setLang] = useState(t("lang",{returnObjects: true}));
    const [title, setTitle] = useState(t("title",{returnObjects: true}));
    const [links, setlinks] = useState(t("navbar",{returnObjects: true}));
    const [megaProduct, setmegaProducts] = useState(t("megaProducts",{returnObjects: true}));
    const [Products, setProducts] = useState([]);
    const [category, setcategory] = useState([]);
    const [type, settype] = useState([]);
    const [seacrh, setsearch] = useState([]);
    const [flag, setFlag] = useState("0");
    const [contact, setContact] = useState(t("contact",{returnObjects: true}));
    const [place, setPlace] = useState(t("place",{returnObjects: true}));
    const [question, setQuestion] = useState(t("question",{returnObjects: true}));
    const [home, sethome] = useState(t("home",{returnObjects: true}));
    const [about, setAboutUs] = useState(t("aboutUs",{returnObjects: true}));
    const [troubleshooting, setTroubleshooting] = useState(t("troubleshooting",{returnObjects: true}));

    
     /*Pagination */
     const [current,setCurrent]=useState([]);
     const [postpage,setPostpage]=useState(7);
     const indexLast =current * postpage
     const indexFirst =indexLast - postpage
     const pag = (num)=>{
         setCurrent(num)
     }



const dfghf=place[0]
    console.log(dfghf);

    

    const allProducts =t("products",{returnObjects: true});
    const carSection =allProducts.cars;
    const woodSection =allProducts.woods;
    const paintSection =allProducts.paints;

const arrayOfAllProducts =[ ...carSection,...woodSection,...paintSection];



    useEffect(() => {
    console.log('yes');

    setProducts(

        
                  //filter with option Category
arrayOfAllProducts.filter(stepone => stepone.category == ( category == "" ? stepone.category : category) ) 
                  //filter with option type
             .filter(steptwo => steptwo.type == ( type == "" ? steptwo.type : type) )
                  //filter with Search
             .filter(stepthree => stepthree.title.toLowerCase().indexOf(seacrh) !== -1)
                 );
                 setCurrent(1);

      console.log('no');

    return () => {};
  }, [category,type,seacrh]);
  
 
  

  
  
  

console.log(about);
const defaultCurrent = e =>{
    setCurrent(e);
               }

  const categoryFilter = e =>{

    const value =e.target.value;
    setcategory(value);
    console.log(category);

               }

const typeFilter = e =>{

    const value =e.target.value;
    settype(value);
   }

const searchFilter = e =>{
   
     const value =e.target.value;
     setsearch(value);
    }

const filterContact = e =>{

        const value =e.currentTarget.getAttribute('val');
        setFlag(value);
       }


    
      
        return (
            
            <ProductContext.Provider value={
                { 
                    links,
                    title,
                    lange,
                    megaProduct,
                    Products,
                    type,
                    defaultCurrent,
                    category,
                    contact,
                    flag,
                    indexLast,
                    indexFirst,
                    postpage,
                    troubleshooting,
                    
                    pag,
                    question,
                    place,
                    filterContact,
                    about,
                    home,
                    typeFilter,
                    categoryFilter,
                    searchFilter,

                    
                
                 }
             }>
                      {children}

            </ProductContext.Provider>
        )
    }

const ProductConsumer = ProductContext.Consumer

export {ProductProvide, ProductConsumer}

