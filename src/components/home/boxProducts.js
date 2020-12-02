
import React from 'react';
import styled from "styled-components";
import { ProductConsumer } from '../../context/context';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Car from '../../images/header/car.jpg';
import Wood from '../../images/header/wood.jpg';
import Paint from '../../images/header/paint.jpg';


import {Link, Route,useParams,useRouteMatch} from "react-router-dom";
import { Card } from '@material-ui/core';













export default function BoxPro() {

  return (

<ProductConsumer>
{value => {
    const {home} = value ;
	const dataBox =home.boxProducts;
	const Title =home.title.product;

	
    
    return(
            <BoxPros>
				    <div className="titleSection">
                           {Title}
                    </div>
		
					
	    <Container>
                 <Grid container spacing={4}>

                     <Grid item md={4} xs={12} className={document.documentElement.lang == "en" ? "wow backInLeft" : "wow backInRight"} data-wow-delay=".7s">
                     <div className="box">
                              <div className="boxs front">
                                    <div className="backg one"></div>
                                    <div className="heading">
                                          <span className="one">
                                              {dataBox.car.title}
                                          </span>
                                    </div>
                                    <ul>
                                         {
											
											dataBox.car.why.map(i => {
												return(
													<li>
														{i}
													</li>
												)
											}) 
										 }
                                    </ul>
                              </div>
                              <div className="boxs back">
                                    <div className="backg one">
									<p>{dataBox.paint.prag}</p>
									 <div className="but">
										 <Link class="btn btn-white" to="/products/cars">
											 {document.getElementsByTagName("html")[0].getAttribute("lang") == "en" ? "View Products" : "عرض المنتجــات"}
										 </Link>
									 </div>
									</div>
                                   
                              
                              </div>

                        </div>
                     </Grid>
                     <Grid item md={4} xs={12}className="wow backInUp">
                     <div className="box">
                              <div className="boxs front">
                                    <div className="backg two"></div>
                                    <div className="heading">
                                          <span className="two">
                                          {dataBox.wood.title}
                                          </span>
                                    </div>
                                    <ul>
									{
											
											dataBox.wood.why.map(i => {
												return(
													<li>
														{i}
													</li>
												)
											}) 
										 }
                                    </ul>
                              </div>
                              <div className="boxs back">
                                    <div className="backg two">
                              
										<p>{dataBox.paint.prag}</p>
										<div className="but">
											<Link class="btn btn-white" to="/products/woods">
										     	{document.getElementsByTagName("html")[0].getAttribute("lang") == "en" ? "View Products" : "عرض المنتجــات"}
											</Link>
										</div>
										
									</div>
                                   
                              
                              </div>

                        </div>
                     </Grid>
                     <Grid item md={4} xs={12} className={document.documentElement.lang == "ar" ? "wow backInLeft" : "wow backInRight"} data-wow-delay=".7s">
                     <div className="box">
                              <div className="boxs front">
                                    <div className="backg three"></div>
                                    <div className="heading">
                                          <span className="three">
                                          {dataBox.paint.title}
                                          </span>
                                    </div>
									<ul>
                                    {
											
											dataBox.paint.why.map(i => {
												return(
													<li>
														{i}
													</li>
												)
											}) 
										 }
									</ul>	 
                              </div>
                              <div className="boxs back">
                                    <div className="backg three">
									 <p>{dataBox.paint.prag}</p>
									 <div className="but">
										 <Link class="btn btn-white" to="/products/paints">
										   {document.getElementsByTagName("html")[0].getAttribute("lang") == "en" ? "View Products" : "عرض المنتجــات"}
										 </Link>
									 </div>
									</div>
                                   
                              
                              </div>

                        </div>
                     </Grid>

                </Grid>
                </Container>
                
</BoxPros>
  
    )
}}
</ProductConsumer>
  )

   }

