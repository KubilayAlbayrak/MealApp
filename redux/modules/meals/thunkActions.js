import * as _AT from './actionTypes';
import {_H} from '../../helper';

export const loadAllMeals = () => {
    return async (dispatch) => {
        try{
            const mealsResult= await fetch('http://192.168.1.107:19000/all/meals').then((res)=> res.json());
            if(mealsResult.status === "ok"){
                dispatch(_H(_AT.STORE_ALL_MEALS,mealsResult.data));
            }
        } catch(err){
            console.log(err);
        }
    };
};