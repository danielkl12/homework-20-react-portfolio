import React, {Component} from 'react';
export default class Resume extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="two columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="six columns main-col">
                        {
                            portfolioData.education && portfolioData.education.map((item) =>{
                                return(
                                    <div className="row item">
                                        <div className="six columns">
                                            <h4>{item.university}</h4>
                                            <p className="info">
                                            {item.degree}
                                            <em className="date">{item.graduationDate}</em></p>
                                            
                                        </div>
                                    </div>

                                )
                            }
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}