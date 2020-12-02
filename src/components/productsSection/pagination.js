
import React,{useState,useEffect} from 'react';
import { ProductConsumer } from '../../context/context';









export default function Pagination({current}) {
    const [postion, setPostion] = useState(window.location.pathname);

    useEffect(() => {
       /*global $, alert, console*/

        $(function () {

            if(!$(".pagination li").hasClass('activePagination')) {
                $(".pagination li").first().addClass("activePagination")
            }

            });

    current(1)

      }, [postion]);
            /*global $, alert, console*/

$(function () {

    $(".pagination li").on('click',function () {
            $('.pagination li').removeClass('activePagination');
            $(this).addClass('activePagination');
            $('html, body').animate({scrollTop:0}, 'slow');
      });
       
    });
    
    
    
  return (

<ProductConsumer>
{value => {
                     const {Products,indexFirst,indexLast,postpage,pag} = value ;
                     let Data = Products.filter(prod => prod.product == (postion == "/products/paints" ? "paint" :
                     postion == "/products/cars" ? "car" : "wood"));
                     let currentData = Data.slice(indexFirst,indexLast);
                    
                    /*Pagination Loop*/
                     const NumberPage=[];
                            for(let i=1; i <= Math.ceil(Data.length/postpage); i++){
                                NumberPage.push(i);
                            }
    
    return(
         
        <ul className="pagination">
                    {
                        NumberPage.map(number =>(<li key={number} onClick={()=> pag(number)}>{number}</li>))
                    }
       </ul>   
    )
}}
</ProductConsumer>
  )

   }


   

