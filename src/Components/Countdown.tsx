import React from 'react'
import Box from '@mui/material/Box';
import { AppDispatch } from '../Reducer/store';
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from '../TypeDeclerations/Types';
type timeVal={
    val:number,

}
export const Countdown = ({val}:timeVal) => {
    let timerId=React.useRef<any>()
    let[time,settime]=React.useState(val)
    const useAppDispatch: () => AppDispatch = useDispatch;
    const dispatch = useAppDispatch();
     const quesIndex = useSelector((state: initialStateType) => state.index);
    React.useEffect(()=>{
      
         if(!timerId.current)
        {
             timerId.current=setInterval(()=>{
                settime((time)=>time-1)
            },1000)
            return
        }
        if(time===1)
        {    dispatch({ type: "nextQuestion", value:quesIndex + 1 });
             dispatch({type: "resetTimer", value:30})
             return ()=>clearInterval(timerId.current)
        }
      
    },[time])
   
  return (
   <div>
    <Box
      sx={{
        width: 150,
        height: 50,
        component:"span",
        backgroundColor: 'grey',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
      }}
    > <b>{time} seconds left</b>
        </Box>
  

   </div>
  )
}
