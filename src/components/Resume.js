import React, {Component} from 'react';
export default class Resume extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="resume">
                <div className="row-education">
                    <div className="two columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="six columns main-col">
                        {
                            portfolioData.education && portfolioData.education.map((item) =>{
                                return(
                                    <div className="row-item">
                                        <div className="six columns">
                                            <h4>{item.university}</h4>
                                            <p className="info">
                                            {item.degree}
                                            <br></br>
                                            <br></br>
                                            <em className="date">{item.graduationDate}</em></p>
                                            
                                        </div>
                                    </div>

                                )
                            }
                            )}
                            
                    </div>
                </div>

                <div className="row-work">
                    <div className="two columns header-col">
                        <h1><span>Work Experience</span></h1>
                    </div>
                    <div className="six columns main-col">
                        {
                            portfolioData.work && portfolioData.work.map((item) =>{
                                return(
                                    <div className="row-item">
                                        <div className="six columns">
                                            <h4>{item.company}</h4>
                                            <p className="info">
                                            {item.role}
                                            <br></br>
                                            <br></br>
                                            <em className="date">{item.dateOfLeave}</em></p>
                                            
                                        </div>
                                    </div>

                                )
                            }
                            )}
                            
                    </div>
                </div>
                <div className="row-skills">
                    <div className="two columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="six columns main-col">
                        {
                            portfolioData.skills && portfolioData.skills.map((item) =>{
                                return(
                                    <div className="row-item">
                                        <div className="six columns">
                                            {/* <h4>{item.skillName}</h4> */}
                                            <p className="info">
                                            {item.role}
                                            {/* <br></br>
                                            <br></br> */}
                                            <em className="date">{item.skillName}</em></p>
                                            
                                        </div>
                                    </div>

                                )
                            }
                            )}
                            
                    </div>
                </div>
                

    <div id="contact">
    <div style={{backgroundColor:"cornsilk"}} className="row">
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
                    <h1>Contact</h1>
                <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input id="emailform" type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="textbox" className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>


            </section>

            
        )
    }
}