import Student from "../model/StudentModel.js";

const getAllStudent = async () => {
   const students = await Student.find().exec();
   return students;
}

const getStudentByID = async (id) =>{
    const student = await Student.findById(id).exec();
    return student;
}

const addNewStudent = async () =>{

}

const deleteStudent = async () =>{

}

export default {
    getAllStudent,
    getStudentByID,
    addNewStudent,
    deleteStudent
}