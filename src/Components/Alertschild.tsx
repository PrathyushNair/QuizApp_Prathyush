import React from 'react'
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
interface AlertPropType{
    text:string,
    alertBgColor:string,
    alertColor:string,
    fs:number|string
}
export const Alertschild = ({text,alertBgColor,alertColor,fs}:AlertPropType) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
    <Alert
      sx={{ backgroundColor: alertBgColor, color: alertColor, fontSize: fs }}
      severity="info"
    >
      {text}
    </Alert>
  </Stack>
  )
}
