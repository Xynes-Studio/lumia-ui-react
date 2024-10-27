export interface FileInputProps {
  onValueChange: (value: string) => void;
  label?: string;
  validations?: ((file: File) => void)[]; // Array of validation functions
  onValidationFail?: () => void; // Callback on failed validation
  formProvider?: boolean;
  className?: string;
}
