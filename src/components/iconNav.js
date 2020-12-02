
import React, {useState} from 'react';
import styled from "styled-components";
import Menu from './menu';






export default function Icon() {
   
const [open,setOpen]=useState(false)
    

  return (

<>
      <Icons open={open} onClick={()=>setOpen(!open)}>


             <div />
             <div />
             <div />
         

      </Icons>
      <Menu open={open} />
</>
    )


   }

const Icons = styled.div`
     height:20px;
    width:25px;
    display: none;
    flex-flow: column;
    justify-content: space-between;
    z-index:20;
    transition: transform .3s ease-out;
    margin:${({open}) => open ? "15px" : ""};





div{
    height:2px;
    width:25px;
    border-radius:20px;
    transform-origin:1px;    
    transition: transform .3s ease-out;

    background:#333;
    &:nth-child(1){
transform:${({open}) => open ? "rotate(45deg)" : "rotate(0)"};
}

&:nth-child(2){
transform:${({open}) => open ? "translateX(100%)" : "translateX(0)"};
opacity:${({open}) => open ? 0 : 1};
}

&:nth-child(3){
transform:${({open}) => open ? "rotate(-45deg)" : "rotate(0)"};
}
}
@media (max-width: 768px) {
    display: flex;

    }
`
/**<>
           <li class="nav-item">
    <Link class="nav-link active" to='/'>{links[0].text}</Link>
      </li>
      
      <li class="nav-item dropdown menu-area">
        <a class="nav-link dropdown-toggle" href="#" id="mega-one" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {links[1].text}
        < /a>
        <div class="dropdown-menu mega-area" aria-labelledby="mega-one">
          <div class="row">
              <div class="col-lg-3 col-sm-6">
                  <h2>{Cars.section}</h2>
                  {
                    Cars.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Woods.section}</h2>
                  {
                    Woods.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              <div class="col-lg-3 col-sm-6">
                  <h2>{Paints.section}</h2>
                  {
                    Paints.links.map(li => {
                      return(
                      <Link class="dropdown-item" to={li.bath}>{li.name}</Link>
                      )
                    })
                  }
              
              </div>
              
          </div>
          
        </div>
      </li>
      
      <li class="nav-item">
      <Link class="nav-link" to='/gallery'>{links[3].text}</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/contact'>{links[4].text}</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/aboutus'>{links[5].text}</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <MdLanguage />
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" onClick={()=>changeLanguag('en')}>English</a>
          <a class="dropdown-item" onClick={()=>changeLanguag('ar')}>العربية</a>
        </div>
      </li>
         </>
         }
          </ul>

    </> */