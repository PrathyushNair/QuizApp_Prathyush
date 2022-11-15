import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { initialStateType } from "../TypeDeclerations/Types";
import { getCategories, getQuestions, settings } from "../Reducer/action";
import { AppDispatch } from "../Reducer/store";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormHelperText from "@mui/material/FormHelperText";
import Backdrop from '@mui/material/Backdrop';


export const QuizDetails = ({
  marginTop = "200px",
  indiDivMarginTop = "20px",
  bordercolor = "black",
  borderRadius = 4,
  fs = 16,
  onFocusColor = "green",
  buttonFontSize = 16,
  buttonColor = "white",
  buttonBackgroundColor = "#f50057",
  onFocusBoxShadow = "red",
  selectTagColor = "black",
}) => {
  //Material UI custom setup begins here//
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(10),
    },
    "& .MuiInputBase-input": {
      borderRadius: borderRadius,

      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${bordercolor}`,
      fontSize: fs,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),

      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: onFocusColor,
        boxShadow: `0 0 0 0.2rem ${onFocusBoxShadow}`,
      },
    },
  }));
  //Material UI custom setup ends here//

  //Variable declerations
  let [emptyField, setEmptyField] = React.useState<boolean>(false);
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const style = { marginTop };
  const {categories } = useSelector(
    (state: initialStateType) => state
  );
  const {
    questionLevel,
    questionCategorySelected,
    questionLevelSelected,
    numOfQuestionsSelected,
    questionTypeSelected,
    questionCategory,
    numOfQuestions,
    questionType,
  } = useSelector((state: initialStateType) => state.selectoptions);
  const [open, setOpen] = React.useState(false);
  
  //Function declerations

  const handleChange = (
    e: { target: { name: string; value: string } } | SelectChangeEvent<unknown>
  ) => {
    dispatch(settings(e));
    setOpen(false)
  };

  const handleSubmit = () => {
    
    if (
      questionLevel === "Select Difficulty Level" ||
      questionCategory === "All" ||
      numOfQuestions === "Select Number Of Questions" ||
      questionType === "Select Question Type"
    ) {
      setEmptyField(true);
    } else {
      setOpen(true)
      dispatch(
        getQuestions(
          numOfQuestions,
          questionCategory,
          questionLevel,
          questionType
        )
      );
      
     
      
    }
  };

  
  const handleClose = () => {
    setOpen(false);
  };


  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

 

  return (
    <div style={style}>
      <b style={{fontSize:"80px",margin:"auto"}}>Quiz App</b>
      <div
        style={{
          marginTop: indiDivMarginTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ width: 500 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ color: selectTagColor }}
            aria-label="Category of question"
            value={questionCategory}
            input={<BootstrapInput />}
            name="category"
            data-testid="categoryOfQuestion"
            onChange={(e) => handleChange(e)}             //user can change the quiz settings.
          > 
            <MenuItem value="All">{categories.length===0? "Please wait. Getting categories...":"Select Question Category"}</MenuItem>
            {categories.length > 0 &&
              categories.map((el) => (
                <MenuItem
                  aria-label="categoriesLabel"
                  value={el.id}
                  key={el.id}
                  data-testid="categoryName"
                >
                  {el.name}
                </MenuItem>
              ))}
          </Select>
          {!questionCategorySelected && emptyField && (     //validation for non empty fields.
            <FormHelperText sx={{ color: "red" }}>
              Required Field!
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div
        style={{
          marginTop: indiDivMarginTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ width: 500 }}>
          <Select
            labelId="demo-simple-select-label"
            id="numOfquestions"
            sx={{ color: selectTagColor }}
            aria-label="NumberOfQuestions"
            value={numOfQuestions}
            onChange={(e) => handleChange(e)}
            input={<BootstrapInput />}
            name="numofquest"
            data-testid="numofquestions"
          >
            <MenuItem  aria-label="listBox" value={"Select Number Of Questions"}>
              Select Number Of Questions
            </MenuItem>
            <MenuItem  placeholder="listBox" role={"listBox"} value="5">5</MenuItem>
            <MenuItem  role={"listBox"}value={"15"}>15</MenuItem>
            <MenuItem role={"listBox"} value={"25"}>25</MenuItem>
            <MenuItem  role={"listBox"} value={"50"}>50</MenuItem>
          </Select>
          {!numOfQuestionsSelected && emptyField && (
            <FormHelperText sx={{ color: "red" }}>
              Required Field!
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div
        style={{
          marginTop: indiDivMarginTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ width: 500 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ color: selectTagColor }}
            aria-label="DifficultyOfQuestion"
            value={questionLevel}
            input={<BootstrapInput />}
            name="difficulty"
            data-testid="difficultyLevel"
            onChange={(e) => handleChange(e)}   
          >
            <MenuItem data-testid="difficultyLevelOption" value="Select Difficulty Level">
              Select Difficulty Level
            </MenuItem>
            <MenuItem data-testid="difficultyLevelOption"value="easy">Easy</MenuItem>
            <MenuItem data-testid="difficultyLevelOption"value="medium">Medium</MenuItem>
            <MenuItem data-testid="difficultyLevelOption"value="hard">Hard</MenuItem>
          </Select>
          {!questionLevelSelected && emptyField && ( 
            <FormHelperText sx={{ color: "red" }}>
              Required Field!
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div
        style={{
          marginTop: indiDivMarginTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ width: 500 }}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{ color: selectTagColor }}
            aria-label="TypeOfQuestions"
            value={questionType}
            input={<BootstrapInput />}
            name="questiontype"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="Select Question Type">
              Select Question Type
            </MenuItem>
            <MenuItem value="multiple">Multiple Choice Questions</MenuItem>
            <MenuItem value="boolean">True or False</MenuItem>
          </Select>
          {!questionTypeSelected && emptyField && (
            <FormHelperText sx={{ color: "red", size: "large" }}>
              Required Field!
            </FormHelperText>
          )}
        </FormControl>
      </div>
      {/* {loading && <CircularProgress />} */}
      <div
        style={{
          marginTop: indiDivMarginTop,
          justifyContent: "center",
          display: "flex",
          width: "100%",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <Button
          sx={{
            backgroundColor: buttonBackgroundColor,
            color: buttonColor,
            fontSize: buttonFontSize,
            marginTop: 5,
          }}
          onClick={() => handleSubmit()}    //on sumbit the data is fetched via API for the selected categories
          variant="contained"
          aria-label="startButton"
        >
          Start Game
        </Button>
        { <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop> }
      </div>
    </div>
  );
};
