
export class MyError extends Error {
  flag? = true;
}

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

export const email = (...args: unknown[]) => {
  const value = args[0] as string;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value && !regex.test(value)) {
    throw new Error("is not valid");
  }
};

export const numbers = {
  isNumber:(...args: unknown[]) => {
    const value = args[0] as string;
      if (value) {
        const regex = /^-?\d*\.?\d+$/;
        if (!regex.test(value)) {
          throw new Error("must be a number");
        } 
      }
  },
  between: (min: number, max: number) => {
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const regex = /^-?\d*\.?\d+$/;
        if (!regex.test(value)) {
          throw new Error("must be a number");
        } else {
          const num = parseInt(value);
          if (num > max) {
            throw new Error("must be less than " + max);
          }
          if (num < min) {
            throw new Error("must be greater than " + min);
          }
        }
      }
    };
  },
  max: (max: number) => {
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const regex = /^-?\d*\.?\d+$/;
        if (!regex.test(value)) {
          throw new Error("must be a number");
        } else {
          const num = parseInt(value);
          if (num > max) {
            throw new Error("must be less than " + max);
          }
        }
      }
    };
  },
  min: (min: number) => {
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const regex = /^-?\d*\.?\d+$/;
        if (!regex.test(value)) {
          throw new Error("must be a number");
        } else {
          const num = parseInt(value);
          if (num < min) {
            throw new Error("must be greater than " + min);
          }
        }
      }
    };
  },
};

export const minLength = (min: number) => {
  return (...args: unknown[]) => {
    const value = args[0] as string;
    if (value && value.length < min) {
      throw new Error("must have at least " + min + " characters");
    }
  };
};

export const maxLength = (max: number) => {
  return (...args: unknown[]) => {
    const value = args[0] as string;
    if (value && value.length > max) {
      throw new Error("must not have more than " + max + " characters");
    }
  };
};

export const exactLength = (len: number) => {
  return (...args: unknown[]) => {
    const value = args[0] as string;
    if (value && value.length == len) {
      throw new Error("must have " + len + " characters");
    }
  };
};

export const phoneNumberWithCountyCode = (...args: unknown[]) => {
  const value = args[0] as string;
  const regex = /^\+?[1-9]\d{1,14}$/;
  if (value && !regex.test(value)) {
    throw new Error("is not valid");
  }
};

export const phoneNumberIndian = (...args: unknown[]) => {
  const value = args[0] as string;
  const regex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  if (value && !regex.test(value)) {
    throw new Error("is not valid");
  }
};

export const url = (...args: unknown[]) => {
  const value = args[0] as string;
  const regex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
  if (value && !regex.test(value)) {
    throw new Error("must be a valid url");
  }
};
export const IPv4 = (...args: unknown[]) => {
  const value = args[0] as string;
  if (value) {
    const IPv4SegmentFormat =
      "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
    const IPv4AddressRegExp = new RegExp(`^${IPv4AddressFormat}$`);
    if (!IPv4AddressRegExp.test(value)) {
      throw new Error("must be a valid IPv4 address");
    }
  }
};

export const IPv6 = (...args: unknown[]) => {
  const value = args[0] as string;
  if (value) {
    const IPv4SegmentFormat =
      "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
    const IPv4AddressFormat = `(${IPv4SegmentFormat}[.]){3}${IPv4SegmentFormat}`;
    const IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
    const IPv6AddressRegExp = new RegExp(
      "^(" +
        `(?:${IPv6SegmentFormat}:){7}(?:${IPv6SegmentFormat}|:)|` +
        `(?:${IPv6SegmentFormat}:){6}(?:${IPv4AddressFormat}|:${IPv6SegmentFormat}|:)|` +
        `(?:${IPv6SegmentFormat}:){5}(?::${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,2}|:)|` +
        `(?:${IPv6SegmentFormat}:){4}(?:(:${IPv6SegmentFormat}){0,1}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,3}|:)|` +
        `(?:${IPv6SegmentFormat}:){3}(?:(:${IPv6SegmentFormat}){0,2}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,4}|:)|` +
        `(?:${IPv6SegmentFormat}:){2}(?:(:${IPv6SegmentFormat}){0,3}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,5}|:)|` +
        `(?:${IPv6SegmentFormat}:){1}(?:(:${IPv6SegmentFormat}){0,4}:${IPv4AddressFormat}|(:${IPv6SegmentFormat}){1,6}|:)|` +
        `(?::((?::${IPv6SegmentFormat}){0,5}:${IPv4AddressFormat}|(?::${IPv6SegmentFormat}){1,7}|:))` +
        ")(%[0-9a-zA-Z-.:]{1,})?$"
    );
    if (!IPv6AddressRegExp.test(value)) {
      throw new Error("must be a valid IPv6 address");
    }
  }
};

export const password = {
  simple: (...args: unknown[]) => {
    const value = args[0] as string;
    if (value && value.length < 8) {
      throw new Error("must be at least 8 characters long");
    }
  },
  moderate: (...args: unknown[]) => {
    const value = args[0] as string;
    const regex = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z]).{8,}$/;
    if (value && !regex.test(value)) {
      throw new Error(
        "must have both letters and numbers and must be at least 8 characters long"
      );
    }
  },
  hard: (...args: unknown[]) => {
    const value = args[0] as string;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (value && !regex.test(value)) {
      throw new Error(
        "must have at least one lowercase letter, at least one uppercase letter, at least one digit, at least one special character and must be at least 8 characters long"
      );
    }
  },
  confirm: (password: string) => {
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value && value != password) {
        throw new MyError("Passwords do not match");
      }
    };
  },
};

export const date={
  isDate:(...args: unknown[]) => {
    const value = args[0] as string;
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (value && !regex.test(value)) {
      throw new Error(
        "must be a valid date with YYYY-MM-DD format"
      );
    }
  },
  isAfter:(date:Date)=>{
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const dateValue=Date.parse(value);
        if (Number.isNaN(dateValue)){
          throw new MyError("Invalid date provided");
        }else{
          if(new Date(value) <= date){
            throw new Error("should be after "+date);
          }
        }
      }
    };
  },
  isBefore:(date:Date)=>{
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const dateValue=Date.parse(value);
        if (Number.isNaN(dateValue)){
          throw new MyError("Invalid date provided");
        }else{
          if(new Date(value) >= date){
            throw new Error("should be before "+date);
          }
        }
      }
    };
  },
  isBetween:(start:Date,end:Date)=>{
    return (...args: unknown[]) => {
      const value = args[0] as string;
      if (value) {
        const dateValue=Date.parse(value);
        if (Number.isNaN(dateValue)){
          throw new MyError("Invalid date provided");
        }else{
          if(!(new Date(value) > start && new Date(value) < end)){
            throw new Error("should be after "+start+" and before "+end);
          }
        }
      }
    };
  }
}