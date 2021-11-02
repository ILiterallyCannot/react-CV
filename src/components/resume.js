import React, { Component } from 'react';
import { Grid, Cell, Tabs, Tab } from 'react-mdl';
import Education from './education'
import Experience from './experience';
import Skills from './skills';
import profile from '../images/Profile2.JPG'
import Languages from './languages';
import SoftSkills from './softskills';

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <h2>Professional Experience</h2>
                    <Experience 
                        startYear='Sept 2020'
                        endYear='Ongoing'
                        jobName='Nokia Oyj'
                        jobTitle='5G Project, L1 Call Test automation, Research and Development Engineer'
                        jobDescription='Integrating the latest 5G software with state of the art radio technology, and making the kind of calls no one has ever seen before.
                        Researching better testing solutions to Nokias vast 5G team.'
                        jobAchievement='Bringing the latest 5G radios with never-seen-before tecnology to life for the first time. Reduced startup test time from over 3 hours to less than 10 minutes.'/>
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
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h2>Skills and Understanding</h2>
                    <h5 className='skillScale' style={{ textAlign: 'center' }}> ← Beginner ---------- Junior ---------- Senior → </h5>
                    <h4>Programming</h4>
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
                        progress='40'
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
                    <h4>Software and Platform services</h4>
                    <h5 className='skillScale' style={{ textAlign: 'center' }}> ← Beginner ---------- Junior ---------- Senior → </h5>
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
                        startYear={2006}
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
                    <h5 className='langScale' style={{ textAlign: 'center' }}> ← Basics -------------------- Fluent/Native → </h5>
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
                        progress='30'
                    />
                    <Languages
                        language='Swedish'
                        progress='20'
                    />
                </div>
            )
        }else if (this.state.activeTab === 4) {
            return (
                <div>
                    <h2>Other skills and interests</h2>
                    <SoftSkills
                        skill='Sales, marketing, and networking skills'
                    />
                    <SoftSkills
                        skill='Airbnb superhost and goMore host (Similar to Turo)'
                    />
                    <SoftSkills
                        skill='A friend of everyone, easy to get along with in many environments'
                    />
                    <SoftSkills
                        skill='Eases tense situations, easy to relax with'
                    />
                    <SoftSkills
                        skill='A good listener, honest, realistic'
                    />
                    <SoftSkills
                        skill='Brings a good atmosphere'
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
                        <img className='profile-img' alt='profile' src={profile}
                                style={{ height: '250px' }} />
                        </div>
                        <h3 style={{ paddingTop: '1em' }}>Corey Johnson</h3>
                        <h4 style={{ color: 'grey' }}>Software Engineer</h4>
                        <h4 style={{ color: 'grey' }}>Research & Development</h4>
                        <h4 style={{ color: 'grey' }}>Test Automation</h4>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <p>The developer you'll never regret hiring</p>
                        <hr style={{ borderTop: '3px solid #314755', width: '80%' }} />
                        <h5>Location</h5>
                        <a href="https://goo.gl/maps/bvpwh55vcccVKkGc6" target="_blank">Oulu, Finland</a>
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
                            <Tab>Soft skills and Intrests</Tab>
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