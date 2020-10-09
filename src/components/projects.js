import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle className="reactCard projectCard"> VR App with React + API</CardTitle>
                        <CardText>
                            VR (Valtio Rautatie) is the national railway service for Finland. I created a simple VR app to gain some simple understanding of how React works and how APIs work. It functions as best as a beginner can make it, but I am proud of it!
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/ILiterallyCannot/VR-App'>Github</Button>
                            <Button href='https://student.labranet.jamk.fi/~L8314/reactapp/'>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'fff' }}><IconButton name='share' /></CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle className="projectCard jQueryResumeCard" >MY First online CV made with jQuery</CardTitle>
                        <CardText>
                            I created my first online CV with HTML, CSS, and jQuery. It was challenging to get everything to fit on a non-scrolling page. While there are some bugs in the transitions, I am proud of my compact, yet simple designing skills here. 
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/ILiterallyCannot/Obsimo'>Github</Button>
                            <Button href='https://iliterallycannot-jquery-cv.herokuapp.com/index.html'>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'fff' }}><IconButton name='share' /></CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle className="projectCard obsimoCard" >Obsimo (jQuery)</CardTitle>
                        <CardText>
                            We took part in a school project to create an app that surveys employers to select which classes they deem most important. While most other teams focused on basic apps with radio buttons and input, my team went off the rails and created this award winning app that functions more like a dashboard.
                        </CardText>
                        <CardActions border>
                            <Button href='https://github.com/ILiterallyCannot/Obsimo'>Github</Button>
                            <Button href='https://iliterallycannot-obsimo.herokuapp.com/index.html'>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: 'fff' }}><IconButton name='share' /></CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>jQuery</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Projects;