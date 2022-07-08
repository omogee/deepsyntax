import React, { useState, useEffect, useRef } from 'react';

function Lazyloader() {
    const [page, setPage] = useState(1)
    const [images, setImages ]= useState([])
    const [input, setinput] = useState("")
    const [loading, setloading] = useState(false)
    const loader = useRef()
    const refimages = useRef()
    const didMount = useRef(false)
    useEffect(()=>{
        setloading(true)
        let img = images
       fetch(`https://picsum.photos/v2/list?page=${page}`)
       .then(response => response.json())
      .then(data => {
       //   img.push(data)
        setImages(img.concat(data))
        console.log(data)
        setloading(false)
      });
    },[page])
    const callback = entries=>{
      entries.forEach(entry =>{
         if(entry.isIntersecting){
            setPage(prev => prev + 1)
         }
      })
    }
useEffect(()=>{
    console.log("current page is", page)
},[page])
    const anothercallback = entries=>{
        entries.forEach(entry =>{
           if(entry.isIntersecting){
               entry.target.src =   entry.target.dataset.src
               imgobserver.unobserve(entry.target)
           }
        })
      } 
      const options={
        root:null,
        rootMargin:"0px",
        threshold:0.1
    }
    const observer = new IntersectionObserver(callback, options)
    useEffect(()=>{
        console.log("didMont", didMount.current, loader.current)
        if(didMount.current && loader.current){
            observer.observe(loader.current)
        }
        didMount.current = true
      
    },[loader.current])

    const imgobserver = new IntersectionObserver(anothercallback)
    const img = document.querySelectorAll(".img")
    useEffect(()=>{
           img.forEach(imgs =>{
            imgobserver.observe(imgs)
           })
    })
    const change=(e)=>{
        setinput(e.target.value)
        const data =[]
        images.forEach(image =>{
            if(image.author && image.author.toLowerCase().indexOf(input) > -1){
                data.push(image)
            }
        })
        setImages(data)
    }
    useEffect(()=>{
        const data =[]
        images.forEach(image =>{
            if(image.author && image.author.toLowerCase().indexOf(input) > -1){
                data.push(image)
            }
        })
        setImages(data)
    },[input])
   const scale=(e)=>{
     e.target.style.zIndex ="10"
     e.target.style.transform = "scale(2,2)"
    }
    const unscale=(e)=>{
        e.target.style.zIndex = "2"
        e.target.style.transform = "scale(1,1)"
       }
       const rotate =()=>{
           
       }
    return (
        <div>
            <h1 >I am the lazy loader page </h1>
            <div style={{width:"100%",marginBottom:"10px"}}>
                <center>
                <input onChange={change}  placeholder='Search Photos...' style={{width:"60%",border:"1px solid lightgrey",borderRadius:"5px"}} />
                </center>
                
            </div>
            <div style={{display:"flex",width:"100%",flexWrap:"wrap"}}>
          {images.map(image =>
            <div key={image.id} style={{width:"25%",border:"1px solid lightgrey",padding:"20px"}}><br/>
            <div style={{width:"100%",padding:"3px",height:"350px"}}>
           <div style={{height:"100px"}}> 
           <p>Author : {image.author}</p>
                <p>Width : {image.width}</p>
                <p> Height : {image.height} </p>
           </div>
                <img onMouseEnter={(e)=>scale(e)} onMouseLeave={(e)=>unscale(e)} className='img' ref={refimages} data-src={image.download_url} src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAAAPFBMVEX29va2trb5+fmzs7PFxcXQ0NDq6uq4uLjk5OTw8PDBwcG+vr7y8vL19fXg4OC7u7vW1tbR0dHJycna2tpbkRd1AAAEqUlEQVR4nO2d7ZqjIAxGNSh+oNXq/d/r2pmd2VYRNC1K1vf8nXna9DwIGkJMEgAAAAAAAAAAAAAAPgQllZZDNcUbAXQzShLmFoO2QaWyUMPZyhLKpUmbtOVnjzYtT9qkTZ8rTeJQO3+wUXa2AQ4qgzUGsMYB1jjAGgdY4wBrHOKydvYzpoN4rZkyXky01k4OxgXVEQUKa6xgYI0TDKxxgoE1TjCwxgkG1jjBwBonGFjjBANrnGBgjRMMrHGCgTVOMLDGCQbWOMHwrNEXQSObf6N0a5ToW3+/9zfdHmdOtjWicih+s9LD7ahqMtHWqDQvKXzVjUeEKdoaNctiN1VXR/wEudZIF9YKpCOKF8Vao9Km7DHcxvA/Qqw1vSJt0lYG/xVSrbXdqrU0DV68KNSas6pS1aF/hlBr7gJeFXpFkGmNMncBbwdrFipP1XPoBUGkNep91gZY8/yfjaING6hEa03hsxb45IRIa75pLfgqKtEalX5rYR+rJFpLNljrYW0OxtpLMBut+Y/2wdqSxm+tDBuoRGuJSX1UYQOVaI2857zrwIGKtOZbDgIvoTKtJeR5OFBhL1Cp1kZ3fi3ww7tQa+4EeOi1QKw158wWelYTa82VYjugL4lUa+t3H8qEza19fblUa2vNeVTdHBCoXGvWhVTlhwQq11pCup55U134ffevbxZsbaKs/x2nVqob22N+gHBrCVXjYKYnhcJkvT6sWFK6tUe9ZNJMHFhf+j9Y+8gXE7XVd8PDbcXAsEakx9/qXpOXG4p7L2+Nqt48N+iY1pS+8a7e17ZGekiXxb2Fb9fh0taoGpT9AcNo9+Pcda1Rky/H2S/OzfvrWqPSXkP+M9xc6aarWrMdVphpuztyyde0tnZYYeNou6Y1z77Dj7bVue2a1jb2zVZrK+kVrbWeWuh/rJVcXs8aNWZzB+i1LcLLWaOq29E2e2Vqu5y1XdKma9S6C3E1a80+aSut0S9mba+0lZKRa1lr59szG6zZFgTZ1mhnU4r90uxHFwRbo/a7J8V40802dayXwtheXyDWGum8+22VXJi89G7qsd/UsRxsQq2Rzl7ziZO5oXQOOLY0y8wm0po9zfPI+K/3pfCe83NoW9yzSbS2nk9U6aDtW0x0579IZ5kyEmjNmeZRyoyWLab33j5kFh8nzpp31DwaFjUvUxxVnFuOp0+cn/kQZ23LpTYtDVmvm+TvzVx1f0dZalkPpFnbPD9N9yNdnQ1DVnf23bs9zPNswqxtS10/u3tX2PfHzBJGsqxtOE8bhPklKsua/8B7KGaBSrJG7y2FbzBrECLJ2t5J7YPMkpOSrK03DwvP642uIGvnXZ8PqtdQnv8UszW6nSnt9d5DjrX2tPXzwevEJsbaO0mLT2BEWquOlbTkOckmxlpbnczzo6gYa1EBaxxgjQOscYA1DrDGAdY4wBoHWOMAaxxgjUPU1uIlXmtpES9pvNakAGscYI0DrHGANQ6wxgHWOJxtbThbAIfgfWZ91k7dXucS/O1XXrYfE44GtagQP5zK3zAiMlQRuqXxFm2ZkkV2yGtefZDuczn07i5QB3J2FmgfZ9sCAAAAAAAAAAAAiJQ/LJxiswMZp2kAAAAASUVORK5CYII=`} style={{width:"100%",height:"200px"}}/><br/>   
                <div style={{display:"flex",flexWrap:"nowrap",width:"100%"}}>
                    <div style={{width:"50%"}}>
                    <span style={{padding:"5px",fontSize:"25px",color:"grey"}} className="fa fa-thumbs-up"> <span style={{fontSize:"20px"}}> 0</span></span>
                    </div>
                    <div style={{width:"50%"}}>
                    <span style={{padding:"5px",fontSize:"25px",color:"grey",float:"right"}} className="fa fa-thumbs-down"> <span style={{fontSize:"20px"}}> 0</span></span>  
                    </div>
                    </div>           
               </div>
                <br/>
            </div>)}
            </div>
            <div ref={loader} style={{marginTop:"40px"}}>
           {loading ? 
           <img  src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921`}  />
        : null}
         </div>
        </div>
      );
}

export default Lazyloader;