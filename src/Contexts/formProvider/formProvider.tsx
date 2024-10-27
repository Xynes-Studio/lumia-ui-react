import { Button } from "@components/index";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";

interface FormContextType {
  addError: (key: string) => void;
  removeError: (key: string) => void;
  hasErrors: boolean;
}

const FormContext = createContext<FormContextType | null>(null);

interface FormProviderProps {
  children: ReactNode;
  handleSubmit: () => void; // Allow passing the submit method directly as a prop
  submitButtonLabel?: string;
  submitButtonIcon?: React.FC;
  submitButtonClassName?: string;
}

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  handleSubmit,
  submitButtonLabel,
  submitButtonIcon,
  submitButtonClassName,
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  const addError = useCallback((key: string) => {
    setErrors((prevErrors) => [...new Set([...prevErrors, key])]);
  }, []);

  const removeError = useCallback((key: string) => {
    setErrors((prevErrors) => prevErrors.filter((error) => error !== key));
  }, []);

  const hasErrors = errors.length > 0;

  const onSubmit = () => {
    if (!hasErrors) {
      handleSubmit(); // Call the provided handleSubmit method if no errors
    } else {
      console.warn("Form has errors, cannot submit.");
    }
  };

  return (
    <FormContext.Provider value={{ addError, removeError, hasErrors }}>
      {children}
      <Button
        label={submitButtonLabel || "Submit"}
        onClick={onSubmit}
        disabled={hasErrors}
        icon={submitButtonIcon}
        className={submitButtonClassName}
      />
    </FormContext.Provider>
  );
};

export const useForms = (useProvider: boolean) => {
  const context = useContext(FormContext);

  if (useProvider && !context) {
    throw new Error("useForms must be used within a FormProvider");
  }

  return context;
};
