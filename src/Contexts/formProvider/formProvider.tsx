import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import { Button } from "@components/index";

interface FormContextType {
  addError: (key: string) => void;
  removeError: (key: string) => void;
  errors: string[];
  disabled: boolean;
}

interface FormProviderProps {
  children: ReactNode;
  handleSubmit: () => void;
  submitButtonLabel?: string;
  submitButtonIcon?: React.FC;
  submitButtonClassName?: string;
  submitButton?: boolean;
  disabled?: boolean;
}

const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: React.FC<FormProviderProps> = ({
  children,
  handleSubmit,
  submitButtonLabel,
  submitButtonIcon,
  submitButtonClassName,
  submitButton = true,
  disabled = false,
}) => {
  const [errors, setErrors] = useState<string[]>([]);

  // Memoize addError using useCallback
  const addError = useCallback((key: string) => {
    setErrors((prevErrors) => {
      if (!prevErrors.includes(key)) {
        return [...prevErrors, key];
      }
      return prevErrors;
    });
  }, []);

  // Memoize removeError using useCallback
  const removeError = useCallback((key: string) => {
    setErrors((prevErrors) => prevErrors.filter((error) => error !== key));
  }, []);

  // Memoize onSubmit using useCallback
  const onSubmit = useCallback(() => {
    if (!disabled && errors.length === 0) {
      handleSubmit();
    } else {
      console.warn("Form has errors or is disabled, cannot submit.");
    }
  }, [errors, handleSubmit, disabled]);

  // Memoize the context value
  const contextValue = useMemo(
    () => ({ addError, removeError, errors, disabled }),
    [addError, removeError, errors, disabled]
  );

  return (
    <FormContext.Provider value={contextValue}>
      {children}
      {submitButton && (
        <Button
          label={submitButtonLabel || "Submit"}
          onClick={onSubmit}
          disabled={errors.length !== 0 || disabled}
          icon={submitButtonIcon}
          className={submitButtonClassName}
        />
      )}
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
