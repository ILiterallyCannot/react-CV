import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import resume from '../documents/Coreys_CV.pdf';
import profile from '../images/Profile4.JPG'
import { useTranslation } from 'react-i18next';

const Contact = () => {

    const { t } = useTranslation();

    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>{t("name")}</h2>
                    <img src={profile} className='contact-profile'
                        alt='profile'/>
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>

                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>{t("contact_me")}</h2>
                    <hr />
                    <div className='contact-list'>
                        <List>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-phone-square' aria-hidden='true' />
                                {t("phone")}
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    <a href="https://www.linkedin.com/in/coreyjjohnson/" target="_SEJ" rel="noopener noreferrer">
                                    {t("linkedin")}
                                    </a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-download' aria-hidden='true' />
                                    <a href={resume} download>{t("see_cv")}</a>
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                    <i className='fa fa-envelope' aria-hidden='true' />
                                    <a href='mailto: cjmkori90@gmail.com'>{t("email_me")}</a>
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>
        </div>
    )
}
export default Contact;