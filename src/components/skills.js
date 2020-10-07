import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div><p style={{ fontSize: 15 }}>{this.props.skill}</p>
                        <ProgressBar style={{ margin: 'auto', width: '75%', height: '6px' }}
                            progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skills;