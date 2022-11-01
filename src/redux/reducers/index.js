import {combineReducers} from "redux";
import { productsReducer } from "./productsReducer";

const reducers = combineReducers({
    allProducts : productsReducer,
})

export default reducers