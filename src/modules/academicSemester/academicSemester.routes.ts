import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';


const router = express.Router();
router.post('/create',AcademicSemesterController.insertIntoDb,validateRequest(academicSemesterValidation.create));
router.get('/',AcademicSemesterController.getFromDb);
router.get('/:id',AcademicSemesterController.getSingleFromDb);
router.patch('/update/:id',AcademicSemesterController.insertOrUpdateDb);