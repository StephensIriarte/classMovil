import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'


import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";
import AuthReducer from "./reducers/auth.reducer";
import PlacesReducer from './places.reducer'

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer,
    cart: CartReducer,
    orders: OrderReducer,
    places: PlacesReducer,
    auth: AuthReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));