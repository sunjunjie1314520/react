import {combineReducers} from 'redux';

import app from './app';
import user from './user';
import home from './home';

export default combineReducers({
    app,
    user,
    home,
})