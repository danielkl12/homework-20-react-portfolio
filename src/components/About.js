import React, { Component } from 'react';
export default class About extends Component {
    
    //renders about page with profile picture, about me sections, etc
    // Navbar moved to this file----
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            
            <section id="about">

<React.Fragment>
                <header id="home">
                <nav class="dropdown">
    <button class="dropbtn">Navigation</button>
    <div class="dropdown-content">

        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        
        
    </div>
</nav>

                    {/* <div classname="row banner">
                        <div className="banner-text">
                            
                                {/* <h4>I am a {portfolioData.roleDescription}</h4> */}

                                {/* <ul className="links">
                                    {
                                        portfolioData.links && portfolioData.links.map(item => {
                                        return(
                                            // <li key={item.name}>
                                            //     <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            // </li>
                                        )
                                        }
                                        )
                                    } */}

                                {/* </ul>
                        </div>
                    </div> */}

                    <p className="scrolldown">
                        <a></a>
                    </p> 
                    

                </header>
            </React.Fragment>
                
                <h1 className="responsive-headline">{portfolioData.name}</h1>
               
                <div className="row">
                    <div className="columns">
                    
                        {/* <div style={{ backgroundImage: "public/images/IMG_2018.jpg"}}></div> */}
                        <img  className="picture" src="images/1516938362579.jpeg" alt=""/>
                    </div>


                    <div className="six columns main-col">
                        <h2>About Me</h2>

                        <p>
                            {
                                portfolioData.aboutme
                            }

                        </p>

                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{portfolioData.name}</span>
                                    <br></br>
                                    <span>{portfolioData.address}</span>
                                    <br></br>
                                    <span>{portfolioData.website}</span>
                                    <br></br>
                                    <span>{portfolioData.linkedinID}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}