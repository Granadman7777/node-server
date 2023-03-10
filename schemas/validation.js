const yup = require('yup');

module.exports.creatingSheme = yup.object({
    "firstName": yup.string().required(),
    "lastName": yup.string().required,
    "email": yup.string().email(),
    "password": yup.string().required(),
    "isSubscribed": yup.boolean()
  })