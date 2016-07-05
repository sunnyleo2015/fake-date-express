/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import Window_Page from './Window_Page'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import * as changePageAPI from '../handler/Page_API';
import $ from "jquery"
//import store from '../store'
import { connect } from 'react-redux';


class Editor_Page extends Component{
    constructor(props){
        super(props);
    }
    toPreviewPage(){
        changePageAPI.show_Preview_Page();
        console.log(this.context);
        this.context.router.push("/preview");
    }
    openWindow(){
        ReactDOM.render(
            <Window_Page />,
            document.getElementById('window')
        )
        $('.myWindow').show();
    }
    removeItem(event){
        let index = $(event.currentTarget).data('item-index');
        changePageAPI.removeItem(index);
    }
    
    render(){
        var self = this;
        return(
            <div>
                <button onClick={e=>self.toPreviewPage(e)}>Editor_Page</button>
                <ul className="Editor_From">
                    {
                        this.props.items.map((item, index) =>{
                            return (<li>
                                {(()=> {
                                 if(item.type === 'date') {
                                     return(<input type="date"></input>);
                                 }  else {
                                     //alert(item.type);
                                     return(<input type="text"></input>);
                                 }
                                })()}
                                <button type="button" onClick={self.removeItem} data-item-index={index}>-</button>
                            </li>)
                        })
                    }
                </ul>
                <button onClick={this.openWindow}>+</button>
            </div>
        )
    }
}

Editor_Page.propTypes = {
    status: PropTypes.string.isRequired
};
Editor_Page.contextTypes = {
    router: React.PropTypes.object
};
function mapStateToProps(state, ownProps) {
    return {
        status: state.pageState.status
    }
};
export default connect(mapStateToProps, {
})(Editor_Page);

export default Editor_Page;