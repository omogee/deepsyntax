import React, { useState, useEffect, useRef } from 'react';
import "./mains.css"

function Navtest() {
    const [width, setwidth] =useState(0)
    const [currentIndex, setcurrentIndex] = useState(0);
    const currentRef = useRef()
    const [imgs, setimgs] =useState([
        {url:"https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", titile:"cup of water"},
        {url:"https://images.freeimages.com/images/small-previews/272/simple-apple-1327953.jpg", titile:"An Apple"},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4BK46yjqQjV7pPa6GKR0srxYWD3UjnRxkA&usqp=CAU", titile:"Simple"},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPFyq_knR4e1EV240vctsiW2E0DfGR6J8Ew&usqp=CAU", titile:"Plate of Food"},
        {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oxb7OK0gc-eTUCCSnvtw2ASkFRBJB6qhMg&usqp=CAU", titile:"house"}
    ])
    useEffect(()=>{
        
       const interval = setInterval(()=>{
        let newIndex = currentIndex + 1 === imgs.length ? 0 : currentIndex + 1
        console.log(currentIndex,newIndex)
        setcurrentIndex(newIndex)
        },5000)
        return () => clearInterval(interval);
    
    })
    useEffect(()=>{
        setwidth(window.innerWidth)
    window.addEventListener("resize", ()=>{
        setwidth(window.innerWidth)
    })
    })
    const prev=()=>{
        let newIndex = currentIndex === 0 ? imgs.length -1 : currentIndex -1
        setcurrentIndex(newIndex)
    }
    const next =()=>{
        const data = document.querySelector(`[data-active=${true}]`)
        let newIndex = currentIndex === imgs.length -1 ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
    }
   const setIndex=(index)=>{
       let ahh = document.querySelectorAll(".ahh")
       ahh.forEach(ahh =>{
           ahh.classList.remove("image")
           ahh.classList.remove("image")
       })
      setcurrentIndex(index)
    }
    return ( 
        <div>
           
            <div  style={{width:"500px",position:"relative", height:"200px",border:"2px solid blue",backgroundImage:`url(${imgs[currentIndex].url})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
             <div style={{position:"absolute",top:"40%",left:"2%"}}>
                 <span onClick={prev} className='fa fa-arrow-left fa-3x'></span>
             </div>
             <div style={{position:"absolute",top:"40%",right:"2%"}}>
                 <span onClick={next} className='fa fa-arrow-right fa-3x'></span>
             </div>
             <div style={{position:"absolute",left:"45%",bottom:"5%",backgroundColor:"transparent"}}>
                 {imgs.map((img,index) =>
                 <div key={img.title} style={{display:"inline",padding:"2px",background:"transparent"}}>
                     <input type="radio" checked={index === currentIndex ? true : false}/>
                     </div>
                 )                
             }
             </div>
            </div>
            <div style={{position:"relative",overflow:"hidden",maxWidth:"38%",height:"200px",border:"2px solid grey"}}>
            <div style={{position:"absolute",top:"40%",opacity:"1",zIndex:"2",left:"2%"}}>
                 <span onClick={prev} className='fa fa-arrow-left fa-3x'></span>
             </div>
             <div style={{position:"absolute",top:"40%",opacity:"1",zIndex:"2",right:"2%"}}>
                 <span onClick={next} className='fa fa-arrow-right fa-3x'></span>
             </div>
              {imgs.map((img, index) =>
                  <img key={img.title} src={img.url} alt={img.title} data-active={index === currentIndex ? true : false}  style={{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}} className="test2"/>
              )}
               <div style={{position:"absolute",left:"45%",bottom:"5%",backgroundColor:"transparent"}}>
                 {imgs.map((img,index) =>
                 <div key={img.title} style={{display:"inline",padding:"2px",background:"transparent"}}>
                     <input type="radio" value={index} onClick={()=>setIndex(index)} checked={index === currentIndex ? true : false}/>
                     </div>
                 )                
             }
             </div>
            </div>
            <div style={{position:"relative",overflow:"hidden",maxWidth:"38%",height:"200px",border:"2px solid grey"}}>
            <div style={{position:"absolute",top:"40%",opacity:"1",zIndex:"2",left:"2%"}}>
                 <span onClick={prev} className='fa fa-arrow-left fa-3x'></span>
             </div>
             <div style={{position:"absolute",top:"40%",opacity:"1",zIndex:"2",right:"2%"}}>
                 <span onClick={next} className='fa fa-arrow-right fa-3x'></span>
             </div>
              {imgs.map((img, index) =>
                  <img key={img.title}  src={img.url} style={{width:"100%",height:"100%",position:"absolute",top:"0",left:"0"}} className={ index === currentIndex ? "image ah" :  index  === currentIndex -1  ? "previmage ah" : "ddd ah"}/>
              )}
               <div style={{position:"absolute",left:"45%",bottom:"5%",backgroundColor:"transparent"}}>
                 {imgs.map((img,index) =>
                 <div key={img.title} style={{display:"inline",padding:"2px",background:"transparent"}}>
                     <input type="radio" value={index} onClick={()=>setIndex(index)} checked={index === currentIndex ? true : false}/>
                     </div>
                 )                
             }
             </div>
            </div>
            <br/><br/>
            <nav  style={{display:"flex",justifyContent:"space-between"}}>
                <h1 style={{padding:"5px"}}>Brand</h1>
                <div style={{order:"3"}}>
                    <ul className='nav-li'>
                        <li>Home <span className='fa fa-home'></span></li>
                        <li>About</li>
                        <li>My Account</li>
                        <li>Page<span className="fa fa-book"></span></li>
                    </ul>
                </div>
                <div style={{position:"absolute", right:"20px",top:"20px"}}>
                    <span className='fa fa-bars fa-2x'></span>
                </div>
               <div className='hello'>
               <button className='btn btn-primary btn-sm'>Login/Register</button>
               </div>
            </nav>
            <br/>
            <br/>
            <nav  style={{display:"flex",justifyContent:"space-between",position:"relative"}}>
                <h1 style={{padding:"5px"}}>Brand</h1>
                <div>
                    <ul className='nav-li'>
                        <li>Home</li>
                        <li>About</li>
                        <li>My Account</li>
                        <li>Page</li>
                    </ul>
                </div>
                <div style={{position:"absolute", right:"20px",top:"20px"}}>
                    <span className='fa fa-bars fa-2x'></span>
                </div>
               <div className='hello'>
               <button className='btn btn-primary btn-sm'>Login/Register</button>
               </div>
            </nav>
            <h1>{width}</h1>
        </div>
     );
}

export default Navtest;