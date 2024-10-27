import React, { forwardRef, useCallback, useState } from "react";
import { Text } from "@texts/index";
import { cx } from "@utils/cx";
import { FileInputProps } from "./fileInput.types";
import {
  FileInputContainer,
  FileInputWrapper,
  FileUpload,
  FileName,
} from "./fileInput.styles";
import { color } from "@shared/styles";
import { v4 as uuid } from "uuid";
import { useForms } from "@app/Contexts/formProvider/formProvider";

const FileInputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  FileInputProps
> = (
  {
    onValueChange,
    label,
    validations = [],
    onValidationFail,
    formProvider = false,
    ...props
  },
  ref
) => {
  const key = uuid();

  const [fileName, setFileName] = useState<string | null>(null);
  const { addError, removeError } = useForms(formProvider) ?? {};

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const filePath = URL.createObjectURL(file);
        setFileName(file.name);

        // Run validations if provided
        const failedValidation = validations.some((validate) => {
          try {
            validate(file);
            return false;
          } catch {
            return true;
          }
        });

        if (failedValidation) {
          onValidationFail?.();
          if (onValidationFail && addError) {
            addError(key);
          }
        } else {
          onValueChange(filePath);
          removeError && removeError(key);
        }
      }
    },
    [onValueChange, validations, onValidationFail]
  );

  return (
    <FileInputContainer className={cx("lmFileInputContainer", props.className)}>
      {label ? (
        <Text textCase="capitalize" className={cx("lmFileInputLabel")}>
          {label}:
        </Text>
      ) : null}

      <FileInputWrapper className={cx("lmFileInputWrapper")}>
        <FileUpload type="file" ref={ref} onChange={handleChange} {...props} />
        {fileName && (
          <FileName className={cx("lmFileName")}>
            <Text type="caption" color={color?.foreground}>
              {fileName}
            </Text>
          </FileName>
        )}
      </FileInputWrapper>
    </FileInputContainer>
  );
};

export const FileInput = forwardRef(FileInputComponent);
