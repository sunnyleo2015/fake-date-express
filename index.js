import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Editor_Page from './componnent/Editor_Page'
import Preview_Page from './componnent/Preview_Page'
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import {getItem} from './handler/Page_API';
import MyContainer from './container/MyContainer';
import FormEditorPage from './container/FormEditorPage';
import FormPreviewerPage from './container/FormPreviewerPage'

//  console.log(store.getState().pageState.status);
/*function myrender(){
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
}*/
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router  history={history}>
            <Route path="/" component={MyContainer} >
                <IndexRoute component={FormEditorPage} />
                <Route path="/editor" component={FormEditorPage} />
                <Route path="/preview" component={FormPreviewerPage} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)

//myrender();
//store.subscribe(myrender);
getItem();