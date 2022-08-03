import React, { Component } from 'react';
import { Grid, Cell, Tabs, Tab } from 'react-mdl';
import Education from './education'
import Experience from './experience';
import Skills from './skills';
import profile from '../images/Profile2.JPG'
import Languages from './languages';
import SoftSkills from './softskills';
import { withTranslation } from 'react-i18next';
import { t } from 'i18next';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h2>{t('professional_experience')}</h2>
                    <Experience 
                        startMonth={t('feb')}
                        startYear={t('2022')}
                        endMonth={t('ongoing')}
                        endYear=''
                        jobName={t('siili.name')}
                        jobTitle={t('siili.title')}
                        jobDescription= {t('siili.description')}
                        jobAchievement={t('siili.achievements')}/>
                    <Experience
                        startMonth={t('sep')}
                        startYear={t('2020')}
                        endMonth={t('feb')}
                        endYear={t('2022')} 
                        jobName={t('nokia.name')}
                        jobTitle={t('nokia.title')}
                        jobDescription={t('nokia.description')}
                        jobAchievement={t('nokia.achievements')}/>
                    <Experience
                        startMonth={t('jun')}
                        startYear={t('2019')}
                        endMonth={t('apr')}
                        endYear={t('2020')}
                        jobName={t('solteq.name')}
                        jobTitle={t('solteq.title')}
                        jobDescription={t('solteq.description')}
                        jobAchievement={t('solteq.achievements')}/>
                    <Experience
                        startMonth={t('apr')}
                        startYear={t('2015')}
                        endMonth={t('jan')}
                        endYear={t('2017')}
                        jobName={t('heraeus.name')}
                        jobTitle={t('heraeus.title')}
                        jobDescription={t('heraeus.description')}
                        jobAchievement={t('heraeus.achievements')}/>
                    <Experience
                        startMonth={t('jun')}
                        startYear={t('2015')}
                        endMonth={t('jul')}
                        endYear={t('2015')}
                        jobName={t('fortum.name')}
                        jobTitle={t('fortum.title')}
                        jobDescription={t('fortum.description')}
                        jobAchievement={t('fortum.achievements')}/>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h2>{t('skills-understanding')}</h2>
                    <h5 className='skillScale' style={{ textAlign: 'center' }}>{t('skill-scale')}</h5>
                    <h4>{t('programming')}</h4>
                    <Skills
                        skill='Python'
                        progress='49'
                    />
                    <Skills
                        skill='Django'
                        progress='35'
                    />
                    <Skills
                        skill='Robot Framework'
                        progress='40'
                    />
                    <Skills
                        skill='SQL'
                        progress='45'
                    />
                    <Skills
                        skill='Bash'
                        progress='40'
                    />
                    <Skills
                        skill='Ansible'
                        progress='35'
                    />
                    <Skills
                        skill='HTML/CSS'
                        progress='45'
                    />
                    <Skills
                        skill='ReactJS, NodeJS'
                        progress='50'
                    />
                    <Skills
                        skill='JavaScript'
                        progress='40'
                    />
                    <Skills
                        skill='jQuery'
                        progress='40'
                    />
                    <Skills
                        skill='PHP'
                        progress='25'
                    />
                    <Skills
                        skill='Kotlin'
                        progress='20'
                    />
                    <Skills
                        skill='C, C++, C#'
                        progress='20'
                    />
                    <Skills
                        skill='JSON, AJAX'
                        progress='25'
                    />
                    <hr style={{ borderTop: '3px solid #e22947' }} />
                    <h4>{t('platforms')}</h4>
                    <h5 className='skillScale' style={{ textAlign: 'center' }}> {t('skill-scale')} </h5>
                    <Skills
                        skill='Git'
                        progress='50'
                    />
                    <Skills
                        skill='Jenkins'
                        progress='45'
                    />
                    <Skills
                        skill='Linux OS'
                        progress='45'
                    />
                    <Skills
                        skill='Jira'
                        progress='50'
                    />
                    <Skills
                        skill='Yocto (Linux Os)'
                        progress='40'
                    />
                    <Skills
                        skill='Docker'
                        progress='30'
                    />
                    <Skills
                        skill='Azure'
                        progress='20'
                    />
                    <Skills
                        skill='AWS'
                        progress='25'
                    />
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h2>Education</h2>
                    <Education
                        startYear={2018}
                        endYear={2020}
                        schoolName={t('jamk.name')}
                        schoolDescription={t('jamk.it-degree')} />
                    <Education
                        startYear={2012}
                        endYear={2017}
                        schoolName={t('jamk.name')}
                        schoolDescription={t('jamk.log-degree')} />
                    <Education
                        startYear={2009}
                        endYear={2010}
                        schoolName={t('jkrko.name')}
                        schoolDescription={t('jkrko.degree')} />
                    <Education
                        startYear={2006}
                        endYear={2007}
                        schoolName={t('evit.name')}
                        schoolDescription={t('evit.degree')} />
                    <Education
                        startYear={2004}
                        endYear={2008}
                        schoolName={t('high-school.name')}
                        schoolDescription={t('high-school.degree')} />
                </div>
                
            )
        }else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h2>{t('language-skills')}</h2>
                    <h5 className='langScale' style={{ textAlign: 'center' }}> {t('language-scale')} </h5>
                    <Languages
                        langId='en'
                        language={t('en')}
                        progress='100'
                    />
                    <Languages
                        langId='fi'
                        language={t('fi')}
                        progress='80'
                    />
                    <Languages
                        langId='de'
                        language={t('de')}
                        progress='40'
                    />
                    <Languages
                        langId='ru'
                        language={t('ru')}
                        progress='30'
                    />
                    <Languages
                        langId='se'
                        language={t('se')}
                        progress='20'
                    />
                </div>
            )
        }else if (this.state.activeTab === 4) {
            return (
                <div>
                    <h2>{t('other-interests.name')}</h2>
                    <SoftSkills
                        skill={t('other-interests.other1')}
                    />
                    <SoftSkills
                        skill={t('other-interests.other2')}
                    />
                    <SoftSkills
                        skill={t('other-interests.other3')}
                    />
                    <SoftSkills
                        skill={t('other-interests.other4')}
                    />
                    <SoftSkills
                        skill={t('other-interests.other5')}
                    />
                    <SoftSkills
                        skill={t('other-interests.other6')}
                    />
                </div>
            )
        }
    }
    render() {
        const { t } = this.props;
        const mapLink = "https://google.com/maps/place/{home}".replaceAll("{home}", t('home'))
        return (
            <div>
                <Grid className='resume-body'>
                    <Cell col={4} className='resume-left'>
                        <div style={{ textAlign: 'center' }}>
                        <img className='profile-img' alt='profile' src={profile}
                                style={{ height: '250px' }} />
                        </div>
                        <h3 style={{ paddingTop: '1em' }}>{t('name')}</h3>
                        <h4 style={{ color: 'grey' }}>{t('software_engineer')}</h4>
                        <h4 style={{ color: 'grey' }}>{t('r_and_d')}</h4>
                        <h4 style={{ color: 'grey' }}>{t('q_a')}</h4>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <p>{t('motto')}</p>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <h5>{t('location')}</h5>
                        <a href = {mapLink} target="_SEJ">{t('home')}</a>
                        <h5>{t('phone_number')}</h5>
                        <p>{t('phone')}</p>
                        <h5>{t('email')}</h5>
                        <a href='mailto: cjmkori90@gmail.com'>{t('email_address')}</a>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <Tabs className='resumeTabs' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>{t('experience')}</Tab>
                            <Tab>{t('skills')}</Tab>
                            <Tab>{t('education')}</Tab>
                            <Tab>{t('languages')}</Tab>
                            <Tab>{t('soft_skills_interests')}</Tab>
                        </Tabs>
                        <div className="content">{this.toggleCategories()}</div>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default withTranslation()(Resume);