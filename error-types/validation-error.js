// Your code here
class ValidationError extends Error {
  constructor(message = 'Invalid input') {
    super(message);
    this.message = message;
    this.name = 'ValidationError';
    // https://github.com/ericwongcv/AA-V2/blob/5d53afa8dcb35001d9a67acac1888141fd4db534/practice-for-week-04-custom-error-types/error-types/validation-error.js
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
