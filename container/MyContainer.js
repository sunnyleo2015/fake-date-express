/**
 * Created by leo on 16-6-30.
 */
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { getItem } from '../handler/Page_API'

class MyContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

MyContainer.propTypes = {
    status: PropTypes.string.isRequired
};
MyContainer.contextTypes = {
    router: React.PropTypes.object
};
function mapStateToProps(state, ownProps) {
    return {
        status: state.pageState.status
    }
}
export default connect(mapStateToProps, {
})(MyContainer)
