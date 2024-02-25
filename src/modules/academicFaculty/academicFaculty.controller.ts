import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { AcademicFacultyService } from "./academicFaculty.service";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const insertIntoDb = catchAsync(async(req: Request, res: Response)=>{
    const result = await AcademicFacultyService.insertIntoDb(req.body);

sendResponse(res,{
    statusCode: httpStatus.OK,
    success: true,
    message: 'AcademicFaculty created successfully',
    data: result
})
})

export const academicFacultyController ={
    insertIntoDb
}