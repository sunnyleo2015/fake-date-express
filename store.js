/**
 * Created by leo on 16-6-28.
 */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
export default store;