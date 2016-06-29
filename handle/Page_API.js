/**
 * Created by leo on 16-6-28.
 */
import store from '../store';
import {to_Editor_Page, to_Preview_Page} from '../action/action';
import {add_Item, remove_Item} from '../action/action';
export function show_Editor_Page(){
    store.dispatch(to_Editor_Page());
}

export function show_Preview_Page() {
    store.dispatch(to_Preview_Page());
}

export function addItem(item) {
    store.dispatch(add_Item(item));
}

export function removeItem(index){
    store.dispatch(remove_Item(index));
}