import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";

/**Redux action*/
import * as Action from "../redux/question_reducer";

/**fetch question hook to fetch api data and set value to store*/
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError : null }) 

    useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading : true }));

        /**async function fetch backend data*/
        (async () => {
            try{
                const [{questions, answers}] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data)

                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : { questions }}))
                    
                    /**dispatch an action*/
                    dispatch(Action.startExamAction({ question : questions, answers }))
                }else{
                    throw new Error("No question Avalible")
                }

            } catch (err){
                setGetData(prev => ({...prev, isLoading :false}));
                setGetData(prev => ({...prev, serverError : err}));
            }
        })();
    },[dispatch]);

    return [getData, setGetData];
} 

/**MoveAction Dispatch function*/
export const MoveNextQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.moveNextAction()); /**Increase the trace by 1 */
    }catch (err){
        console.log(err);
    }
}

/**PrevAction Dispatch function*/
export const MovePrevQuestion = () => async (dispatch) => {
    try{
        dispatch(Action.movePrevAction());/**Decrease the trace by 1 */
    }catch (err){
        console.log(err);
    }
}
/**
 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, 
 but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render. 
  

 */