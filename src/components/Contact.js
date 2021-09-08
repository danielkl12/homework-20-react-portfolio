import React, {Component} from 'react';
export default class Contact extends Component {
    render() {
        let portfolioData = this.props.portfolioData;
        return (
            <section id="contact">
                <div className="row sections-head">
                    <div className="ten columns">
                        <p className="header">
                            Please contact for work
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="six columns">
                        <div className="widget">
                            <h3>LinkedIn:{portfolioData.linkedinID}</h3>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}