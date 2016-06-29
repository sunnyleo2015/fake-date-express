/**
 * Created by leo on 16-6-28.
 */
import * as types from '../action/action';
import { combineReducers } from 'redux';
import _ from 'lodash';
import $ from "jquery";

const initPageState = {
    status: 'Editor_Page'
    //status: 'Preview_Page'
};

function changePageState(state = initPageState, action){
    switch (action.type) {
        case types.Preview_Page:
            return _.assign({}, state, {status:'Preview_Page'});
        case types.Editor_Page:
            //console.log(_.assign({}, state, {state:'Editor_Page'}));
            return _.assign({}, state, {status:'Editor_Page'});
        default:
            return state;
    }
}
function getItemJson() {
    var getItem = $.ajax({
        url:'/item',
        type:'get',
        async:false,
        dataType:'json',
        success:function (data) {
            console.log(data);
        },
        error:function (err) {
            console.log(err);
        }
    });
    return getItem;
}

const initItemState = {
    items:  getItemJson().responseJSON
};

const initDeleteItem = [];

console.log(initItemState);

function changeItemState(state = initItemState, action){
    var type = action.type;
    if(type == types.Add_Item){
        let newItems = _.concat(state.items, action.item);
        return _.assign({}, state, {items:newItems});
    }

    if(type == types.Remove_Item){
        let newItems = _.filter(state.items, (x, index)=>{return index != action.index})
        let deleteItems = _.filter(state.items, (x, index)=>{return index == action.index})
        initDeleteItem.push(deleteItems[0]);
        console.log(initDeleteItem);
        return _.assign({}, state, {items: newItems});
    }
    return state;
}

var reducers = combineReducers({
    pageState: changePageState,
    itemsState: changeItemState
});

export default reducers;
