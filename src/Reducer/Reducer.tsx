import { initialStateType } from "../TypeDeclerations/Types";

export const initialState: initialStateType = {
  loading: false,
  categories: [],
  selectoptions: {
    questionLevel: "Select Difficulty Level",
    questionLevelSelected: false,
    questionCategory: "All",
    questionCategorySelected: false,
    numOfQuestions: "Select Number Of Questions",
    numOfQuestionsSelected: false,
    questionType: "Select Question Type",
    questionTypeSelected: false,
  },
  quesFetchError: false,
  categFetchError: false,
  rulesDisplayed: false,
  timer: 30,
  questions: [],
  noQuestionsAlert: false,
  index: 0,
  score: 0,
  lastquesClicked: false,
  
};

export const Reducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case "Loading": {
      return { ...state, loading: action.value };
    }

    case "getCat": {
      return { ...state, categories: action.value };
    }
    case "changeCategory": {
      return {
        ...state,
        selectoptions: {
          ...state.selectoptions,
          questionCategory: action.value,
          questionCategorySelected: true,
        },
        noQuestionsAlert: false,
      };
    }
    case "changeLevel": {
      return {
        ...state,
        selectoptions: {
          ...state.selectoptions,
          questionLevel: action.value,
          questionLevelSelected: true,
        },
        noQuestionsAlert: false,
      };
    }
    case "changeNumOfQuestions": {
      return {
        ...state,
        selectoptions: {
          ...state.selectoptions,
          numOfQuestions: action.value,
          numOfQuestionsSelected: true,
        },
        noQuestionsAlert: false,
      };
    }
    case "changeQuesType": {
      return {
        ...state,
        selectoptions: {
          ...state.selectoptions,
          questionType: action.value,
          questionTypeSelected: true,
        },
        noQuestionsAlert: false,
      };
    }
    case "loadQuestions": {
      return { ...state, questions: action.value, noQuestionsAlert: false };
    }
    case "loadNoQuestionsAlert": {
      return { ...state, noQuestionsAlert: action.value };
    }
    case "rulesDisplayed": {
      return { ...state, rulesDisplayed: action.value };
    }
    case "nextQuestion": {
      return { ...state, index: action.value, timer: 20 };
    }
    case "handleExit": {
      return { ...state, questions: action.value };
    }
    case "resetTimer": {
      return { ...state, timer: action.value };
    }
    case "updateScore": {
      return { ...state, score: action.value };
    }
    case "updateQuesAnswered": {
     
      state.questions.map((el,ind)=>{
        if(ind===action.value.index)
        {
            state.questions[ind]=action.value
        }
      })
     return {...state}
    }
    case "restartGame": {
      return {
        ...state,
        selectoptions: {
          ...state.selectoptions,
          questionLevel: "Select Difficulty Level",
          questionLevelSelected: false,
          questionCategory: "All",
          questionCategorySelected: false,
          numOfQuestions: "Select Number Of Questions",
          numOfQuestionsSelected: false,
          questionType: "Select Question Type",
          questionTypeSelected: false,
        },
        quesFetchError: false,
        categFetchError: false,
        rulesDisplayed: false,
        timer: 30,
        questions: [],
        noQuestionsAlert: false,
        index: 0,
        score: 0,
        lastquesClicked: false,
       
      };
    }
    case "quesFetchError": {
      return { ...state, quesFetchError: true };
    }
    case "categFetchError": {
      return { ...state, categFetchError: true };
    }
    case "lastquesClicked": {
      return { ...state, lastquesClicked: true };
    }
    default: {
      return { ...state };
    }
  }
};
