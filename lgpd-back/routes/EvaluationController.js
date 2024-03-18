import express from "express";
let router = express.Router();

import EvaluationService from "../services/EvaluationService.js"

router.post("/addEvaluation", async function(req,res){
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await EvaluationService.saveEvaluation(evaluationModel);
    return res.status(200).json(evaluation);
});

router.get("/getAllEvaluations", async function(req,res){
    const allEvaluations = await EvaluationService.getAllEvaluations();
    return res.status(200).json(allEvaluations);
});

router.get("/Evaluation/:id", async function(req,res){
    const evaluation = await EvaluationService.getEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.delete("/deleteEvaluation/:id", async function(req,res){
    const evaluation = await EvaluationService.deleteEvaluationById(req.params.id);
    return res.status(200).json(evaluation);
});

router.put("/updateEvaluation/:id", async function(req,res){
    const evaluationModel = {
        concept: req.body.concept
    }

    const evaluation = await EvaluationService.updateEvaluationById(evaluationModel);
    return res.status(200).json(evaluation);
});

export default router;