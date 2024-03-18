import evaluationRepository from "../repositories/EvaluationRepository.js"

const saveEvaluation = (evaluationModel) =>{
    return EvaluationsRepository.saveEvaluations(evaluationModel);
}

const getEvaluationById = (id) =>{
    return EvaluationsRepository.getEvaluationsById(id);
}

const getAllEvaluations = () =>{
    return EvaluationsRepository.getAllEvaluationss();
}

const deleteEvaluationById = (id) =>{
    return EvaluationsRepository.deleteEvaluationsById(id);
}

const updateEvaluationById = (id,evaluationModel) =>{
    return EvaluationsRepository.updateEvaluationsById(id,evaluationModel);
}

const service = {
    saveEvaluation,
    getAllEvaluations,
    getEvaluationById,
    deleteEvaluationById,
    updateEvaluationById
}

export default service;