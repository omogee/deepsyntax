import React, { useState, useEffect } from 'react';
import background1 from "./housephoto.jpeg"
import background2 from "./house2.jpeg"
import background3 from "./house3.jpeg"
import background4 from "./house4.jpeg"
import background5 from "./house5.jpeg"
import background6 from "./house6.jpeg"
import background from "./background.jpeg"
import "./s.css"

function Landing() {
    const [currentIndex, setcurrentIndex] =useState(0)
    const [imgs, setImgs] = useState([
        {title:"Lekki Conservation Center",img:background1,text:"We only charge 1.5% commission to sell your home. Compared to traditional agents who charge up to 3%, plus $3,000 cash back when you buy, this saves you over $10,000 in commissions on average!"},
        {title:"Banana Island, Lagos",img:background6,text:" to sell your home. Compared to traditional agents who charge up to 3%, plus $3,000 cash back when you buy, this saves you over $10,000 in commissions on average!"},
        {title:"Bourdilion Estate",img:background3,text:"We only charge 1.5% commission to  to traditional agents who charge up to 3%, plus $3,000 cash back when you buy, this saves you over $10,000 in commissions on average!"},
        {title:"juvenile, Epe",img:background4,text:"We only charge 1.5% your home. Compared to traditional agents who charge up to 3%, plus $3,000 cash back when you buy, this saves you over $10,000 in commissions on average!"},
        {title:"Obanikoro Estate, Bariga",img:background5,text:"We only charge 1.5% commissione. Compared to traditional agents who charge up to 3%, plus $3,000 cash back when you buy, this saves you over $10,000 in commissions on average!"}
    ])
    const [products, setproducts] =useState([
        {id:1,
        title:"Hotel Management Software System Application",
         image:"product1.jpeg",
         description:`Our Hotel Management Software System Application has all the features required for all 
         Small & Medium hotels to function seamlessly. It is very friendly to use and manage all operations of a 
         Hotel very effectively. This software can be set up for your unique needs. 
         This Hotel management system has been conceived by a blend`},
         {id:2,
  title:"Hospital Management Software Application",
   image:"product2.jpeg",
   description:`Online Exam and Learning Management System is an online examination and learning management
    system for schools, colleges, academies, and all types of educational institutes. 
    Now schools can offer online education to your students, take quiz tests and exams easily and effectively. Online Exam and Learning Management System
    – features are growing with every release, you will get`},
    {id:3,
      title:"The Best Inventory & Sales Software System in Nigeria",
       image:"product3.jpeg",
       description:`he Best Inventory & Sales Software in Nigeria Datalex Inventory Software is a complete
        Inventory and POS management software package that is robust in its functionality and very easy to use!
         With Datalex Inventory Software, you can automate your ordering and delivery process in just a few 
         clicks. Manage and Monitor Inventory. Make sales`},
                   {id:4,
    title:"Hotel Management Software System Application",
     image:"product4.jpeg",
     description:`Our Hotel Management Software System Application has all the features required for all 
     Small & Medium hotels to function seamlessly. It is very friendly to use and manage all operations of a 
     Hotel very effectively. This software can be set up for your unique needs. 
     This Hotel management system has been conceived by a blend`},
     {id:5,
        title:"Hospital Management Software Application",
         image:"product5.jpeg",
         description:`Online Exam and Learning Management System is an online examination and learning management
          system for schools, colleges, academies, and all types of educational institutes. 
          Now schools can offer online education to your students, take quiz tests and exams easily and effectively. Online Exam and Learning Management System
          – features are growing with every release, you will get`},
          {id:6,
   title:"The Best Inventory & Sales Software System in Nigeria",
    image:"product6.jpeg",
    description:`he Best Inventory & Sales Software in Nigeria Datalex Inventory Software is a complete
     Inventory and POS management software package that is robust in its functionality and very easy to use!
          With Datalex Inventory Software, you can automate your ordering and delivery process in just a few 
     clicks. Manage and Monitor Inventory. Make sales`}
            

    ])
    useEffect(()=>{
        const nextindex = currentIndex === 4 ? 0 : currentIndex + 1
        const elements = document.querySelectorAll(".observe")
       const intervalOne= setInterval(()=>{
          elements.forEach(element=>{
            element.style.visibility ="hidden"
            element.style.opacity ="0"
            element.style.transform ="translateY(-100%)"
          })
        },7000)
       const intervalTwo= setInterval(()=>{
            setcurrentIndex(nextindex)
        elements.forEach(element=>{
            element.style.visibility ="visible"
            element.style.opacity ="1"
            element.style.transform ="translateY(0px)"
          })
        },8000)
    return ()=>{
         clearInterval(intervalOne)
        clearInterval(intervalTwo)}
    })
    const next =()=>{
        const elements = document.querySelectorAll(".observe")
          elements.forEach(element=>{
            element.style.visibility ="hidden"
            element.style.opacity ="0"
            element.style.transform ="translateY(-100%)"
          })
        
        const nextindex = currentIndex === 4 ? 0 : currentIndex + 1
      setTimeout(()=>{
        setcurrentIndex(nextindex)
        elements.forEach(element=>{
            element.style.visibility ="visible"
            element.style.opacity ="1"
            element.style.transform ="translateY(0px)"
          })
      },1000)
    }
    const prev =()=>{
        const elements = document.querySelectorAll(".observe")
        elements.forEach(element=>{
          element.style.visibility ="hidden"
          element.style.opacity ="0"
          element.style.transform ="translateY(-100%)"
        })

        const previndex = currentIndex === 0 ? 4 : currentIndex - 1
        
        setTimeout(()=>{
            setcurrentIndex(previndex)
            elements.forEach(element=>{
                element.style.visibility ="visible"
                element.style.opacity ="1"
                element.style.transform ="translateY(0px)"
              })
          },1000)
    }

   const options ={
       root:null,
       rootMargin:"0px",
       threshold:0.1
   }
   const section2_options ={
    root:null,
    rootMargin:"0px",
    threshold: 0.5
   }

    useEffect(()=>{
        const elements = document.querySelectorAll(".observe")
        const callback =()=>{
          elements.forEach(element=>{
            element.style.visibility ="visible"
            element.style.opacity ="1"
            element.style.transform ="translateY(0px)"
          })
        }
        const observer = new IntersectionObserver(callback, options)
        elements.forEach(element =>{
            observer.observe(element)
            }) 
    })
    useEffect(()=>{
        const elements = document.querySelectorAll(".section2")
   const callback =(entries)=>{
   entries.forEach(entry =>{
       if(entry.isIntersecting){
            entry.target.style.visibility ="visible"
            entry.target.style.opacity ="1"
            entry.target.style.transform ="translateX(0%)"       
       }
   })
 }
 const observer = new IntersectionObserver(callback,section2_options)
 elements.forEach(element=>{
    observer.observe(element)
 })
    })
    useEffect(()=>{
        const elements = document.querySelectorAll(".sectionY")
        const callback =(entries) =>{
            
          entries.forEach(entry=>{
            if(entry.isIntersecting){
            entry.target.style.visibility ="visible"
            entry.target.style.opacity ="1"
            entry.target.style.transform ="translateY(0%)"  
            }
          })
        }
        const observer = new IntersectionObserver(callback, section2_options)
        elements.forEach(element =>{
            observer.observe(element)
        })
    })
    return ( 
        <div style={{backgroundColor:"lightgrey",zIndex:"1"}}>
             <div className='carodiv'>
             <div  style={{width:"100%",height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:`url(${imgs[currentIndex].img})`}}>
                 <div className='discountdiv'>
                    <span style={{background:"transparent",color:"white",fontSize:"20px"}}>Get <span style={{fontSize:"40px",background:"transparent",color:"red"}}>$1000</span> off</span>
                    <br/>
                   <small style={{color:"white"}}>On your first purchase and on every refferal <span style={{fontSize:"50px",position:"absolute"}}> &#128562;</span></small>
                 </div>
                 <div  style={{position:"absolute",top:"40%",left:"10%",width:"50%"}}>
                    <h2 className='observe' style={{textTransfrom:"capitalize",fontWeight:'bold',color:"white"}}>Lets Design And Host Your Dream</h2>
                    <br/>
                    <br/>
                   
                    <p style={{color:"white"}} className='observe'>{imgs[currentIndex].text}</p>
                    <button className='btn observe' style={{backgroundColor:"rgba(0,0,0,0.7)",fontSize:"18px",color:"white",marginTop:"5px"}}>Get Started Now!</button>
                 </div>
                 <div onClick={prev} style={{borderRadius:"50%",position:"absolute",left:"3%",top:"48%",backgroundColor:"rgba(0,0,0,0.7"}}>
                     <span style={{color:"white",fontSize:"20px",fontWeight:"bolder",padding:"30px"}} className='fa fa-chevron-left'></span>
                 </div>
                 <div onClick={next} style={{borderRadius:"50%",position:"absolute",right:"3%",top:"48%",backgroundColor:"rgba(0,0,0,0.7"}}>
                     <span style={{color:"white",fontSize:"20px",fontWeight:"bolder",padding:"30px"}} className='fa fa-chevron-right'></span>
                 </div>
                 </div>
            </div>
            <div style={{backgroundColor:"white",margin:"0px"}}>
                <div className='section_Two'>
                  <br/><br/>
                   <center>
                       <img src={require("./cctv.jpeg")} style={{width:"25%",borderRadius:"50%",border:"2px solid orange"}}/>
                     <br/>
                    <div >
                        <br/><br/>
                        <div  className='section2'>
                        <h1>CCTV installed</h1>
                        <br/>
                        <p  style={{color:"grey"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                             typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                             Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem Ipsum.</p>
                              </div>
                    </div>   
                    </center>
                </div>
            </div>

            <div className='row' style={{backgroundColor:"white",marginTop:"30px"}}>
            <div className='col-12 col-lg-6' >
            <div className='section2'  style={{padding:"50px"}}>
            <p style={{textTransform:"uppercase",fontSize:"20px",color:"Maroon",fontWeight:"bolder"}}>Selling In Lekki, Nigeria.</p>
            <h1 style={{color:"Salmon",fontSize:"70px",fontWeight:"bolder"}}>Get Full-Service Real Estate For 
            <h1 style={{color:"IndianRed",fontSize:"70px",padding:"0px",fontWeight:"bolder"}}>Thousands Less! &#129327;</h1></h1>
            <p style={{color:"grey"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled 
                            it to make a type specimen book.</p>
                            <button className='btn observe' style={{backgroundColor:"indianred",opacity:"0.5",fontSize:"18px",color:"white",marginTop:"5px"}}>Get Started Now!</button>
                            </div>
            </div>
            <div className='col-12 col-lg-6' style={{padding:"30px"}}>
   <div className='row'>
     <div className='col-12 col-sm-4' style={{padding:"0",height:"100%"}}>
     <img className='section_3_img' style={{width:"100%",padding:"10px",borderRadius:"30px"}} src={`https://www.trelora.com/wp-content/uploads/2022/06/az-sell-square3.jpg`}></img>
</div>
<div className='col-12 col-sm-4' style={{height:"100%",padding:"0"}}>
     <img className='section_3_img' style={{width:"100%",padding:"10px",borderRadius:"30px"}} src={`https://www.trelora.com/wp-content/uploads/2022/06/az-sell-square3.jpg`}></img>
</div>
<div className='col-12 col-sm-4' style={{padding:"0",height:"100%"}}>
     <img className='section_3_img' style={{width:"100%",padding:"10px",borderRadius:"30px"}} src={`https://www.trelora.com/wp-content/uploads/2022/06/az-sell-square3.jpg`}></img>
</div>
    </div>           
            </div>
           </div>
   <br/><br/>
   <div style={{backgroundColor:"white"}}>
       <br/><br/>
           <div style={{textAlign:"center",marginTop:"20px"}}>
               <h1>Our Products &#11088;</h1>
           </div>
           <div className='row'>
           {products.map(product =>
            <div key={product.id} className='col-12 col-sm-6 col-md-4' style={{padding:"25px"}} >
         <div>
         <img src={require(`./${product.image}`)}  style={{width:"100%",border:"1px solid lightgrey",borderRadius:"10px",height:"100%"}}/>
         </div>
            <br/><br/>
            <div className={product.id % 2 === 0 ? "section2" : "sectionY"} > 
            <p style={{color:"indianred",textTransform:"capitalize",fontSize:"16px",fontWeight:"bold"}}>{product.title}</p>
                <p>{product.description} ...</p>
            <button className='btn' style={{backgroundColor:"indianred",opacity:"0.9",color:"white",marginTop:"5px"}}>Read More!</button>
            </div>
            </div>)}
           </div>
           </div>
           <br/>
           <div style={{backgroundColor:"white",width:"100%",backgroundSize:"cover",backgroundRepeat:"repeat-y"}}>
            
           <div style={{display:"flex",flexWrap:"wrap",height:"100%"}}>
                       <div style={{width:"50%",padding:"20px"}}>
                       <div  style={{width:"100%",borderRadius:"10px",border:"2px solid indianred",padding:"30px",backgroundColor:"white",cursor:"pointer"}}>
                           <center>
                           <h4>Check Connections <span className='fa fa-link'></span></h4>
                           <small style={{fotWeight:"bold"}}>  Check Pending Messages and Open Connections.</small><br/>
                           <small></small>
                           </center>
                       </div>
                       </div>
                       <div style={{width:"50%",padding:"20px"}}>
                       <div  style={{color:"white",width:"100%",borderRadius:"10px",padding:"30px",backgroundColor:"#FF6347",cursor:"pointer"}}>
                       <center>
                           <h4>Update Profile <span className='fa fa-edit'></span> </h4>
                           <small style={{fotWeight:"bold"}}> Edit Your Profile to help people find you and connect .</small>
                           <small></small>
                           </center>
                       </div>
                       </div>
                       <div style={{width:"50%",padding:"20px"}}>
                       <div  style={{color:"white",margin:"10px",height:"100%",width:"100%",borderRadius:"10px",padding:"30px",backgroundColor:"#FF6347",cursor:"pointer"}}>
                       <center>
                           <h4>Join Room <span className='fa fa-home'></span> + </h4>
                           <small tyle={{fotWeight:"bold"}}>  Select a room from the list of created rooms that fits your interest .</small><br/>
                           
                           <small></small>
                           </center>
                       </div>
                       </div>
              <div style={{width:"50%",padding:"20px"}}>
                <div style={{justifyContent:"center",border:"2px solid indianred",borderRadius:"10px",padding:"10px"}}>
                 <div >
                   <center >
                   <p style={{fontWeight:"bold",fontSize:"15px"}}> Contact Us <hr/></p>
                   <div style={{color:"black"}}>
                   <i><b>+234-81-693-194-76</b></i><br/>
                   <i><b>+234-81-693-194-76</b></i><br/>
                   <i><b>No 56 muritala mohammed way, oyingbo Yaba Lagos State.</b></i><br/>
                   </div>
                   </center>
                 </div>
                </div>
              </div>
                       </div>



            </div>
            <br/>
            <div id="About" style={{backgroundColor:"white",position:"relative",color:"indianred",padding:"30px",height:"500px",width:"100%",backgroundSize:"cover",backgroundRepeat:"repeat-y"}}>
             <div style={{position:"absolute",top:"0px",height:"500px",overflow:"scroll",padding:"50px"}}>
            <center>
            <h2><span className='fa fa-info-circle'></span></h2>
            <hr/>
            <p>
            What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<h3>Why do we use it?</h3>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


<h3>Where does it come from?</h3>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
<br/>
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

<h3>Where can I get some?</h3>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            </center>
            </div>
            </div>
            <br/><br/>
            <br/><br/>
            <div style={{backgroundColor:"darkblue",position:"relative",padding:"40px",width:"100%"}}>
              <div className='footercontactdiv'>
                <center style={{color:"white",padding:"50px 30px"}}>
                <p><p style={{fontWeight:"bold"}}>NEED HELP ?</p> CALL US 24/7</p>
                <p style={{fontSize:"20px"}}>08169319476</p>
                </center>
                </div>
            <div style={{display:"flex",height:"150px"}}>
              <div style={{width:"50%"}}></div>
              <div style={{width:"40%",color:"white"}}>
              <p>Sign up to Newsletter to get special offers <span className='fa fa-book'></span></p>
              <input type="text" className='form-control' placeholder='&#xf0e0; Please Enter Your Email Address' style={{fontFamily:"FontAwesome"}}/>
              <button className='btn' style={{backgroundColor:"indianred",opacity:"0.9",color:"white",marginTop:"5px"}}>SIGN UP!</button>
              </div>
            </div>
            <br/>
            <br/>
            <div className='row' style={{marginTop:"30px"}}>
              <div className='col-xs-6 col-sm-6 col-md-3' style={{color:"lightgrey"}}>
             <p style={{color:"white"}}>Our Policies</p>
               <p>Home</p>
               <p>Blogs</p>
               <p>Projects</p>
               <p>Advice</p>
               <p>Web Design</p>
            </div>
            <div className='col-xs-6 col-sm-6 col-md-3' style={{color:"lightgrey"}}>
             <p style={{color:"white"}}>About HORMEL</p>
               <p>About Us</p>
               <p>Reviews</p>
               <p>Meet Our Team</p>
               <p>Sell Your Product</p>
               <p>Rate Us</p>
               <p>PLace Order Offline</p>
               <p>FAQ</p>
               <p>Blogs</p>
               <br/>
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3' style={{color:"lightgrey"}}>
             <center>
             <p style={{color:"white"}}>Our Locations <span className='fa fa-globe fa-2x'></span></p>
               <p>Lagos Island, Lagos State</p>
               <p>Lagos Mainland, Lagos State</p>
               <p>Shagamu, Ogun State</p>
               <p>Rumuomasi, Rivers State</p>
               <p>Ore, Oyo State</p>
               <p>Minna, Niger State</p>
               <p>Abakaliki, Ebonyi State</p>
               <p>Oba, Anambra State</p>
               <p>Up Iweka, Anambra State</p>
               </center>  
            </div>
            <div className='col-xs-12 col-sm-12 col-md-3' style={{color:"white"}}>
            <div style={{marginTop:"20px"}}>
                <center>
                <p>Follow Us &#128077;</p>
                <small>
                  <span className='fa fa-facebook-square fa-2x' style={{color:"blue",padding:"10px"}}></span>
                </small>
                <small>
                  <span className='fa fa-instagram fa-2x' style={{color:"orange",padding:"10px"}}></span>
                </small>
                <small>
                  <span className='fa fa-twitter fa-2x' style={{color:"lightblue",padding:"10px"}}></span>
                </small>
                <small>
                  <span className='fa fa-linkedin fa-2x' style={{color:"blue",padding:"10px"}}></span>
                </small>
                <br/>
                <br/>
                <button className='btn' style={{backgroundColor:"indianred",opacity:"0.9",color:"white",marginTop:"5px"}}>CONTACT US! &#128070;</button>
                </center>
                </div>
            </div>
            </div>
            </div>
        </div>
     );
}

export default Landing;