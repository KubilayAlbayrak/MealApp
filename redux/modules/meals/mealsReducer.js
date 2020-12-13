import { loadAllCategories } from '../categories/thunkActions';
import * as _AT from './actionTypes';

const initialState={
    allMeals : [],
    favoriteMeals : [],
};

function mealsReducer( state=initialState , action){
    const{payload} = action;
    switch(action.type) {
        case _AT.STORE_ALL_MEALS:{
            return {
                ...state,
                allMeals:payload,
            };
        }
    case _AT.FAVORITE_MEALS:{
        const existingIndex = state.favoriteMeals.findIndex(meal => meal.mealid === action.mealid);
        if(existingIndex >= 0) {
            const updatedFavMeals=[...state.favoriteMeals];
            updatedFavMeals.splice(existingIndex,1);
            return{...state,favoriteMeals: updatedFavMeals};
        } else{
                return{...state, favoriteMeals:state.favoriteMeals.concat(state.meals.find(meal => meal.mealid === action.mealid))}
        } 
        }
        default:{
            return state;
        }
    }
};

export default mealsReducer;