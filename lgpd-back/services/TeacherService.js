import teacherRepository from "../repositories/TeacherRepository.js"

const saveTeacher = (teacherModel) =>{
    return TeacherRepository.saveTeacher(teacherModel);
}

const getTeacherById = (id) =>{
    return TeacherRepository.getTeacherById(id);
}

const getAllTeachers = () =>{
    return TeacherRepository.getAllTeachers();
}

const deleteTeacherById = (id) =>{
    return TeacherRepository.deleteTeacherById(id);
}

const updateTeacherById = (id,teacherModel) =>{
    return TeacherRepository.updateTeacherById(id,teacherModel);
}



const service = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default service;