import {all, takeLatest} from 'redux-saga/effects';
import { GET_DATA, GET_PAGINATION } from '../../store/action/actionTypes';
import { getPhotosSaga } from './getPhotosSaga';
import paginationSaga from './paginationSaga';


export function* watcherSaga(){
    yield takeLatest(GET_DATA, getPhotosSaga);
    yield takeLatest(GET_PAGINATION, paginationSaga);
}