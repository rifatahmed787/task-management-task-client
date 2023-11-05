export type IErrorMessages = { path: string; message: string };

export type IErrorData = {
  message: string;
  errorMessages: IErrorMessages[];
};

export type IErrorResponse = {
  data: IErrorData;
  status: number | string;
};
