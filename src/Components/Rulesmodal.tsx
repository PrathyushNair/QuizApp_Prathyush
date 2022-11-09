import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default function BasicModal({modalTextColor="white",bgColor="black"}) {
    const [open, setOpen] = React.useState(false);
    let timerId=React.useRef<any>()
    let[time,settime]=React.useState(3)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    React.useEffect(()=>{
        handleOpen()
    },[])

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: bgColor,
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };
  
    React.useEffect(()=>{
      
      if(!timerId.current)
     {
          timerId.current=setInterval(()=>{
             settime((time)=>time-1)
         },1000)
         return
     }
     if(time===0)
     {   
          return ()=>clearInterval(timerId.current)
     }
   
 },[time])
    return (
      <div>
  
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          
        >
          <Box sx={style}>
            <Typography sx={{ color:modalTextColor}}id="modal-modal-title" variant="h6" component="h2">
              Basic Rules.
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color:modalTextColor}}>
              You are allowed to choose the option only once. After choosing an option you will be directed to the next question.
              
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, color:modalTextColor}}>
             You will retun to screen in {time} seconds
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
  