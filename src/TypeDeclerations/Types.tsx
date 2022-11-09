

export type resultsOfAPI=
{
    category:string,
    type:string,
    difficulty:string,
    correct_answer:string,
    incorrect_answers:Array<string>,
    question:string
    myAnswer?:string|number
    
}

export type categoriesObj={
    id:string | number | undefined ,
    name:String
}
export type questionDetailsResponse=
{
    response_code:Number|string,
    results:resultsOfAPI[]
}
export type questionProps = {
    element: resultsOfAPI;
    fs?: string;
    scoreBgColor?: string;
    quesNumBgColor?: string;
    scoreColor?: string;
    quesNumColor?: string;
    optionColor?: string;
    optionBgColor?: string;
    questionColor?: string;
    questionBgColor?: string;
    buttonColor?: string;
    buttonBgColor?: string;
  };
export type initialStateType={
    loading:Boolean,
    categories:categoriesObj[]
    selectoptions:{
        questionLevel:String,
        questionLevelSelected:Boolean,
        questionCategory:String,
        questionCategorySelected:Boolean,
        numOfQuestions:Number|String,
        numOfQuestionsSelected:Boolean,
        questionType:String,
        questionTypeSelected:Boolean,
        
    },
    quesFetchError:boolean,
    categFetchError:boolean,
    rulesDisplayed:boolean,
    timer:number,
    questions:resultsOfAPI[],
    noQuestionsAlert:boolean,
    index:number,
    score:number,
    lastquesClicked:boolean,
   
}
