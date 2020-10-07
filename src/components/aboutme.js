import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/Profile5.JPG'

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <Grid style={{ width:'100%', height:'100%', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                    <Cell col={4} tablet={4} phone={4} className='about-left-col'>
                        <div>
                            <img className='about-img' id="aboutImg" alt='profile' src={profile} />
                        </div>
                    </Cell>
                    <Cell className='about-right-col' col={8} tablet={4} phone={4}>
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