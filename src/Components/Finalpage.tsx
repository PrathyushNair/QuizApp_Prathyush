import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { initialStateType } from '../TypeDeclerations/Types'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { AppDispatch } from "../Reducer/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export const Finalpage = ({scoreBgColor = "#f50057", scoreColor = "white",fs = "20px",}) => {
    const {score,questions}=useSelector((state:initialStateType)=>state)
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

      const useAppDispatch: () => AppDispatch = useDispatch;
      const dispatch = useAppDispatch();
      const handleExit = () => {
        dispatch({ type: "restartGame"});
      };

      const decodeHTML = function (html: string) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      };

      const theme = createTheme({
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                
                "&:hover": {
                  background: "blue",
                  color: "white",
                },
              },
            },
          },
        },
      });
  return (
    <div>
        <div style={{display:'flex',justifyContent:"center"}}>
        <Box
            sx={{
              bgcolor: scoreBgColor,
              color: scoreColor,
              height: "auto",
              fontSize: fs,
              borderRadius: "16px",
              m: 4,
              width:"30%"
            }}
          >
            Total Score: {score}/{questions.length}
          </Box>  
        </div>
       <ThemeProvider theme={theme}>
       <Button 
         sx={{
            bgcolor: scoreBgColor,
            color: scoreColor,
            height: "auto",
            fontSize: fs,
            borderRadius: "16px",
            m: 4,
          }}onClick={handleExit}>
            Restart Game
        </Button>

       </ThemeProvider>
        <div>
            <Box sx={{ width: '60%',margin:"auto" }}>
                {
                    questions.map((el,index)=>(
                        <Stack key={index} sx={{m:3}}>
                            <Item sx={{fontSize:fs}}>{decodeHTML(el.question)}
                            <p style={{color:"green"}}>Correct answer:{decodeHTML(el.correct_answer.toString())}</p>
                            <p style={el.correct_answer===el.myAnswer?{color:"green"}:{color:"red"}}>{el.myAnswer===undefined ? "Did not attempt" :`Your answer:${decodeHTML(el.myAnswer.toString())}`}</p>
                            </Item>
                            
                        </Stack>
                    ))
                }
            </Box>
        </div>
     
    </div>
    
   
    
  )
}
