import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import { text } from "stream/consumers";
import { initialStateType } from "../TypeDeclerations/Types";
import { Alertschild } from "./Alertschild";
export const NoquestionsAlert = ({
  alertBgColor = "#f50057",
  alertColor = "white",
  fs = "16px",
}) => {
  const { quesFetchError,categFetchError } = useSelector((state: initialStateType) => state);



  return (
    <div>
      {(!quesFetchError && !categFetchError)&& <Alertschild text={"No Questions found...Please change your settings"} alertBgColor={alertBgColor} alertColor={alertColor} fs={fs }/>
      }
    {quesFetchError &&<Alertschild text={"An error occured while updating categories. Please refresh browser and try again."} alertBgColor={alertBgColor} alertColor={alertColor} fs={fs }/>
    }
    {categFetchError &&<Alertschild text={"An error occured while updating categories. Please refresh browser and try again."} alertBgColor={alertBgColor} alertColor={alertColor} fs={fs }/>
  
    }
    </div>
    
  );
};
