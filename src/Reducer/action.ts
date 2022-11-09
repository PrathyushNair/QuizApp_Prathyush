import { SelectChangeEvent } from "@mui/material/Select";

export const settings =
  (
    e: { target: { name: string; value: string } } | SelectChangeEvent<unknown>
  ) =>
  (dispatch: (arg0: { type: string; value: any }) => void) => {
    switch (e.target.name) {
      case "category": {
        return dispatch({ type: "changeCategory", value: e.target.value });
      }
      case "difficulty": {
        
        return dispatch({ type: "changeLevel", value: e.target.value });
      }
      case "questiontype": {
        return dispatch({ type: "changeQuesType", value: e.target.value });
      }
      case "numofquest": {
        return dispatch({
          type: "changeNumOfQuestions",
          value: e.target.value,
        });
      }
    }
  };
export const getQuestions =
  ( 
    numOfQuestions: String | Number,
    questionCategory: String,
    questionLevel: String,
    questionType: String
  ) =>
  (dispatch: (arg0: { type: string; value: any }) => void) => {
  
    dispatch({ type: "Loading", value: true });
    fetch(`https://opentdb.com/api.php?amount=${numOfQuestions}&difficulty=${questionLevel}&type=${questionType}&category=${questionCategory}`)
    .then((r)=>r.json())
    .then((r)=>{
      
      if(r.results.length>0)
      {
         dispatch({type:"loadQuestions",value:r.results})
      }
      else
      {
         dispatch({type:"loadNoQuestionsAlert",value:true})
      }
 
      dispatch({type:"Loading",value:false})
    })
    .catch((e)=>{
      dispatch({type:"quesFetchError",value:true})
  })
    
  };
export const getCategories =
  () => (dispatch: (arg0: { type: string; value: any }) => void) => {

        fetch("https://opentdb.com/api_category.php")
        .then((r)=>r.json())
        .then((r)=>{
         
          dispatch({ type: "getCat", value: r.trivia_categories });
        })
        .catch((error)=>{
          dispatch({type:"categFetchError",value:true})
        })

  };
