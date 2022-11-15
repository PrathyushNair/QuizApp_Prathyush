import { useSelector } from "react-redux";
import "./App.css";
import { Questions } from "./Components/Questions";
import { QuizDetails } from "./Components/QuizDetails";
import { initialStateType } from "./TypeDeclerations/Types";
import { NoquestionsAlert } from "./Components/Alerts";
import { Finalpage } from "./Components/Finalpage";

function App() {
  const questions = useSelector((state: initialStateType) => state.questions);
  const noQuestionsAlert = useSelector(
    (state: initialStateType) => state.noQuestionsAlert
  );
  const index = useSelector((state: initialStateType) => state.index);

  const { quesFetchError, categFetchError } = useSelector(
    (state: initialStateType) => state
  );

  return (
    <div className="App">
      {(quesFetchError || categFetchError) && (
        <NoquestionsAlert />
      )}
      {questions.length === 0 && <QuizDetails />}
      {questions.length > 0 && index < questions.length && (
        <Questions element={questions[index]} />
      )}
      {questions.length === index && questions.length !== 0 && <Finalpage />}
    </div>
  );
}

export default App;
