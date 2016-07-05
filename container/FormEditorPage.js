/**
 * Created by leo on 16-6-30.
 */
import React, { Component, PropTypes } from 'react'
import Editor_Page from '../componnent/Editor_Page'
import { connect } from 'react-redux'

class FormEditorPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        var self = this;
        return(<div><Editor_Page items={this.props.items}/></div>);
    }
}

FormEditorPage.propTypes = {
    items: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps){
    return {
        items: state.itemsState.items
    }
}

export default connect(mapStateToProps, {})(FormEditorPage)