import { produce } from 'immer';
import { Categories, PhotoReducerActionType } from '../action/actionInterface';
import { SET_CATEGORY, SET_DATA } from '../action/actionTypes';

export type ElementProps = {
    id: number,
    pageURL: string,
    type: string,
    tags: string,
    previewURL: string,
    previewWidth: number,
    previewHeight: number,
    webformatURL: string,
    webformatWidth: number,
    webformatHeight: number,
    largeImageURL: string,
    imageWidth: number,
    imageHeight: number,
    imageSize: number,
    views: number,
    downloads: number,
    collections: number,
    likes: number,
    comments: number,
    user_id: number,
    user: string,
    userImageURL: string,
  } 
  

export type PhotosState ={
    data?: ElementProps[],
    category?: Categories,
}
export const INITIAL_STATE_PHOTOS: PhotosState ={
    data:[],
    category:"",
}

export default produce((state: PhotosState, action: PhotoReducerActionType) =>{
    switch(action.type){
        case SET_CATEGORY:
            state.category = action.payload 
            return state;
        case SET_DATA:
            state.data = action.payload
            return state;
        default:
            return state;
    }
}, INITIAL_STATE_PHOTOS)