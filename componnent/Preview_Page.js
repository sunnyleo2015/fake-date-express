/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import React, { Component, PropTypes } from 'react';
import * as changePageAPI from '../handler/Page_API';
import $ from "jquery";
import { connect } from 'react-redux'
//import store from '../store';
//import { createStore } from 'redux';
//import reducers from '../reducers/index';

class Preview_Page extends Component{
    constructor(props){
        super(props);
    }
    toEditorPage(){
        changePageAPI.show_Editor_Page();
        this.context.router.push("/editor");

    }
    postItem(){
        //var myitems = store.getState().itemsState.items
        var myitems = this.props.items;
        console.log(myitems);
        var setItem = $.ajax({
            url:'/setItem',
            type:'get',
            async:true,
            dataType:'json',
            data: {data: myitems},
            success:function (data) {
                console.log(data);
            },
            error:function (err) {
                console.log(err);
            }
        });
        return setItem;
    }
    render(){
        var self = this;
        /*var self = this;
        var a = function(e) {
            self.postItem();
        }

        (e) => {
            this.postItem()
        }

        e => this.postItem()*/
        return(
            <div>
                <button type="button" onClick={e=>this.postItem()}>Preview_Page</button>
                <ul className="Preview_From">
                    {
                        this.props.items.map((item) =>{
                            return (<li>
                                {(()=> {
                                    if(item.type === 'date') {
                                        return(<input type="date"></input>);
                                    }  else {
                                        return(<input type="text"></input>);
                                    }
                                })()}
                            </li>)
                        })
                    }
                </ul>
                <button type="button" onClick={e=>self.toEditorPage(e)}>BACK</button>
            </div>
        );

    }
}

Preview_Page.propTypes = {
    status: PropTypes.string.isRequired
};
Preview_Page.contextTypes = {
    router: React.PropTypes.object
};
function mapStateToProps(state, ownProps) {
    return {
        status: state.pageState.status
    }
}
export default connect(mapStateToProps, {
})(Preview_Page)
export default Preview_Page;