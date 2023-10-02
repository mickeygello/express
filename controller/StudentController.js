import { body, validationResult } from "express-validator";
import { StudentRepo } from "../Repository/index.js"

const getAllStudent = async (req, res) => {
    try {
        const students = await StudentRepo.getAllStudent();
        res.status(200).json({
            message: 'Get all students successfully.',
            data: students
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

const getStudentById = async (req, res) => {
    try {
        const student = await StudentRepo.getStudentByID(req.params.id);
        res.status(200).json({
            message: 'Get student by id successfully.',
            data: student
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

const addStudent = async (req, res) => {

}

const deleteStudentById = async (req, res) => {

}


export default {
    getAllStudent,
    getStudentById,
    addStudent,

}