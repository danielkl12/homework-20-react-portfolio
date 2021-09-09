import React, {Component} from 'react';

import "../App.css"
export default class Projects extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return(
            <section id="projects">
                <div className="row">
                    <div className="four columns collapsed">
                        <h1>Projects</h1>
                        <div id="portfolio-wrapper" className="grid">
                            {
                                portfolioData.projects && portfolioData.projects.map((item) => {
                                    return(
                                        <div className="columns-portfolio-item">
                                            <div className="wrap">
                                            <img src={`${item.imgurl}`} className="item-img" alt="projects"/>
                                            <div className="overlay">
                                                <div className="portfolio-item">
                                                    <article>{item.link}</article>
                                                    
                                                    <h4>{item.name}</h4>
                                                    <p>{item.description}</p>

                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                            
                                                
                                                
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </section>
        )
    }
}