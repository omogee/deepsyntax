import logo from './logo.svg';
//import './styles.css';
//import "./mains.css"
import React, { useState, useEffect, useRef } from 'react';
// import "./assets/vendor/jquery/jquery-3.6.0.min.js"

//import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js"

      let callback = entries =>{
        entries.forEach(entry=>{
            let intersecting = entry.isIntersecting
            if(intersecting && entry.intersectionRatio <= 0.1){
                entry.target.classList.remove("intersecting")   
                console.log(entry.intersectionRatio)        
            }
            else if(intersecting && entry.intersectionRatio >= 0.7){
                entry.target.classList.add("intersecting")   
                console.log(entry.intersectionRatio)        
            }
        })
    }
    let anothercallback = entries =>{
        entries.forEach(entry=>{
            let intersecting = entry.isIntersecting
            if(intersecting){
                entry.target.classList.remove("intersecting")            
            }
        })
    }
    let getThreshold =()=>{
        let threshold =[]
        let max = 20;
        for(let i=1; i<max; i++){
            let realno =i/max
         threshold.push(realno)
        }
        return threshold;
    }

function App() {
    const divref = useRef()
    const divref2 = useRef()
    const divref3 = useRef()
    const divref4 = useRef()
    const divref5 = useRef()
    const divref6 = useRef()
  
    const options ={
        root:null,
        rootMargin:"0px",
        threshold:getThreshold()
    }
    const anotheroptions ={
        root:null,
        rootMargin:"0px",
        threshold:0.9
    }
useEffect(()=>{
    if(divref.current){
        let observer = new IntersectionObserver(callback,options)
        //  let anotherobserver = new IntersectionObserver(anothercallback,anotheroptions)
           observer.observe(divref.current)
           observer.observe(divref2.current)
           observer.observe(divref3.current)
           observer.observe(divref4.current)
           observer.observe(divref5.current)
           observer.observe(divref6.current)
         
         // anotherobserver.observe(document.getElementById("test"))
         
    }  
})
    
  return (
    <div>
    
      <header className="header" >
        <nav className="navbar navbar-expand-md sticky-top" >
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src={require("./assets/images/logo.png")} alt="Logo" className="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
                <div className="collapse navbar-collapse " id="primaryNav" >
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarHomeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Home
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarHomeDropdown">
                                <li><a className="dropdown-item" href="index.html">Home</a></li>
                                <li><a className="dropdown-item" href="index-two.html">Home Two</a></li>
                                <li><a className="dropdown-item" href="index-three.html">Home Three</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarPropertyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Properties
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarPropertyDropdown">
                                <li><a className="dropdown-item" href="properties.html">Properties</a></li>
                                <li><a className="dropdown-item" href="property-details.html">Property Details</a></li>
                                <li><a className="dropdown-item" href="property-alert.html">Property Alert</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarLoanDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Loan
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarLoanDropdown">
                                <li><a className="dropdown-item" href="business-loan.html">Business Loan</a></li>
                                <li><a className="dropdown-item" href="business-loan-details.html">Business Loan Details</a>
                                </li>
                                <li><a className="dropdown-item" href="loan-application.html">Loan Application</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="list-your-property.html">List your property</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                                <li><a className="dropdown-item" href="affiliate-program.html">Affiliate Program</a></li>
                                <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                                <li><a className="dropdown-item" href="blog-two.html">Blog Two</a></li>
                                <li><a className="dropdown-item" href="blog-single.html">Blog Single</a></li>
                                <li><a className="dropdown-item" href="career.html">Career</a></li>
                                <li><a className="dropdown-item" href="career-details.html">Career Details</a></li>
                                <li><a className="dropdown-item" href="how-it-works.html">How It Works</a></li>
                                <li><a className="dropdown-item" href="key-risks.html">Key Risks</a></li>
                                <li><a className="dropdown-item" href="loyality-program.html">Loyality Program</a></li>
                                <li><a className="dropdown-item" href="terms-conditions.html">Terms Conditions</a></li>
                                <li><a className="dropdown-item" href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a className="dropdown-item" href="cookie-policy.html">Cookie Policy</a></li>
                                <li><a className="dropdown-item" href="support.html">Support</a></li>
                                <li><a className="dropdown-item" href="404.html">Error</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-us.html">Contact</a>
                        </li>
                        <li className="nav-item d-block d-sm-none">
                            <a href="login.html" className="nav-link">Log In</a>
                        </li>
                        <li className="nav-item d-block d-sm-none">
                            <a href="registration.html" className="button button--effect button--last">Join Now <i
                                    className="fa-solid fa-arrow-right-long"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
    <section className="hero pos__rel over__hi bg__img" data-background="./assets/images/hero/light-bg.png">
        <div className="container">
            <div className="hero__area">
                <div className="row">
                    <div className="col-lg-6 col-xxl-5">
                        <div className="hero__content">
                            <h5 className="neutral-top">A smarter, better way to invest</h5>
                            <h1>Real Estate Investment For <span>Everyone</span> </h1>
                            <p className="primary neutral-bottom">
                                Buy shares of rental properties, earn monthly income, and watch your money grow
                            </p>
                            <div className="hero__cta__group">
                                <a href="properties.html" className="button button--effect">Start Exploring</a>
                                <a href="business-loan.html" className="button button--secondary button--effect">Get
                                    Funding</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-6 offset-xxl-1">
                        <div className="hero__illustration d-none d-lg-block">
                            <img style={{marginTop:"200%"}} src={require("./assets/images/hero/hero-illustration.png")} alt="Hero Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 


      <div className="property__filter">
        <div className="container">
            <div className="property__filter__area">
                <div className="row d-flex align-items-center ">
                    <div className="col-xs-12 col-lg-6 ">
                        <div className="property__search__wrapper">
                            <form action="#" method="post">
                                <div className="input">
                                    <input type="search" name="property__search" id="propertySearch" placeholder="Search for properties" />
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <button type="submit" className="button button--effect">Search</button>
                                <br/>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-6">
                        <div className="property__select__wrapper" >
                            <select className="location__select" style={{padding:"13px"}}>
                                <option data-display="Location">Select Location</option>
                                <option value="angeles">Los Angeles</option>
                                <option value="francis">San Francisco, CA</option>
                                <option value="weldon">The Weldon</option>
                                <option value="diego">San Diego</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-6">
                        <div className="property__select__wrapper">
                            <select className="property__select" style={{padding:"13px"}}>
                                <option data-display="Property">Property Type</option>
                                <option value="commercial">Commercial</option>
                                <option value="residential">Residential</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section className="featured__properties section__space">
        <div className="container">
            <div className="featured__properties__area wow fadeInUp">
                <div className="title__with__cta">
                    <div className="row d-flex align-items-center ">
                        <div className="col-lg-8">
                            <h2>Featured Properties</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-start text-lg-end">
                                <a href="properties.html" className="button button--secondary button--effect">Browse All
                                    Properties</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property__list__wrapper test" ref={divref}>
                    <div className="row d-flex align-items-center  " >
                        <div className="col-lg-5">
                            <div className="property__item__image column__space--secondary">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/los.png")} alt="Los Angeles" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="property__item__content">
                                <div className="item__head">
                                    <div className="item__head__left">
                                        <h4>Los Angeles</h4>
                                        <p><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles</p>
                                    </div>
                                    <div className="item__head__right">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress__type progress__type--two">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="project__info">
                                        <p className="project__has"><span className="project__has__investors">119
                                                Investors</span> | <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 4,94,196</span> <span className="project__has__investors__percent">(54.73%)</span></p>
                                        <p className="project__goal">
                                            <i className="fa-solid fa-dollar-sign"></i> 1,00,000 Goal
                                        </p>
                                    </div>
                                </div>
                                <div className="item__info">
                                    <div className="item__info__single">
                                        <p>Annual Return</p>
                                        <h6>7.5% + 3%</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Maximum Term</p>
                                        <h6>26 Months</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Property Type</p>
                                        <h6>Commercial</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Distribution</p>
                                        <h6>Monthly</h6>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <div className="item__security">
                                        <div className="icon__box">
                                            <img src="assets/images/home.png" alt="Security" />
                                        </div>
                                        <div className="item__security__content">
                                            <p className="secondary">Security</p>
                                            <h6>1st-Rank Mortgage</h6>
                                        </div>
                                    </div>
                                    <div className="item__cta__group">
                                        <a href="registration.html" className="button button--effect">Invest Now</a>
                                        <a href="property-details.html" className="button button--secondary button--effect">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property__list__wrapper">
                    <div className="row d-flex align-items-center test" ref={divref2}>
                        <div className="col-lg-5">
                            <div className="property__item__image column__space--secondary">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/san.png")} alt="San Francisco" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="property__item__content">
                                <div className="item__head">
                                    <div className="item__head__left">
                                        <h4>San Francisco, CA</h4>
                                        <p><i className="fa-solid fa-location-dot"></i> 3335 21 St, San Francisco</p>
                                    </div>
                                    <div className="item__head__right">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress__type progress__type--two">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="project__info">
                                        <p className="project__has"><span className="project__has__investors">179
                                                Investors</span> | <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 1,64,296</span> <span className="project__has__investors__percent">(64.73%)</span></p>
                                        <p className="project__goal">
                                            <i className="fa-solid fa-dollar-sign"></i> 5,00,000 Goal
                                        </p>
                                    </div>
                                </div>
                                <div className="item__info">
                                    <div className="item__info__single">
                                        <p>Annual Return</p>
                                        <h6>3.5% + 6%</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Maximum Term</p>
                                        <h6>48 Months</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Property Type</p>
                                        <h6>Commercial</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Distribution</p>
                                        <h6>Monthly</h6>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <div className="item__security">
                                        <div className="icon__box">
                                            <img src="assets/images/home.png" alt="Security" />
                                        </div>
                                        <div className="item__security__content">
                                            <p className="secondary">Security</p>
                                            <h6>1st-Rank Mortgage</h6>
                                        </div>
                                    </div>
                                    <div className="item__cta__group">
                                        <a href="registration.html" className="button button--effect">Invest Now</a>
                                        <a href="property-details.html" className="button button--secondary button--effect">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="property__list__wrapper">
                    <div className="row d-flex align-items-center test" ref={divref3} >
                        <div className="col-lg-5">
                            <div className="property__item__image column__space--secondary">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/weldon.png")} alt="The Weldon" />
                                    </a>
                                </div>
                            </div> 
                        </div>
                        <div className="col-lg-7">
                            <div className="property__item__content">
                                <div className="item__head">
                                    <div className="item__head__left">
                                        <h4>The Weldon</h4>
                                        <p><i className="fa-solid fa-location-dot"></i> Gastonia, NC</p>
                                    </div>
                                    <div className="item__head__right">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress__type progress__type--two">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="project__info">
                                        <p className="project__has"><span className="project__has__investors">579
                                                Investors</span> | <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 4,64,196</span> <span className="project__has__investors__percent">(74.33%)</span></p>
                                        <p className="project__goal">
                                            <i className="fa-solid fa-dollar-sign"></i> 2,00,000 Goal
                                        </p>
                                    </div>
                                </div>
                                <div className="item__info">
                                    <div className="item__info__single">
                                        <p>Annual Return</p>
                                        <h6>2.5% + 2%</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Maximum Term</p>
                                        <h6>36 Months</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Property Type</p>
                                        <h6>Commercial</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Distribution</p>
                                        <h6>Monthly</h6>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <div className="item__security">
                                        <div className="icon__box">
                                            <img src="assets/images/home.png" alt="Security" />
                                        </div>
                                        <div className="item__security__content">
                                            <p className="secondary">Security</p>
                                            <h6>1st-Rank Mortgage</h6>
                                        </div>
                                    </div>
                                    <div className="item__cta__group">
                                        <a href="registration.html" className="button button--effect">Invest Now</a>
                                        <a href="property-details.html" className="button button--secondary button--effect">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property__list__wrapper test" ref={divref4}>
                    <div className="row d-flex align-items-center ">
                        <div className="col-lg-5">
                            <div className="property__item__image column__space--secondary">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/lily.png")} alt="The Lily" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="property__item__content">
                                <div className="item__head">
                                    <div className="item__head__left">
                                        <h4>The Lily</h4>
                                        <p><i className="fa-solid fa-location-dot"></i> Colorado Springs, CO</p>
                                    </div>
                                    <div className="item__head__right">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress__type progress__type--two">
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="project__info">
                                        <p className="project__has"><span className="project__has__investors">359
                                                Investors</span> | <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 1,14,196</span> <span className="project__has__investors__percent">(64.73%)</span></p>
                                        <p className="project__goal">
                                            <i className="fa-solid fa-dollar-sign"></i> 5,00,000 Goal
                                        </p>
                                    </div>
                                </div>
                                <div className="item__info">
                                    <div className="item__info__single">
                                        <p>Annual Return</p>
                                        <h6>7.5% + 3%</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Maximum Term</p>
                                        <h6>36 Months</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Property Type</p>
                                        <h6>Commercial</h6>
                                    </div>
                                    <div className="item__info__single">
                                        <p>Distribution</p>
                                        <h6>Monthly</h6>
                                    </div>
                                </div>
                                <div className="item__footer">
                                    <div className="item__security">
                                        <div className="icon__box">
                                            <img src="assets/images/home.png" alt="Security" />
                                        </div>
                                        <div className="item__security__content">
                                            <p className="secondary">Security</p>
                                            <h6>1st-Rank Mortgage</h6>
                                        </div>
                                    </div>
                                    <div className="item__cta__group">
                                        <a href="registration.html" className="button button--effect">Invest Now</a>
                                        <a href="property-details.html" className="button button--secondary button--effect">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="properties__grid section__space">
        <div className="container">
            <div className="properties__grid__area wow fadeInUp">
                <div className="title__with__cta">
                    <div className="row d-flex align-items-center ">
                        <div className="col-lg-8">
                            <h2>All Properties</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="text-start text-lg-end">
                                <a href="properties.html" className="button button--secondary button--effect">Browse All
                                    Properties</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property__grid__wrapper">
                    <div className="row test" ref={divref5}>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-one.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>Los Angeles</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 8706 Herrick Ave, Los Angeles
                                    </p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">17
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 7,94,196</span> <span className="project__has__investors__percent">(14.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>2.5% + 4%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-two.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>San Francisco, CA</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 3335 21 St, San Francisco
                                    </p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">179
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 2,94,196</span> <span className="project__has__investors__percent">(54.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>5.5% + 4%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-three.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>San Diego</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 356 La Jolla, San Diego
                                    </p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">199
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 8,94,196</span> <span className="project__has__investors__percent">(64.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>3.5% + 2%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="property__grid__wrapper">
                    <div className="row test" ref={divref6}>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-four.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>San Diego</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> 90071, Grand Avenue, San Diego</p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">59
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 8,94,196</span> <span className="project__has__investors__percent">(54.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>7.5% + 9%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-five.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>The Lily</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> Colorado Springs, CO
                                    </p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">559
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 9,94,196</span> <span className="project__has__investors__percent">(84.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>7.5% + 5%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <div className="property__grid__single">
                                <div className="img__effect">
                                    <a href="property-details.html">
                                        <img src={require("./assets/images/property/grid-six.jpg")} alt="Property" />
                                    </a>
                                </div>
                                <div className="property__grid__single__inner">
                                    <h4>The Weldon</h4>
                                    <p className="sub__info"><i className="fa-solid fa-location-dot"></i> Gastonia, NC</p>
                                    <div className="progress__type">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <p className="project__has"><span className="project__has__investors">139
                                                Investors</span> |
                                            <span className="project__has__investors__amount"><i
                                                    className="fa-solid fa-dollar-sign"></i> 1,14,196</span> <span className="project__has__investors__percent">(44.73%)</span>
                                        </p>
                                    </div>
                                    <div className="item__info">
                                        <div className="item__info__single">
                                            <p>Annual Return</p>
                                            <h6>5.5% + 2%</h6>
                                        </div>
                                        <div className="item__info__single">
                                            <p>Property Type</p>
                                            <h6>Commercial</h6>
                                        </div>
                                    </div>
                                    <div className="invest__cta__wrapper">
                                        <div className="countdown__wrapper">
                                            <p className="secondary"><i className="fa-solid fa-clock"></i> Left to invest</p>
                                            <div className="countdown">
                                                <h5>
                                                    <span className="days">00</span><span className="ref">d</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="hours"> 00</span><span className="ref">h</span>
                                                    <span className="seperator">:</span>
                                                </h5>
                                                <h5>
                                                    <span className="minutes">00</span><span className="ref">m</span>
                                                    <span className="seperator"></span>
                                                </h5>
                                            </div>
                                        </div>
                                        <div className="invest__cta">
                                            <a href="property-details.html" className="button button--effect">
                                                Invest Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="profit section__space">
        <div className="container">
            <div className="profit__area wow fadeInUp">
                <div className="section__header">
                    <h5 className="neutral-top">Built to help smart investors invest smarter</h5>
                    <h2>We handle the heavy lifting so you can sit back, relax, and profit.</h2>
                    <p className="neutral-bottom">We make institutional quality real estate accessible to investors, in a simple and transparent way.</p>
                </div>
                <div className="profit__item__wrapper">
                    <div className="row test" ref={divref6}>
                        <div className="col-md-6">
                            <div className="profit__single__item alt shadow__effect">
                                <div className="img__box">
                                    <img src={require("./assets/images/overview/passive-income.png")} alt="Passive Income" />
                                </div>
                                <div className="item__content">
                                    <h4>Passive Income</h4>
                                    <p>Earn rental income and receive deposits quarterly</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profit__single__item shadow__effect">
                                <div className="img__box">
                                    <img src={require("./assets/images/overview/secure.png")} alt="secure" />
                                </div>
                                <div className="item__content">
                                    <h4>Secure & Cost-efficient</h4>
                                    <p>Digital security is legally compliant and tangible for qualified investors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profit__item__wrapper">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="profit__single__item alt shadow__effect">
                                <div className="img__box">
                                    <img src={require("./assets/images/overview/transparency.png")} alt="Transparency" />
                                </div>
                                <div className="item__content">
                                    <h4>Transparency</h4>
                                    <p>Easily consult the full documentation for each property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profit__single__item shadow__effect">
                                <div className="img__box">
                                    <img src={require("./assets/images/overview/support.png")} alt="Support" />
                                </div>
                                <div className="item__content">
                                    <h4>Support</h4>
                                    <p>Earn rental income and receive deposits quarterly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="start section__space__top bg__img" data-background={require("./assets/images/step/start-bg.png")}>
        <div className="container">
            <div className="start__area wow fadeInUp">
                <div className="section__header">
                    <h5 className="neutral-top">We're changing the way you invest.</h5>
                    <h2>It's Easy to Get Started.</h2>
                    <p className="neutral-bottom">Signing up with Revest is simple and only takes a few minutes. We can automatically connect with more than 3,500 banks, so no complicated paperwork is required to fund your account.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-4">
                        <div className="start__single__item column__space--secondary">
                            <div className="img__box">
                                <img src={require("./assets/images/step/browse.png")} alt="Browse Properties" />
                                <div className="step__count">
                                    <h4>01</h4>
                                </div>
                            </div>
                            <h4>Browse Properties</h4>
                            <p className="neutral-bottom">Select a property that fits your goal from our huge variety of hand-picked properties.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="start__single__item column__space--secondary">
                            <div className="img__box arrow__container">
                                <img src={require("./assets/images/step/invest.png")} alt="View Details & Invest" />
                                <div className="step__count">
                                    <h4>02</h4>
                                </div>
                            </div>
                            <h4>View Details & Invest</h4>
                            <p className="neutral-bottom">View detailed metrics for that property like Rental Yield, etc. and invest like institutions.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="start__single__item">
                            <div className="img__box">
                                <img src={require("./assets/images/step/earn.png")} alt="Earn and Track" />
                                <div className="step__count">
                                    <h4>03</h4>
                                </div>
                            </div>
                            <h4>Earn and Track</h4>
                            <p className="neutral-bottom">You have full visibility into the performance of your investment. Track your total current.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <div className="video">
        <div className="container">
            <div className="video__area">
                <img src={require("./assets/images/video-illustration.png")} alt="Video Illustration" />
                <div className="video__btn">
                    <a className="video__popup" href="https://www.youtube.com/watch?v=LCihLrSehCo" target="_blank" title="YouTube video player">
                        <i className="fa-solid fa-play"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section className="numbers section__space bg__img" data-background="./assets/images/globe.png">
        <div className="container">
            <div className="numbers__area wow fadeInUp">
                <div className="row d-flex align-items-center ">
                    <div className="col-lg-6">
                        <div className="content column__space">
                            <h5 className="neutral-top">With Revest anyone can invest!</h5>
                            <h2>Numbers Said More Than Words</h2>
                            <p>our low minimums give you the flexibility to invest the right amount, at the right time, to meet your goals.</p>
                            <a href="properties.html" className="button button--effect">Start Exploring</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row d-flex align-items-start align-items-lg-center">
                            <div className="col-sm-6">
                                <div className="numbers__single shadow__effect">
                                    <img src={require("./assets/images/platforms.png")} alt="platform" />
                                    <h3><span className="counter">3000</span>+</h3>
                                    <p className="neutral-bottom">Investors Using Platform</p>
                                </div>
                                <div className="numbers__single shadow__effect__secondary">
                                    <img src={require("./assets/images/returns.png")} alt="Returns" />
                                    <h3><span className="counter">18</span>%</h3>
                                    <p className="neutral-bottom">Returns upto</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="numbers__single alt shadow__effect__secondary">
                                    <img src={require("./assets/images/experience.png")} alt="Experience" />
                                    <h3 className="counter">45</h3>
                                    <p className="neutral-bottom">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <section className="testimonial section__space pos__rel over__hi bg__img" data-background="./assets/images/testimonial/dot-map.png">
        <div className="container">
            <div className="testimonial__area">
                <div className="section__header">
                    <h5 className="neutral-top">Investors Trust Us</h5>
                    <h2>Trusted by Over 40,000 Worldwide Customer since 2022</h2>
                    <p className="neutral-bottom">We divide each property into shares so anyone can get started. Kindly check out our Investors say about revest.</p>
                </div>
                <div className="testimonial__item__wrapper">
                    <div className="testimonial__support">
                        <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                            <div className="testimonial__author__ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!</p>
                            <div className="testimonial__author">
                                <div className="testimonial__author__info">
                                    <div className="avatar__wrapper">
                                        <img src={require("./assets/images/testimonial/avatar.png")} alt="Allan Murphy" />
                                    </div>
                                    <div>
                                        <h5>Allan Murphy</h5>
                                        <p className="neutral-bottom">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__support">
                        <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                            <div className="testimonial__author__ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!</p>
                            <div className="testimonial__author">
                                <div className="testimonial__author__info">
                                    <div className="avatar__wrapper">
                                        <img src={require("./assets/images/testimonial/avatar.png")} alt="Allan Murphy" />
                                    </div>
                                    <div>
                                        <h5>Allan Murphy</h5>
                                        <p className="neutral-bottom">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__support">
                        <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                            <div className="testimonial__author__ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!</p>
                            <div className="testimonial__author">
                                <div className="testimonial__author__info">
                                    <div className="avatar__wrapper">
                                        <img src={require("./assets/images/testimonial/avatar.png")} alt="Allan Murphy" />
                                    </div>
                                    <div>
                                        <h5>Allan Murphy</h5>
                                        <p className="neutral-bottom">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__support">
                        <div className="testimonial__item bg__img" data-background={require("./assets/images/testimonial/quote.png")}>
                            <div className="testimonial__author__ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!</p>
                            <div className="testimonial__author">
                                <div className="testimonial__author__info">
                                    <div className="avatar__wrapper">
                                        <img src={require("./assets/images/testimonial/avatar.png")} alt="Allan Murphy" />
                                    </div>
                                    <div>
                                        <h5>Allan Murphy</h5>
                                        <p className="neutral-bottom">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__support">
                        <div className="testimonial__item bg__img" data-background="./assets/images/testimonial/quote.png">
                            <div className="testimonial__author__ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <p className="tertiary">Very trustworthy and clearly platform to invest in real state. Safe investment with monthly payouts. Really recommended!</p>
                            <div className="testimonial__author">
                                <div className="testimonial__author__info">
                                    <div className="avatar__wrapper">
                                        <img src={require("./assets/images/testimonial/avatar.png")} alt="Allan Murphy" />
                                    </div>
                                    <div>
                                        <h5>Allan Murphy</h5>
                                        <p className="neutral-bottom">United States</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="market section__space over__hi">
        <div className="container">
            <div className="market__area">
                <div className="row d-flex align-items-center ">
                    <div className="col-lg-6 col-xl-5">
                        <div className="market__thumb thumb__rtl column__space">
                            <img src={require("./assets/images/market-illustration.png")} alt="Explore the Market" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 offset-xl-1">
                        <div className="content">
                            <h5 className="neutral-top">Real exposure to the real estate market</h5>
                            <h2>You Invest. Revest Does the Rest</h2>
                            <p>Transparent Real Estate Investing Through Revest.Join us and experience a smarter,better way to invest in real estate</p>
                            <a href="properties.html" className="button button--effect">Start Exploring</a>
                            <img src={require("./assets/images/arrow.png")} alt="Go to" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer className="footer pos__rel over__hi">
        <div className="container">
            <div className="footer__newsletter">
                <div className="row d-flex align-items-center ">
                    <div className="col-lg-6">
                        <div className="footer__newsletter__content column__space">
                            <h3>Subscribe for updates</h3>
                            <p>Stay on top of the latest blog posts, news and announcements</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-5 offset-xxl-1">
                        <div className="footer__newsletter__form">
                            <form action="#" method="post">
                                <div className="footer__newsletter__input__group">
                                    <div className="input">
                                        <input type="email" name="news__letter" id="newsLetterMail" placeholder="Enter Your Email" required="required" />
                                    </div>
                                    <button type="submit" className="button button--effect">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__area section__space">
                <div className="row">
                    <div className="col-md-12 col-lg-4 col-xl-4">
                        <div className="footer__intro">
                            <a href="index.html">
                                <img src="assets/images/logo-light.png" alt="Revest" className="logo" />
                            </a>
                            <p>Revest is a platform offering anyone the ability to invest and potentially earn money from property at the click of a button</p>
                            <div className="social">
                                <a href="javascript:void(0)">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="javascript:void(0)">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                        <div className="footer__links footer__links--alt">
                            <h5>Company</h5>
                            <ul>
                                <li>
                                    <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                    <a href="career.html">Careers</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="contact-us.html">Contact Us</a>
                                </li>
                                <li className="neutral-bottom">
                                    <a href="affiliate-program.html">Affiliate</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                        <div className="footer__links footer__links--alt">
                            <h5>Invest</h5>
                            <ul>
                                <li>
                                    <a href="properties.html">Browse Properties</a>
                                </li>
                                <li>
                                    <a href="how-it-works.html">How it works</a>
                                </li>
                                <li>
                                    <a href="loan-application.html">Loan Application </a>
                                </li>
                                <li>
                                    <a href="property-alert.html">Property Alerts</a>
                                </li>
                                <li className="neutral-bottom">
                                    <a href="support.html">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                        <div className="footer__links footer__links--alt--two">
                            <h5>Insights</h5>
                            <ul>
                                <li>
                                    <a href="support.html">Help Center</a>
                                </li>
                                <li>
                                    <a href="list-your-property.html">List Your Property</a>
                                </li>
                                <li className="neutral-bottom">
                                    <a href="loyality-program.html">Loyality program </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
                        <div className="footer__links">
                            <h5>Legal</h5>
                            <ul>
                                <li>
                                    <a href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="terms-conditions.html">Term & Conditions</a>
                                </li>
                                <li>
                                    <a href="cookie-policy.html">Cookie Policy</a>
                                </li>
                                <li className="neutral-bottom">
                                    <a href="key-risks.html">Key Risks</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__credit">
                <div className="row d-flex align-items-center ">
                    <div className="col-sm-9 order-1 order-sm-0">
                        <div className="footer__copyright">
                            <p>Copyright &copy; Revest | Designed by <a href="https://themeforest.net/user/pixelaxis">Pixelaxis</a></p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="footer__language">
                            <select className="language-select">
                                <option value="english">En</option>
                                <option value="australia">Aus</option>
                                <option value="brazil">Bra</option>
                                <option value="argentina">Arg</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__animation">
            <img src="assets/images/footer/footer__left__circle.png" alt="Circle" className="left__circle" />
            <img src="assets/images/footer/footer__right__circle.png" alt="Circle" className="right__circle" />
            <img src="assets/images/footer/footer__home___illustration.png" alt="Home" className="home__illustration" />
        </div>
    </footer>
     
      </div>
  );
}

export default App;
