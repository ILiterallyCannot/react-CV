import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/Profile5.JPG'

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <Grid style={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <Cell col={4} className='about-left-col'>
                        <div>
                            <img className='profile-img' alt='profile' src={profile}
                                style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <h4 style={{ color: 'white' }}>Phone number</h4>
                        <h5 style={{ color: 'white' }}>+358445001976</h5>
                        <h5 style={{ color: 'white' }}>e-mail</h5>
                        <h5><a href='mailto: cjmkori90@gmail.com'>cjmkori90@gmail.com</a></h5>
                    </Cell>
                    <Cell className='about-right-col' col={8}>
                        <div className="content">
                            <h1 style={{ color: 'white', textAlign: 'center' }}>Hi, I'm Corey</h1>
                            <p>In 2009, I jumped on a plane with a bag of old clothes and a few hundred euros in my pocket, and left my childhood home for Finland.
                                After a decade of amazing adventures and attaining 2 bachelor's degrees, I am here to share my story and make your office a better place to be. 
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;