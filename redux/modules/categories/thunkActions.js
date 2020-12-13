import * as _AT from './actionTypes';
import {_H} from '../../helper';

export const loadAllCategories = () => {
    return async (dispatch) => {
        try{
            const categoriesResult= await fetch("http://192.168.1.107:19000/all/categories").then((res)=> res.json());
            if(categoriesResult.status === "ok"){
                dispatch(_H(_AT.STORE_ALL_CATEGORIES,categoriesResult.data));
            }
        } catch(err){
            console.log(err);
        }
    };
};