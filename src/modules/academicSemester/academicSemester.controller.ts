
import {Request,Response} from 'express'
import { AcademicSemesterService } from './academicSemester.service'
const insertIntoDb = async(req:Request,res:Response)=>{
    try {
        const result = await AcademicSemesterService.insertIntoDb(req.body);
        res.send({success:true,message:'academic semester create successfully',data:result})
  
    } catch (error) {
        res.send(error)
    }
}

const getFromDb = async(req:Request,res:Response)=>{
    try {
        const result = await AcademicSemesterService.getFromDb()
        res.send({success:true,message:'academic semester fetch successfully',data:result})
          
    } catch (error) {
        res.send(error)
    }

}

const getSingleFromDb = async (req:Request,res:Response)=>{
    try {
        const result = await AcademicSemesterService.getSingleFromDb(req.params.id)
        res.send({success:true,message:'academic semester single fetch successfully',data:result})
        
    } catch (error) {
        res.send(error)
    }
}

const insertOrUpdateDb = async (req:Request,res:Response) => {
    const result = await AcademicSemesterService.insertOrUpdateDb(req.params.id,req.body);
    res.send({success:true,message:'academic semester insert or update successfully',data:result})
  
    
}
export const AcademicSemesterController={
    insertIntoDb,
    getFromDb,
    getSingleFromDb,
    insertOrUpdateDb
}