import { call, put, select } from "redux-saga/effects";
import { RootState } from "../../store/reducers";
import { performRequest } from "./requestPerformer";
import { setData } from "../../store/action/actionCreator";

const url = 'http://localhost:5000/api/data/getData?category='

export function* getPhotosSaga(): Generator<any, any, any>{
    try{
        const {category} = yield select(
            ({photoReducer} : RootState) => ({
                category : photoReducer.category
            })
          );
        const response = yield call(performRequest,{
            url : url + category,
            method:'GET'
        })
        const data = response.data.data
        yield put(setData(data))
    }catch(error){
        console.log('in getPhotosSaga : ', error);
    }
}