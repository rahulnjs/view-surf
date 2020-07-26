import { createStore } from 'redux';
// import rootReducer from  '../reducers';
import reducer from '../reducers/DisplayModeReducer';

export default(initialState) => {
    return createStore(reducer, initialState={darkMode: false});
}