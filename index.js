import Content_Page from './componnent/Content_Page'
import Editor_Page from './componnent/Editor_Page'
import Preview_Page from './componnent/Preview_Page'
import React from 'react'
import ReactDOM from 'react-dom'
import store from './store';

//  console.log(store.getState().pageState.status);
function myrender(){
    console.log(store.getState().pageState.status);
    ReactDOM.render(
        (function(){
            if(store.getState().pageState.status == 'Editor_Page'){
                return <Editor_Page items={store.getState().itemsState.items} />
            }
            return <Preview_Page items={store.getState().itemsState.items}/>

        })(),
        document.getElementById('root')
    )
}

myrender();
store.subscribe(myrender);
//export default myrender();