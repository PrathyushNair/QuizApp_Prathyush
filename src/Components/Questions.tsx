import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType, questionProps } from "../TypeDeclerations/Types";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { AppDispatch } from "../Reducer/store";
import Rulesmodal from "../Components/Rulesmodal";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import styles from "../Styles/Questions.module.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//React TSX Component //
export const Questions = (
  {
    element,
    fs = "20px",
    scoreBgColor = "#f50057",
    quesNumBgColor = "#f50057",
    scoreColor = "white",
    quesNumColor = "white",
    optionColor = "black",
    optionBgColor = "#cfe8fc",
    questionColor = "black",
    questionBgColor = "#cfe8fc",
    buttonColor = "white",
    buttonBgColor = "#f50057",
  }: questionProps,
  props: any
) => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const quesIndex = useSelector((state: initialStateType) => state.index);
  const question = useSelector((state: initialStateType) => state.questions);
  const { rulesDisplayed,score,lastquesClicked } =
    useSelector((state: initialStateType) => state);

  let [options, setOptions] = React.useState<string[] | number[] | undefined>(
    []
  );
  let [showRules, setShowRules] = React.useState<boolean>(false);

  const decodeHTML = function (html: string) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  const ansVerification = (a: string, b: string) => {
    if (a === b) {
      dispatch({ type: "updateScore", value: score + 1 });
    }
  };

  const handleQuestionChange = () => {
    if (quesIndex !== question.length - 1) {
      dispatch({ type: "nextQuestion", value: quesIndex + 1 });
    } else {
      dispatch({ type: "lastquesClicked", value: true });
    }
  };

  const handleAnswerSubmit = (e:React.ChangeEvent<HTMLInputElement>, quesIndex: number) => {
    e.preventDefault();
   
    ansVerification(element.correct_answer, e.target.innerText);
    handleQuestionChange();

    dispatch({
      type: "updateQuesAnswered",
      value: {
        ...element,
        index: quesIndex,
        myAnswer: e.target.innerText,
    
      },
    });
  };
  const handleViewScore = () => {
    dispatch({ type: "nextQuestion", value: quesIndex + 1 });
  };

  const handleExit = () => {
    dispatch({ type: "restartGame" });
  };

  React.useEffect(() => {
 
    if (!rulesDisplayed) {
      setShowRules(true);
      setTimeout(() => {
        dispatch({ type: "rulesDisplayed", value: true });
      }, 3000);
    }
    let answersOpt = [...element.incorrect_answers];
    answersOpt.splice(
      Math.floor(Math.random() * Math.floor(element.incorrect_answers.length)),
      0,
      element.correct_answer
    );
    setOptions(answersOpt);
  }, [quesIndex]);

  const theme = createTheme({
    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            
            "&:hover": {
              background: "#f50057",
              color: "white",
            },
          },
        },
      },
    },
  });
  return (
    <div style={{ marginTop: "100px" }}>
      {showRules && !rulesDisplayed && <Rulesmodal />}

      {/* Countdown timer */}
      {/* {rulesDisplayed&&<Countdown  val={timer}/>} */}
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: quesNumBgColor,
              color: quesNumColor,
              height: "auto",
              fontSize: fs,
              borderRadius: "16px",
              width: "auto",
              m: 4,
            }}
          >
            Question {quesIndex + 1}
          </Box>
          <Box
            sx={{
              bgcolor: questionBgColor,
              height: questionColor,
              borderRadius: "5px",
              m: 4,
              fontSize: fs,
            }}
          >
            {decodeHTML(element.question)}
          </Box>
          {options?.map((el, index) => (
            <ThemeProvider  key={index}theme={theme}>
              <MenuItem
             
                className={styles.optionsColor}
                sx={{
                  bgcolor: questionBgColor,
                  m: 4,
                  color: optionColor,
                  height: "auto",
                  fontSize: fs,
                  borderRadius: "16px",

                  cursor: "pointer",
                }}
                
                onClick={(e:any) => handleAnswerSubmit(e, quesIndex)}
                disabled={lastquesClicked ? true : false}
              >
                {decodeHTML(el.toString())}
              </MenuItem>
            </ThemeProvider>
          ))}
        </Container>
      </React.Fragment>

      {quesIndex === question.length - 1 ? (
        <Button
          sx={{ bgcolor: buttonBgColor, color: buttonColor }}
          onClick={handleViewScore}
          variant="contained"
        >
          View Score
        </Button>
      ) : (
        <Button
          sx={{ bgcolor: buttonBgColor, color: buttonColor }}
          onClick={handleQuestionChange}
          variant="contained"
        >
          Next
        </Button>
      )}

      <div>
        <Button
          sx={{ bgcolor: buttonBgColor, color: buttonColor, m: 5 }}
          onClick={handleExit}
          variant="contained"
        >
          Quit Game
        </Button>
      </div>
    </div>
  );
};
