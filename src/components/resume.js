import React, { Component } from 'react';
import { Grid, Cell, Tabs, Tab } from 'react-mdl';
import Education from './education'
import Experience from './experience';
import Skills from './skills';
import profile from '../images/Profile2.JPG'
import Languages from './languages';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h2>Experience</h2>
                    <h4>Study related</h4>
                    <Experience
                        startYear='June 2019'
                        endYear='April 2020'
                        jobName='Solteq Plc'
                        jobTitle='Junior Developer, Test Automation Engineer'
                        jobDescription='Developed an Automated Test Suite for Solteq’s Smart Retail Robot project on both the UI and robot itself. '
                        jobAchievement='The Test Automation Suite took a multi-phase manual test setup and reduced it down to the push of a single button, saving developers countless hours every week and allowing them to focus on critical development work.'/>
                    <Experience
                        startYear='April 2015'
                        endYear='January 2017'
                        jobName='Heraeus Electro-Nite LLC Chelyabinsk'
                        jobTitle='Production Engineer, Thesis Worker'
                        jobDescription='Worked for 3 short internship periods over 6 months in Chelyabinsk observing the factory and redesigning production lines'
                        jobAchievement='Redesigned one production line which reduced time wasted by as much as 40% by moving some of the stations around and streamlining the production process'/>
                    <Experience
                        startYear='June 2015'
                        endYear='July 2015'
                        jobName='Fortum, Chelyabinsk'
                        jobTitle='Internship, Warehouse management'
                        jobDescription='Prepared the warehouse for an upcoming EU standard safety inspection' 
                        jobAchievement='The warehouse passed the EU standard safety inspection'/>
                    <hr style={{ borderTop: '3px solid #e22947' }} />
                    <h4>Other experience (Chronological)</h4>
                    <Experience
                        startYear='October 2017'
                        endYear='Ongoing'
                        jobName='Wolt'
                        jobTitle='Courier'
                        jobDescription='Bike Courier, delivered food around town to hungry customers'
                        jobAchievement='Highest rated courier in the city on several instances'/>
                    <Experience
                        startYear='December 2018'
                        endYear='Ongoing'
                        jobName='Kotipizza Oy'
                        jobTitle='Courier'
                        jobDescription='Pizza delivery courier'
                        jobAchievement='Works at the most successful franchise in Jyväskylä'/>
                    <Experience
                        startYear='September 2016'
                        endYear='October 2017'
                        jobName='Sol Oy'
                        jobTitle='Cleaning and Maintenance'
                        jobDescription='Cleaned and maintained common areas, assisted colleagues and customers needs at Sokos Hotel Jyväshovi' 
                        jobAchievement='Highly recommended worker'/>
                    <Experience
                        startYear='September 2012'
                        endYear='September 2016'
                        jobName='N Clean Oy'
                        jobTitle='Cleaning and Maintenance'
                        jobDescription='Cleaned and maintained common areas, assisted colleagues and customers needs at Sokos Hotel Paviljonki' 
                        jobAchievement='Worked until the hotel closed in March 2016'/>
                    <Experience
                        startYear='March 2011'
                        endYear='October 2011'
                        jobName='Trades Unlimited Inc'
                        jobTitle='Logistics Coordinator'
                        jobDescription='Responsible for keeping several construction crews in separate areas moving efficiently coordinating supplies managing waste from work sites.' 
                        jobAchievement='Decreased waste management costs by as much as 70%. '/>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h2>Skills and Understanding</h2>
                    <h5 style={{ textAlign: 'center' }}> ← Student/Intern ---------- Junior ---------- Senior → </h5>
                    <h4>Programming</h4>
                    <Skills
                        skill='Python'
                        progress='25'
                    />
                    <Skills
                        skill='Robot Framework'
                        progress='40'
                    />
                    <Skills
                        skill='SQL'
                        progress='30'
                    />
                    <Skills
                        skill='Bash'
                        progress='30'
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
                        progress='35'
                    />
                    <Skills
                        skill='JavaScript'
                        progress='35'
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
                    <h4>Software and Platform services</h4>
                    <h5 style={{ textAlign: 'center' }}> ← Student/Intern ---------- Junior ---------- Senior → </h5>
                    <Skills
                        skill='Jenkins'
                        progress='35'
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
                    <Skills
                        skill='Linux OS'
                        progress='40'
                    />
                    <Skills
                        skill='Jira'
                        progress='30'
                    />
                    <Skills
                        skill='Git'
                        progress='40'
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
                        schoolName='Jyväskylä University of Applied Science'
                        schoolDescription='Bachelors Degree in Information Technology' />
                    <Education
                        startYear={2012}
                        endYear={2017}
                        schoolName='Jyväskylä University of Applied Science'
                        schoolDescription='Bachelors Degree in Logistics Engineering' />
                    <Education
                        startYear={2009}
                        endYear={2010}
                        schoolName='Jämsä Christian College'
                        schoolDescription='Certificate of Finnish Language' />
                    <Education
                        startYear={206}
                        endYear={2007}
                        schoolName='East Valley Institute of Technology'
                        schoolDescription='Private Pilot Ground School' />
                    <Education
                        startYear={2004}
                        endYear={2008}
                        schoolName='Coronado High School'
                        schoolDescription='Diploma with honors' />
                </div>
                
            )
        }else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h2>Language Skills</h2>
                    <h5 style={{ textAlign: 'center' }}> ← Basics -------------------- Fluent/Native → </h5>
                    <Languages
                        language='English'
                        progress='100'
                    />
                    <Languages
                        language='Finnish'
                        progress='80'
                    />
                    <Languages
                        language='Russian'
                        progress='30'
                    />
                    <Languages
                        language='German'
                        progress='20'
                    />
                    <Languages
                        language='Swedish'
                        progress='20'
                    />
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <Grid className='resume-body'>
                    <Cell col={4} className='resume-left'>
                        <div style={{ textAlign: 'center' }}>
                        <img className='profile-img' alt='profile picture' src={profile}
                                style={{ height: '250px' }} />
                        </div>
                        <h2 style={{ paddingTop: '1em' }}>Corey Johnson</h2>
                        <h4 style={{ color: 'grey' }}>Entry/Junior Software Engineer</h4>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <p>The developer you'll never regret hiring</p>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <h5>Address</h5>
                        <p>Survontie 46, 40520</p>
                        <h5>Phone number</h5>
                        <p>+358445001976</p>
                        <h5>e-mail</h5>
                        <a href='mailto: cjmkori90@gmail.com'>cjmkori90@gmail.com</a>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <Tabs className='resumeTabs' activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                            <Tab>Experience</Tab>
                            <Tab>Skills</Tab>
                            <Tab>Education</Tab>
                            <Tab>Languages</Tab>
                        </Tabs>
                        <div className="content">{this.toggleCategories()}</div>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;