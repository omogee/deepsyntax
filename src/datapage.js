import React, { useState, useEffect ,useRef} from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';
import "./s.css"

function Datapage() {
    const [data, setData] =useState([])
    const [page, setPage] = useState(1)
    const [likes, setlikes] = useState({})
    const [dislikes, setdislikes] = useState({})
    const [loading,setloading]=useState(false)
    const [search, setsearch] = useState("")

   const loader= useRef()
   const didMount = useRef(false)

    useEffect(()=>{
        setloading(true)
     axios.get(`https://picsum.photos/v2/list?page=${page}`)
     .then(res => {
         setData(data.concat(res.data))     
            setloading(false)
    })
     .catch(err => console.warn(err))
    },[page])
 useEffect(()=>{
     console.log(didMount.current, loader.current)
        let options ={
            root: null,
            rootMargin:"0px",
            threshold:0.1
        }
        const callback =(entries)=>{
            entries.forEach(entry =>{
              if(entry.isIntersecting){
         setPage(prev => prev + 1)
                  
              }
            })
        }
        const observer = new IntersectionObserver(callback, options)
        if(didMount.current && loader.current){
            observer.observe(loader.current)
     }
     didMount.current = true
 },[loader.current])
 useEffect(()=>{
     console.log(`new page is ${page}`)
 })
    useEffect(()=>{
    const elements = document.querySelectorAll(".dataimages")
    let options ={
        root: null,
        rootMargin:"0px",
        threshold:0.1
    }
    const callback =(entries)=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.src= entry.target.dataset.src
            }
        })
    }
    elements.forEach(element =>{
        const observer = new IntersectionObserver(callback, options)
        observer.observe(element)
    })
    })
    const scale =(e)=>{
        console.log(e)
if(e.target.className !== "off" || e.target.className !== "buy" || e.target.outerText !== "$1000 off" || e.target.outerText !== "buy" ){
    e.target.style.transform = "scale(1.5,1.5)"
}
    }
    const unscale =(e)=>{
 e.target.style.transform = "scale(1,1)"
    }
    const like =(id)=>{
        let peopleslikes = likes
        peopleslikes[`${id}`] =  peopleslikes[`${id}`] ? peopleslikes[`${id}`] + 1 : 1
        console.log(peopleslikes, "likes")
        setlikes(peopleslikes)
    } 
    const dislike =(id)=>{
        let peoplesdislikes = dislikes
        peoplesdislikes[`${id}`] =  peoplesdislikes[`${id}`] ? peoplesdislikes[`${id}`] + 1 : 1
        console.log(peoplesdislikes, "dislikes")
        setdislikes(peoplesdislikes)
    } 
    const change=(e)=>{
        setsearch(e.target.value)
    }
   const submit =(e)=>{
       e.preventDefault()
       let datum = data;
       let newdata =[]
      datum.map(dat =>{
          if(dat.author.toLowerCase() === search.toLowerCase()){
         newdata.push(dat)
          }
      })
      setData(newdata)
   }
    return ( 
        <div>
            <div style={{padding:"30px"}}>
           <form method="get" >
           <div>
           <input onChange={change} className="form-control"  placeholder='Search Vendor' style={{width:"60%",border:"1px solid lightgrey",borderRadius:"5px"}} />
           </div>
           <br/>
           <button className='btn btn-primary' type='submit' onSubmit={submit}>Submit</button>
           </form>
            </div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
            {data.map(dataimages =>
                <div key={dataimages.id} className="datapagediv"   style={{width:"25%",padding:"20px"}}>
                    
                    <div onMouseLeave={(e)=>unscale(e)} style={{height:"200px",borderRadius:"5px",position:"relative"}}>
                    <div className='off' style={{position:"absolute",right:"0px",top:"0px",zIndex:"10",backgroundColor:"green",fontWeight:"bold",padding:"1px 5px",borderBottomLeftRadius:"10px",borderTopLeftRadius:"5px",color:"white"}}>
                        <p> {`- $${dataimages.id/100}%`} <span style={{color:"lightgrey"}}>off</span></p>
                    </div>
                    <div className='buy' style={{position:"absolute",left:"0px",bottom:"0px",zIndex:"10",backgroundColor:"orange",fontWeight:"bold",padding:"1px 5px",borderBottomRightRadius:"10px",borderTopRightRadius:"5px",color:"white"}}>
                        <p>BUY</p>
                    </div>
                <img className='dataimages'  onClick={(e)=>scale(e)} onMouseLeave={(e)=>unscale(e)} src={require('./hero.png')} data-src={dataimages.download_url} style={{width:"100%",height:"100%"}} />
                </div>
                <br/><br/>
                <p><b>Property Ref No</b> : {dataimages.id}</p>
                <p><b>Vendor</b> : {dataimages.author}</p>
                <p>Width : {dataimages.width} <b>psqm</b></p>
                <p> Height : {dataimages.height} <b>psqm</b></p>
                <p> <Link to={dataimages.download_url}>{dataimages.download_url}</Link> </p>
                <div style={{display:"flex",flexWrap:"nowrap",width:"100%"}}>
                    <div style={{width:"50%"}}>
                    <span onClick={()=>like(dataimages.id)} style={{padding:"5px",fontSize:"25px",color:"grey"}} className="fa fa-thumbs-up"> <span style={{fontSize:"20px"}}> {likes[`${dataimages.id}`] || 0}</span></span>
                    </div>
                    <div style={{width:"50%"}}>
                    <span onClick={()=>dislike(dataimages.id)} style={{padding:"5px",fontSize:"25px",color:"grey",float:"right"}} className="fa fa-thumbs-down"> <span style={{fontSize:"20px"}}> 0</span></span>  
                    </div>
                    </div>        
                </div>
                )}
                </div>
                <div ref={loader} style={{marginTop:"40px"}}>
                    <h1>Hello</h1>
           {loading ? 
           <img  src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921`}  />
        : null}
         </div>
        </div>
     );
}

export default Datapage;