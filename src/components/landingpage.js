import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/profile.JPG'
import resume from '../documents/Coreys_CV.pdf'

class Landing extends Component {
    render() {
        return(
            <div className="landing-page" style={{width: '100%', margin: 'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img className='profile-img' alt='avatar' src={profile}/>
                        <div className="banner-text">
                            <h1>Software Engineer and Coffee Addict</h1> 
                            <hr/>
                            <p>HTML/CSS | JavaScript | Jquery | React | Python | SQL | Test Automation</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/coreyjjohnson/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                <a href="https://github.com/ILiterallyCannot" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                <a href="https://codepen.io/I_Literally_can_not/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-codepen" aria-hidden="true"/>
                                </a>
                                <a href="https://www.instagram.com/basketjohnson/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram" aria-hidden="true"/>
                                </a>
                                <a href="https://www.freecodecamp.org/fcc8a1d2d1b-45b4-454b-9256-f3f7ef47afc7" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-free-code-camp" aria-hidden="true"/>
                                </a>
                                <a href={resume}>
                                    <i className="fas fa-download" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;