import { Schema } from 'express-validator';

export const validationRules: Record<string, Schema> = {
  '/register': {
    username: {
      in: ['body'],
      isString: { errorMessage: 'Username must be a string' },
      isLength: { options: { min: 3 }, errorMessage: 'Username must be at least 3 characters' }
    },
    email: {
      in: ['body'],
      isEmail: { errorMessage: 'Invalid email' }
    },
    password: {
      in: ['body'],
      isLength: { options: { min: 8 }, errorMessage: 'Password must be at least 8 characters' },
      matches: {
        options: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
        errorMessage: 'Password must include uppercase, lowercase, and number'
      }
    }
  },
  '/login': {
    email: {
      in: ['body'],
      isEmail: { errorMessage: 'Invalid email' }
    },
    password: {
      in: ['body'],
      exists: { errorMessage: 'Password is required' }
    }
  }
};
