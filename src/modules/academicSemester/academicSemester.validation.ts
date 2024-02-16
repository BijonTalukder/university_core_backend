import {z} from 'zod'
const create = z.object({
    body:z.object({
        year:z.number({
            required_error:"year is required"
        })
    })
})

export const academicSemesterValidation ={
    create
}