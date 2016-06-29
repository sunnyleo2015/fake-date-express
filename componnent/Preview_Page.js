/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import React, { Component, PropTypes } from 'react';
import * as changePageAPI from '../handle/Page_API';
import $ from "jquery";
import store from '../store';
import { createStore } from 'redux';
import reducers from '../reducers/index';

class Preview_Page extends Component{
    constructor(props){
        super(props);
    }
    toEditorPage(){
        changePageAPI.show_Editor_Page();
    }
    /*postItem(){
        var myitems = store.getState().itemsState.items
        console.log(myitems);
        var setItem = $.ajax({
            url:'/setItem',
            type:'get',
            async:false,
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
    }*/
    render(){
        return(
            <div>
                <button type="button" /*onClick={this.postItem}*/>Preview_Page</button>
                <ul className="Preview_From">
                    {
                        this.props.items.map((item) =>{
                            return (<li>
                                {(()=> {
                                    if(item.type === 'date' && item.state === 'show') {
                                        return(<input type="date"></input>);
                                    }  else {
                                        return(<input type="text"></input>);
                                    }
                                })()}
                            </li>)
                        })
                    }
                </ul>
                <button type="button" onClick={this.toEditorPage}>BACK</button>
            </div>
        );

    }
}

export default Preview_Page;