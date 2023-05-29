import { GET_CATEGORY, GET_PAGINATION, GET_DATA, SET_CATEGORY, SET_DATA } from "./actionTypes";

export interface SetCategoryAction {
    type : typeof SET_CATEGORY;
    payload : Categories
}
export interface GetCategoryAction {
    type : typeof GET_CATEGORY;
}
export interface GetDataAction {
    type : typeof GET_DATA;
}
export interface SetDataAction {
    type : typeof SET_DATA;
    payload : any[]
}
export interface GetPaginationAction {
    type : typeof GET_PAGINATION;
    payload : PaginationState
}
export type PaginationState = 'backward' | 'forward'
export type Categories = 'sport' | 'animal' | 'work' | ''
export type PhotoReducerActionType =
    | SetCategoryAction
    | SetDataAction
    | GetPaginationAction