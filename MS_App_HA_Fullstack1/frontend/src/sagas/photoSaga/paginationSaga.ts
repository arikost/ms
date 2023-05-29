import { call, put } from "redux-saga/effects";
import { GetPaginationAction } from "../../store/action/actionInterface";
import { setData } from "../../store/action/actionCreator";
import { performRequest } from "./requestPerformer";

const url = 'http://localhost:5000/api/pagination/'

export default function* paginationSaga({payload} : GetPaginationAction): Generator<any, any, any>{
    try{
        console.log(payload)
        const response = yield call(performRequest,{
            url : url + payload,
            method: 'GET'
        }) 
        const data = response.data.data
        yield put(setData(data))
    }catch(error){
        console.log('in getPhotosSaga : ', error);
    }

}