const BoxPros = styled.div`

	width: 100%;
    position: relative;
	margin: 100px 0;
    padding: 50px 0;
	font-family: "Lato", sans-serif;

	.box{
		position: relative;
		transition: all .8s;
		perspective: 150rem;
		height: 500px;

		.boxs{
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			box-shadow: 0 4px 8px #bdbbbb;
			backface-visibility: hidden;
			transition: all .8s ease-out;
			height: 500px;
			/*انا عملت للاتنين نفس الطول عشان ميحصلش تقطيع فالهفر 
			ثانيا : خاصيه backface
            عشان ال باك يبقا تحت*/
		}
		.front {
			background: white;
			position: relative;
          .backg {
			  width: 100%;
			  height: 50%;
			  background-size: cover;
			  background-blend-mode: screen;
			  background-position: center;
			  clip-path: polygon(0 0, 100% 0,100% 85%,50% 100%,0 85%);

		  }	
		  .one{
			background-image:linear-gradient(to right bottom, orange,red), url(${Car});

		  }
		  .two{
			background-image:linear-gradient(to right bottom, rgb(0, 102, 255),blue), url(${Wood});

		}
		.three{
			background-image:linear-gradient(to right bottom, rgb(0, 255, 13),green), url(${Paint});

		}
.heading {
	font-size: x-large;
	color: white;
	text-transform: uppercase;
	position: absolute;
			top: 160px;
			width: 30%;
			span{
				padding: 0 4px;
				border-radius: 2px;
				box-decoration-break: clone;
				-webkit-box-decoration-break: clone;


				span.one{
					background-image:linear-gradient(to right bottom, rgba(orange,.85),rgba(red,.85))			
					
						}

				span.two{
					background-image:linear-gradient(to right bottom, rgb(0, 102, 255),blue);
							
								}

				span.three{
					background-image:linear-gradient(to right bottom, rgb(0, 255, 13),green);
									
										}		
			
              }
		   }
		   /*Langauge*/
		.heading:lang(en){
			right: 10px;
			text-align:right;
		}
		.heading:lang(ar){
			left: 10px;
			text-align:left;
		}
		  ul {
              padding:20px;
			  li {
				margin: 24px;
				text-align: center;
				font-size: large;
				font-family: 'Lato';
						  }
		  }
		}



		.back {
				transform: rotateY(180deg);
			.backg {
					width: 100%;
					height: 100%; 
				p{
					color: white;
					padding: 30px;
					line-height: 1.6;
					font-size: 16px;
					text-align:justify
				 } 
		    	}	
			.one{
				background-image:linear-gradient(to right bottom, var(--lightOrange),var(--darkOrange));
	
			  }
			.two{
				background-image:linear-gradient(to right bottom, var(--lightBlue),var(--darkBlue));
	
			  }
			.three{
				background-image:linear-gradient(to right bottom, var(--lightGreen),var(--darkGreen));
	
			  }

		}


		&:hover .front{
			transform: rotateY(-180deg);
		  }
		&:hover .back{
			transform: rotateY(0deg);
				
		  }

	}
	

	.btn:link,
	.btn:visited {
			padding: 15px 25px;
			font-family: 'Lato', sans-serif;
			text-transform: uppercase;
			text-decoration: none;
			display: inline-block;
			font-size: 14px;
			margin: 35px auto;
			border-radius: 100px;
			transition: .3s ease-out;
			position: relative;

			&:hover{
				transform: translateY(-3px);
				box-shadow: 0 6px 16px black;
			}
			&:active{
				transform: translateY(-1px);
				box-shadow: 0 3px 8px black;
			}
			&::after{
				content: "";
				display: inline-block;
				width: 100%;
				height: 100%;
				border-radius: 100px;
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				transition: .3s ease-out;

			}
			&:hover::after{
				transform: scale(1.5);
				opacity: 0;
			}
				
		
	}
	.btn-white{
		background: white;
		color: #777;
		&::after{
			background: white;

		}


	}
	.but{
		width:100%;
		display:flex;
		justify-content:center;
	}
	
`
/**<>
  
    </> */