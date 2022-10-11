// const validator = require("validator");
import validator from "validator";

const validate = {
  validateString(str) {
    return str !== "" || "Please enter a valid response!";
  },
  validateSalary(num) {
    if (validator.isDecimal(num)) return true;
    return "Please enter a valid salary!";
  },
  isSame(str1, str2) {
    if (str1 === str2) return true;
  },
};

export default validate;