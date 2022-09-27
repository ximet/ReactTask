import { capitalizeFirstLetter } from 'utils/stringCorrections';

export const ERRORS = {
  required: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  'required-rating': (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field is required!`;
  },
  string: (field: string) => {
    return `This ${capitalizeFirstLetter(field)} field must consist of letters.`;
  },
  'min-length': (field: string, param: string) => {
    return `${capitalizeFirstLetter(field)} min-length is ${param} letters.`;
  },
  'max-length': (field: string, param: string) => {
    return ` ${capitalizeFirstLetter(field)} max-length is ${param} letters.`;
  },
  'validate-email': () => {
    return 'Email must be a valid email!';
  }
};
