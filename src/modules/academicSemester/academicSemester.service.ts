import { AcademicSemester, Prisma, PrismaClient } from "@prisma/client";
import { IGenericResponse } from "../../interfaces/common";
import pick from "../../shared/pick";
import { paginationHelpers } from "../../helpers/paginationHelpers";
import { IAcademicSemesterFilterRequest, IAcademicSemesterOptionRequest } from "./academicSemester.interface";

const prisma = new PrismaClient();

const insertIntoDb = async(data:any)=>{

    const result = await prisma.academicSemester.create({data});
    
    return result;

}
const getFromDb = async(filters:IAcademicSemesterFilterRequest,options:IAcademicSemesterOptionRequest):Promise<IGenericResponse<AcademicSemester[]>>=>{
   
   const {page,limit,skip} = paginationHelpers.calculatePagination(options);
  const {searchTerm,...filterData} = filters;
  const andCondition = [];
  if(searchTerm){
    andCondition.push({
        OR:['title','code','startMonth','endMonth'].map(filed=>({
            [filed]:{
                contains:searchTerm,
                mode:'insensitive'
            }
        }))
    })


  }

  if(Object.keys(filterData).length>0){
    andCondition.push({
        AND:
            Object.keys(filterData).map(key=>({
[key]:{
    equals:(filterData as any)[key]
}
            }))
        
    })
  }
  const whereCondition:Prisma.AcademicSemesterWhereInput=andCondition.length>0?{AND:andCondition}:{}
    const result = await prisma.academicSemester.findMany({
       where:whereCondition,
        skip,
        take:limit,

    })
    const total = await prisma.academicSemester.count()

    return {data:result,
        meta:{
total:total,
page:page,
limit:limit
    }};
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