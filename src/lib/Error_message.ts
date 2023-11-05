import { IErrorData, IErrorMessages, IErrorResponse } from "@/Types/Error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

// just for information, unknown type ignored here
export const get_error_messages = (
  error: IErrorResponse | FetchBaseQueryError | undefined
): string => {
  if (error && "data" in error) {
    const error_data: IErrorData | undefined = error.data as
      | IErrorData
      | undefined;
    if (error_data && "errorMessages" in error_data) {
      return error_data.errorMessages
        .map((msg: IErrorMessages) => msg.message)
        .join(",");
    } else {
      return JSON.stringify(error_data);
    }
  } else {
    return JSON.stringify(error);
  }
};
