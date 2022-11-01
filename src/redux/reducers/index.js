import {combineReducers} from "redux";
import { productsReducer, selectedProductReducer } from "./productsReducer";

const reducers = combineReducers({
    allProducts : productsReducer,
    product: selectedProductReducer
})

export default reducers