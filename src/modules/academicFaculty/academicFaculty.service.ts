import { AcademicFaculty, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const insertIntoDb = async(data:AcademicFaculty)=>{
    const result = await prisma.academicFaculty.create({data});
    return result;
}

export const AcademicFacultyService = {
    insertIntoDb
}