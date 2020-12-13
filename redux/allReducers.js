import {combineReducers} from 'redux';
import categoriesReducer from './modules/categories/categoriesReducer';
import mealsReducer from './modules/meals/mealsReducer';


const allReducers =combineReducers({
    meals:mealsReducer,
    categories:categoriesReducer,
});

export default allReducers;