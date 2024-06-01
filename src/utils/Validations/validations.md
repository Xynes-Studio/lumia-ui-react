## Description
This set of validation utilities provides a variety of functions to validate different types of input data. It includes general validations like required fields and email format, number validations, length validations, phone number validations, URL and IP address validations, password strength checks, and date validations. These utilities throw errors when the validations fail, making them easy to integrate into form handling or other input validation processes.

## Use Case
These validation utilities are ideal for:
- Validating form inputs in web applications.
- Ensuring data consistency and correctness before processing.
- Providing user feedback for incorrect inputs.

## Validation Functions

### General Validations

#### required
Ensures that the input value is not empty.
```typescript
export const required = (...args: unknown[]) => {
  const value = args[0] as string;
  if (!value) {
    throw new Error("cannot be empty");
  } else {
    if (value.trim() == "") {
      throw new Error("cannot be empty");
    }
  }
};
```
