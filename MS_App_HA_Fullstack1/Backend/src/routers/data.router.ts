import { Router } from "express";
import axios from "axios";
import { dataProps } from "../models/data.modal";
import asyncHandler from 'express-async-handler'

export var data:dataProps[] = [];
export var index:number[] = [0];

const router = Router()

router.get('/getData', asyncHandler( async (req,res) =>{
    const {category} = req.query;
    console.log(category) 
    index[0] = 0; // set index to 0
    data = [] //clear the data from data array
    await axios.get("https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=" + category?.toString()).then(
        res => {
            const unsorted_data:dataProps[] = res.data.hits;
            data = unsorted_data.sort((a, b) => a.id - b.id); // sorting by id
        }
    ).catch(err => {
        console.log('Error: ', err.message);
    });
    console.log(data)
    res.send({data : data.slice(index[0], index[0] + 9)});
}))

export default router;