const validator = {
  mobile: {
    required: true,
    regex: /^[6-9]\d{9}$/
  },
  ifsc: {
    required: true,
    regex: /^[A-Za-z]{4}\d{7}$/
  },
}
export default validator;
