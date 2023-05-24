import { AxiosError } from 'axios';

export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const ErrorHandler = (error: unknown) => {
  if (error instanceof AxiosError) {
    throw new Error(error.message);
  } else if (isString(error)) {
    throw new Error(error);
  } else {
    throw new Error('Something happened');
  }
};
