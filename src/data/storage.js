import { UPDATE_FAVOURITE } from "./types";
import { createStore } from 'redux';

const initialState = {
    favouriteList :[],
};

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FAVOURITE:
            return {
                favouriteList: action.data.favouriteList,
            };

        default:
            return state;
    }
};
export default createStore(reducerApp);