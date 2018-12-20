import { combineReducers } from "redux";
import data from "./data";
import contentView from './contentView';

const rootReducer = combineReducers({
    data: data,
    contentView: contentView,
});

export default rootReducer;