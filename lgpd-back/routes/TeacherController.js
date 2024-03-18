import express from "express";
let router = express.Router();

import TeacherService from "../services/TeacherService.js"

router.post("/addTeacher", async function(req,res){
    const teacherModel = {
        name: req.body.name
    }

    const teacher = await TeacherService.saveTeacher(teacherModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function(req,res){
    const allTeachers = await TeacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/Teacher/:id", async function(req,res){
    const teacher = await TeacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function(req,res){
    const teacher = await TeacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.put("/updateTeacher/:id", async function(req,res){
    const teacherModel = {
        name: req.body.name
    }

    const teacher = await TeacherService.updateTeacherById(teacherModel);
    return res.status(200).json(teacher);
});

export default router;