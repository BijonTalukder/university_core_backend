import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const insertIntoDb = async(data:any)=>{
    const result = await prisma.academicSemester.create({data});
    return result;

}
const getFromDb = async()=>{
    const result = await prisma.academicSemester.findMany()
    return result;
}

const getSingleFromDb = async(id)=>{
    const result = await prisma.academicSemester.findUnique({where:id})
    return result;

}

const insertOrUpdateDb = async(id,data)=>{
    const isExist = await prisma.academicSemester.findUnique({
        where:{id}
    })
if(isExist){
    const result = await prisma.academicSemester.update({
        where:{id},
        data:{
            data
        }
    })
}
}

export const AcademicSemesterService ={
    insertIntoDb,
    insertOrUpdateDb,
    getFromDb,
    getSingleFromDb
}