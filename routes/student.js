import express from 'express';
import {body, validationResult} from 'express-validator'
import { StudentController } from '../controller/index.js';

const studentRouter = express.Router();
studentRouter.get('/', StudentController.getAllStudent);
studentRouter.get('/:id', StudentController.getStudentById);
export default studentRouter