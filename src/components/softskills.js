import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class SoftSkills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div><p style={{ fontSize: 15 }}>{this.props.skill}</p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}
export default SoftSkills;