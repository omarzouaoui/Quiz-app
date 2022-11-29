
/**QUESTIONS */

/**GET questions */
export async function getQuestion (req, res) {
    res.json("questions api GET");
}

/**POST questions */
export async function insertQuestions (req, res) {
    res.json("questions api POST");
}

/**DELETE questions */
export async function dropQuestions (req ,res) {
    res.json("questions api DELETE")
}

/**RESULT */

/**GET result*/
export async function getResult (req, res) {
    res.json("result api GET")
}
 
/**POST result*/
export async function storeResult (req, res) {
    res.json("result api POST")
}

/**DELETE result */
export async function dropResult (req, res) {
    res.json("result api DELETE")
}