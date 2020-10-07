import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import resume from '../documents/Coreys_CV.pdf';
import profile from '../images/Profile4.JPG'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Corey Johnson</h2>
                        <img src={profile}
                            alt='profile'
                            style={{ height: '250px', borderRadius: '50%' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>

                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                    +358445001976
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                        <a href="https://www.linkedin.com/in/coreyjjohnson/" target="_blank" rel="noopener noreferrer">
                                            LinkedIn
                                        </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        <a href='mailto: cjmkori90@gmail.com'>cjmkori90@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-download' aria-hidden='true' />
                                        <a href={resume} download>See my CV</a>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;