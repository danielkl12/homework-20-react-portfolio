import React, {Component} from 'react';
//import { Link, animateScroll as scroll } from react-scroll;
//let Element = Scroll.Element;
export default class Navbar extends Component {
    
   //renders navigation bar for all other files in components folder 
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <a className="btn" href="#nav-wrap" title="Navigation">Navigation</a>
                        <a classname="btn" href="#" title="Hide">Hide</a>
                        <ul id="nav" className="nav">
                            <li className="current"><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#navbar">Navbar</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#resume">Resume</a></li>



                        

                        </ul>
                    </nav>

                    <div classname="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">I am {portfolioData.name}</h1>
                                <h4>I am a {portfolioData.roleDescription}</h4>

                                <ul className="links">
                                    {
                                        portfolioData.links && portfolioData.links.map(item => {
                                        return(
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                            </li>
                                        )
                                        }
                                        )
                                    }

                                </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a></a>
                    </p>
                    

                </header>
            </React.Fragment>
        )
    }
}