import { useContext } from "react";
import { HorizontalModalContext } from "../Contexts/Modals/HorizontalModalProvider";

const useHorizontalModal = () => {
  const context = useContext(HorizontalModalContext);
  if (context === undefined) {
    throw new Error("useHorizontalModal must be used within a HorizontalModalProvider");
  }
  return context;
};

export default useHorizontalModal;
