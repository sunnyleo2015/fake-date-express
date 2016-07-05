/**
 * Created by leo on 16-6-28.
 */
import * as type from '../action/action';
import React, {Component ,Proptype} from 'react';
import $ from "jquery"
import * as changePageAPI from '../handler/Page_API';
import ReactDOM from 'react-dom';
//import store from '../store'

class Window_Page extends Component{
    constructor(props) {
        super(props);
        this.state = {
            type:"date"

        }
    }
    /*onTypeChange(e){
        this.setState({
            type: e.currentTarget.value
        });
    }*/
    closeWindow(){
        $('.myWindow').hide();
    }
    add_Item(){
        var itemtype = $("input[name='itemType']:checked").val();
        //alert(itemtype);
        changePageAPI.addItem(itemtype);
    }
    render(){
        return <div className="myWindow">
            <input type="radio" name="itemType" /*checked={this.state.type==="date"} onChange={e=>this.onTypeChange(e)}*/ value="date" />date<br />
            <input type="radio" name="itemType" /*checked={this.state.type==="text"} onChange={(e)=>this.onTypeChange(e)}*/ value="text" />text<br />
            <button type="button" onClick={this.add_Item}>add</button>
            <button onClick = {this.closeWindow}>close</button>
        </div>
    }
}

export default Window_Page;