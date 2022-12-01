import Questions from "../models/questionSchema.js";
import Results from "../models/resultShema.js";
import questions, { answers } from "../database/data.js";
import { json } from "express";

/**QUESTIONS */

/**GET questions */
export async function getQuestion (req, res) {
    try{
        const q = await Questions.find();
        res.json(q)
    } catch(err){
        res.json({err})
    }
}

/**POST questions */
export async function insertQuestions (req, res) {
    try{
        Questions.insertMany({ questions, answers }, function(err, data){
            res.json({msg : "Data Saved"})
        })
    } catch(err){
        res.json({err});
    }
}

/**DELETE questions */
export async function dropQuestions (req ,res) {
    try{
        await Questions.deleteMany();
        res.json({msg : "Question deleted"})
    } catch(err){
        res.json({err});
    }
}

/**RESULT */

/**GET result*/
export async function getResult (req, res) {
    try{
        const r = await Results.find();
        res.json(r)
    } catch(err){
        res.json({err})
    }
}
 
/**POST result*/
export async function storeResult (req, res) {
    try{
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data not provided');

        Results.create({ username, result, attempts, points, achived }, function(err, data){
            res.json({ msg : 'Result Saved' })
        })
    }catch(err){
        res.json({err})
    }
}

/**DELETE result */
export async function dropResult (req, res) {
    try{
        await Results.deleteMany();
        res.json({ msg : 'Result Deleted' })
    } catch(err){
        res.json({err})
    }
}