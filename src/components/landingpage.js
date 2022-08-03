import React from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/profile.JPG'
import resume from '../documents/Coreys_CV.pdf'
import { useTranslation } from 'react-i18next';

const Landing = () => {

    const { t } = useTranslation();

    return(
        <div className="landing-page" style={{width: '100%', margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img className='profile-img' alt='avatar' src={profile}/>
                    <div className="banner-text">
                        <h1>{t("name")}</h1>
                        <h2>{t("title")}</h2>
                        <hr/>
                        <p>{t("highlights")}</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/coreyjjohnson/" target="_SEJ" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/ILiterallyCannot" target="_SEJ" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            <a href="https://codepen.io/I_Literally_can_not/" target="_SEJ" rel="noopener noreferrer">
                                <i className="fab fa-codepen" aria-hidden="true"/>
                            </a>
                            <a href="https://www.instagram.com/basketjohnson/" target="_SEJ" rel="noopener noreferrer">
                                <i className="fab fa-instagram" aria-hidden="true"/>
                            </a>
                            <a href="https://www.freecodecamp.org/fcc8a1d2d1b-45b4-454b-9256-f3f7ef47afc7" target="_SEJ" rel="noopener noreferrer">
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
export default Landing;