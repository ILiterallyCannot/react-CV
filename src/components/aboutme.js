import React from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../images/Profile5.JPG'
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

const About = () => {

    const { t } = useTranslation();

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
                        <h1 style={{ color: 'white', textAlign: 'center' }}>{t('hi')}</h1>
                        <p>{parse(t('aboutMe'))}</p>
                        
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
export default About;