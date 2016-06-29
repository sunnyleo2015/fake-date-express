/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import Window_Page from './Window_Page'
import React, {Component ,Proptype} from 'react';
import ReactDOM from 'react-dom';
import * as changePageAPI from '../handle/Page_API';
import $ from "jquery"
import store from '../store'
class Editor_Page extends Component{
    constructor(props){
        super(props);
    }
    toPreviewPage(){
        changePageAPI.show_Preview_Page();
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
                <button onClick={this.toPreviewPage}>Editor_Page</button>
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

export default Editor_Page;