/**
 * Created by leo on 16-6-30.
 */
import React, { Component, PropTypes } from 'react'
import Preview_Page from '../componnent/Preview_Page'
import { connect } from 'react-redux'

class FormPreviewerPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var self = this;
        return(<div><Preview_Page items={this.props.items}/></div>);
    }
}

FormPreviewerPage.propTypes = {
    items: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        items: state.itemsState.items
    }
}

export default connect(mapStateToProps, {})(FormPreviewerPage)