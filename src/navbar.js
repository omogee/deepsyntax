import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Landing from './landing';
import "./s.css"

function Navbar() {
    const [display, changedisplay] = useState("none")
    const [navlinks, setnavlinks] = useState([{url:"/",name:"home"},{url:"services",name: "services"},{url:"contacts",name:"contact"},
    {url:"login",name:"login/register"}])
    const [subnavlinks, setsubnavlinks] = useState([{url:"/products",name:"Our Products"},{url:"blog",name: "blog"},{url:"Complaint",name:"Complaint"},
    {url:"policies",name:"Our policies"}])

    const navref =useRef(false)



    
    const displaynav=(e)=>{
        let nav = document.querySelector(".navdiv_sm")
        if(nav.style.width === "60%"){
            e.target.style.opacity = "0"
            e.target.classList.add("fa-bars")
            e.target.classList.remove("fa-times")
            e.target.style.opacity = "1"
        }else{
            e.target.style.opacity = "0"
            e.target.classList.add("fa-times")
            e.target.classList.remove("fa-bars")
            e.target.style.opacity = "1"
        }
        nav.style.height = "100vh"
        nav.style.width = nav.style.width === "60%" ? "0%" : "60%"
        }
    return ( 
        <div style={{position:"sticky",top:"0px",width:"100%",zIndex:"1000"}}>
            <nav style={{padding:"0",margin:"0"}}>
                <div className='navdiv navdivlist' style={{margin:"0px",padding:"0px 10px",zIndex:"15"}}>
                  <div className='navbrand'>
                      <img style={{width:"100%",marginTop:"5px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                  </div>
                  {navlinks.map((navlink,i) =>               
                  <div key={i} className='navdivlist'>
                <a  style={{textDecoration:"none"}} href={`/${navlink.url}`}>{navlink.name}</a>
                </div>
             )}
                  <div >
                      <center style={{padding:"5px"}}>
                      <button className='btn btn-primary nav-btn'>ACCOUNT</button>
                      </center>
                  </div>
                </div>
            </nav>
          
            <div className='bardiv' style={{display:"absolute",top:"5px",width:"100%",height:"50px",backgroundColor:"white",opacity:"0.8", right:"0px",padding:"10px"}}>
            <div style={{width:"20%",float:"left"}}>
                      <img style={{width:"100%"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF514mmQNz2OYCDUq8pIA2tRxg4lOzrn-yXA&usqp=CAU`} />
                  </div>
                <span onClick={displaynav} className='fa fa-bars' style={{float:"right",color:"grey",border:"2px solid grey",fontSize:"20px",padding:"5px",color:"grey",cursor:"pointer",transition:"opacity 2s"}}></span>
            </div>
            <div className='navdiv_sm' ref={navref}>
             <div style={{padding:"20px"}}>
                 {navlinks.map(navlink =>
                 <Link style={{textDecoration:"none",color:"white"}} to={`/${navlink.url}`}><p >{navlink.name}</p></Link>
                    )}
 
                 
             </div>
            </div>
        </div>
     );
}

export default Navbar;