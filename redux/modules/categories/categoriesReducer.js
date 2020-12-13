import * as _AT from './actionTypes';

const initialState={
    allCategories : [],
};

function categoriesReducer( state=initialState , action){
    const{payload} = action;
    switch(action.type) {
        case _AT.STORE_ALL_CATEGORIES:{
            return {
                ...state,
                allCategories:payload,
            };
        }
        default:{
            return state;
        }
    }
};

export default categoriesReducer;