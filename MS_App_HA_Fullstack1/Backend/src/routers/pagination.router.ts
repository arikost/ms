import { Router } from "express";
import { data, index } from "./data.router";

const router = Router()

router.get('/forward', (req,res) => {
    if(data.length > index[0] + 9){
        index[0] = index[0] + 9
    }
    res.send({data : data.slice(index[0], index[0] + 9)})
})
router.get('/backward', (req,res) => {
    if(index[0] > 0){
        index[0] = index[0] - 9
    }
    res.send({data : data.slice(index[0], index[0] + 9)})
})
export default router;