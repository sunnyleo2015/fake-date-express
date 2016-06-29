/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action'
import Editor_Page from './Editor_Page'
import Preview_Page from './Preview_Page'
import store from '../store'
import { createStore } from 'redux'
import React, {Component ,Proptype} from 'react'
import $ from 'jquery'

class Content_Page extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            (function() {
                if (e=>props.status === "Editor_Page") {
                    return  <Editor_Page  />

                }
                return <Preview_Page />
            })()
            
        );
    }
}

export default Content_Page;