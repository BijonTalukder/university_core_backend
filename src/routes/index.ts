import express from 'express'
import { acedemicFacultyRouter } from '../modules/academicFaculty/academicFaculty.routes'
const router = express.Router()
router.use('/academic-faculty',acedemicFacultyRouter)
export default router