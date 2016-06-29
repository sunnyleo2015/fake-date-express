/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import React, { Component, PropTypes } from 'react';
import * as changePageAPI from '../handle/Page_API';

class Preview_Page extends Component{
    constructor(props){
        super(props);
    }
    toEditorPage(){
        changePageAPI.show_Editor_Page();
    }
    render(){
        return(
            <div>
                <button type="button">Preview_Page</button>
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
                <button type="button" onClick={this.toEditorPage}>BACK</button>
            </div>
        );

    }
}

export default Preview_Page;