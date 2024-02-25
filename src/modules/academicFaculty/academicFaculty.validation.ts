import { z } from "zod";

const create = z.object({
    body:z.object({
        id:z.string({required_error:'id is required'}),
 
        title:z.string({required_error:'title is required'}) ,
        createdAt:z.date().optional(), 
        updatedAt :z.date().optional()
    })

})