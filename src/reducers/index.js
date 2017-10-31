import { combineReducers } from 'redux';

import planReducer  from './reduser';
import filters  from './filters';


export default combineReducers({
    planReducer,
    filters
});