 const {creatingScheme} = require('../schemas/validation');
 
 module.exports.validateUser = async (req, res, next) => {
    try{
       await creatingSheme.validate(req.body);
       return next();
    } catch(err) {
      res.send(err.massage) 
    }
  }