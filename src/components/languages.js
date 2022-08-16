import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from 'react-mdl';
import i18n from "../i18n/config";

class Languages extends Component {
    handleLangChange(e) {
        i18n.changeLanguage(e.currentTarget.dataset.value);
        localStorage.setItem("lan", e.currentTarget.dataset.value);
    }
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div><p style={{ fontSize: 15 }} onClick={this.handleLangChange.bind(this)} data-value={this.props.langId}>{this.props.language}</p>
                        <ProgressBar style={{ margin: 'auto', width: '75%', height: '6px' }}
                            progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    };
    
}
export default Languages;