import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h5>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</h5>
                </Cell>
                <Cell col={8} >
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <h5>{this.props.jobTitle}</h5>
                    <ul>
                        <li>{this.props.jobDescription}</li>
                        <li>{this.props.jobAchievement}</li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;