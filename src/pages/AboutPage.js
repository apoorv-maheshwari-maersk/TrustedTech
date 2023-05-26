import React, { Component } from 'react';

import './AboutPage.css';

class AboutPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="about-container">
                    <h3 className="about-title">About Trusted Tech</h3>
                    <div className="about-content">
                        With a population of greater than 1.3 billion, India is the second most populous nation in the
                        world. And with such a big population, dividing and sustainable use of resources is necessary.
                        One of the most important resources for any country is Medicines. Being a developing nation, India needs a 
                        more robust, transparent, faster, user-friendly way to handle the distribution of these resources which will 
                        reduce effective transaction costs and also corruption.
                        Over the few decades, lot of research work on the issues in supply chain management has
                        been carried out in manufacturing and service sectors but little attention given to medicine
                        sector and the flip side medicine sector contributing major part of human livelihood in the
                        country like India.
                        Using Blockchain to handle the supply chain of these pharmaceutical items hits all of these
                        checkboxes.
                        Blockchain will result in the supply chain being more robust, transparent, and cost-effective.
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutPage;