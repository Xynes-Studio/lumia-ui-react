import { useEffect, useState } from "react";
import { background, color } from "../../../shared/styles";

type UseBackgroundColorAlertReturnType = [string, (type: "flat" | "outlined" | "default") => void, (status: "success" | "warning" | "error" | undefined) => void];

const useBackgroundColorAlert = (): UseBackgroundColorAlertReturnType =>{
    const [bgColor, setBgColor] = useState(color?.primary);
    const [type, setType] = useState<"flat" | "outlined" | "default">('default');
    const [status, setStatus] = useState<"success" | "warning" | "error" | undefined>();

    useEffect(() => {
      switch (type) {
        case "outlined":
          setBgColor(color?.tertiary);
          break;
  
        default:
          setBgColor(color?.primary);
          break;
      }
  
      if (status != undefined) {
        switch (status) {
          case "success":
            setBgColor(background.positive);
            break;
          case "warning":
            setBgColor(background.warning);
            break;
          case "error":
            setBgColor(background.negative);
            break;
  
          default:
            break;
        }
      }
    }, [type, status]);

    return [bgColor, setType, setStatus];
}

export default useBackgroundColorAlert;