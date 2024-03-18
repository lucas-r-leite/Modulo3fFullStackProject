import express from "express";
let router = express.Router();

import CourseService from "../services/CourseService.js"

router.post("/addCourse", async function(req,res){
    const courseModel = {
        name: req.body.name
    }

    const course = await CourseService.saveCourse(courseModel);
    return res.status(200).json(course);
});

router.get("/getAllCourses", async function(req,res){
    const allCourses = await CourseService.getAllCourses();
    return res.status(200).json(allCourses);
});

router.get("/Course/:id", async function(req,res){
    const course = await CourseService.getCourseById(req.params.id);
    return res.status(200).json(course);
});

router.delete("/deleteCourse/:id", async function(req,res){
    const course = await CourseService.deleteCourseById(req.params.id);
    return res.status(200).json(course);
});

router.put("/updateCourse/:id", async function(req,res){
    const courseModel = {
        name: req.body.name
    }

    const course = await CourseService.updateCourseById(courseModel);
    return res.status(200).json(course);
});

export default router;