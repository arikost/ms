import { Categories, GetCategoryAction, GetDataAction, GetPaginationAction,  PaginationState, SetCategoryAction, SetDataAction,  } from "./actionInterface";
import { GET_CATEGORY, GET_PAGINATION, GET_DATA, SET_CATEGORY, SET_DATA } from "./actionTypes";

export const setCategory: (obj: Categories) => SetCategoryAction = (payload) =>({
    type : SET_CATEGORY,
    payload
})
export const getCategory: () => GetCategoryAction = () => ({
    type: GET_CATEGORY
})
export const getData: () => GetDataAction = () => ({
    type : GET_DATA
})
export const setData: (obj: any[]) => SetDataAction = (payload) => ({
    type : SET_DATA,
    payload
})
export const getPagination: (obj : PaginationState) => GetPaginationAction = (payload) => ({
    type: GET_PAGINATION,
    payload
})
