/*
    A valid name:
        - Include only lowercase and uppercase alphabets: [a-zA-Z]
        - Have a minimum length of 3 and a maximum length of 12: {3,15}
*/
export function validateName(name) {
  const isValidLength = name.length >= 3 && name.length <= 12;
  const nameRegex = /^[a-zA-Z]+$/;
  const isValid = nameRegex.test(name) && isValidLength;
  return isValid;
}
/*
    A valid email:
        - Should have maximum length of 30 characters
        - Should end with @gmail.com or @hackkerrank.com  
 */
export function validateEmail(email) {
  const isValidLength = email.length <= 30;
  const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|hackerrank\.com)$/;
  const isValid = emailRegex.test(email) && isValidLength;
  return isValid;
}

/*
    A valid password:
        - Must have atleast 6 characters and at max 15 characters
        - Must have atleast 1 upper case letter between A-Z
        - Must have atleast 1 lower case letter between a-z
        - Must have atleast 1 digit between 0-9
 */
export function validatePassword(password) {
  const isValidLength = password.length >= 6 && password.length <= 15;
  const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
  const isValid = passRegex.test(password) && isValidLength;
  return isValid;
}
