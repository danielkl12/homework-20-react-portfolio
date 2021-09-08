import React, { Component } from 'react';
export default class About extends Component {
    
    //renders about page with profile picture, about me sections, etc
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="about">
                <div className="row">
                    <div className="columns">

                        <img className="picture" src="images/picture.jpeg" alt=""/>
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
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}