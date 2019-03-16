import Joi from 'joi';

export default class Validate{
    static validateReistration(user){
        const schema = {
            firstname: Joi.string().min(2).max(15).required().error(errors => {
              errors.forEach(err => {
                switch (err.type) {
                  case "any.empty":
                    err.message = `Firstname should not be empty!`;
                    break;
                  case "string.min":
                    err.message = `Firstname should have at least ${err.context.limit} characters!`;
                    break;
                  case "string.max":
                    err.message = `Firstname should have at most ${err.context.limit} characters!`;
                    break;
                  default:
                    break;
                }
              });
              return errors;
            }),
            lastname:Joi.string().min(2).max(10).required().error(errors => {
                errors.forEach(err => {
                  switch (err.type) {
                    case "any.empty":
                      err.message = `lastname should not be empty!`;
                      break;
                    case "string.min":
                      err.message = `lastname should have at least ${err.context.limit} characters!`;
                      break;
                    case "string.max":
                      err.message = `lastname should have at most ${err.context.limit} characters!`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
            email:Joi.string().required().email().error(errors => {
                errors.forEach(err => {
                  switch (err.type) {
                    case `any.empty`:
                      err.message = `Email should not be empty!`;
                      break;
                    case "string.email":
                      err.message = `Please enter a correct email`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
            username:Joi.string().min(5).max(10).required().trim().error(errors => {
              
                errors.forEach(err => {
                  switch (err.type) {
                    case "any.empty":
                      err.message = `Username should not be empty!`;
                      break;
                    case "string.min":
                      err.message = `Username should have at least ${err.context.limit} characters!`;
                      break;
                    case "string.max":
                      err.message = `Username should have at most ${err.context.limit} characters!`;
                      break;
                    case "string.trim":
                      err.message = `You must enter only one username`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
            password:Joi.string().min(8).alphanum().required().error(errors => {
                errors.forEach(err => {
                  switch (err.type) {
                    case "any.empty":
                      err.message = `Password should not be empty!`;
                      break;
                    case "string.alphanum":
                      err.message = `Please use both numbers and letters`;
                      break;
                    case "string.min":
                      err.message = `Password should have at least ${err.context.limit} characters!`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
          };
    
          return Joi.validate(user,schema)
        
    }
    static validateLogin(user){
        const schema = {
            username:Joi.string().min(5).max(10).required().trim().error(errors => {
                errors.forEach(err => {
                  switch (err.type) {
                    case "any.empty":
                      err.message = `User should not be empty!`;
                      break;
                    case "string.min":
                      err.message = `User should have at least ${err.context.limit} characters!`;
                      break;
                    case "string.max":
                      err.message = `User should have at most ${err.context.limit} characters!`;
                      break;
                    case "string.trim":
                      err.message = `You must enter only one username`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
            password:Joi.string().min(8).alphanum().required().error(errors => {
                errors.forEach(err => {
                  switch (err.type) {
                    case "any.empty":
                      err.message = `Password should not be empty!`;
                      break;
                    case "string.alphanum":
                      err.message = `Please use both numbers and letters`;
                      break;
                    case "string.min":
                      err.message = `Password should have at least ${err.context.limit} characters!`;
                      break;
                    default:
                      break;
                  }
                });
                return errors;
              }),
          };
    
          return Joi.validate(user,schema)
        
    }

    static validateEmail(email){
      const schema = {
          receiver_username:Joi.string().min(5).max(10).required().error(errors => {
              errors.forEach(err => {
                switch (err.type) {
                  case "any.empty":
                    err.message = `Receiver should not be empty!`;
                    break;
                  case "string.min":
                    err.message = `Receiver should have at least ${err.context.limit} characters!`;
                    break;
                  case "string.max":
                    err.message = `Receiver should have at most ${err.context.limit} characters!`;
                    break;
                  default:
                    break;
                }
              });
              return errors;
            }),
          message:Joi.string().required().error(errors => {
              errors.forEach(err => {
                switch (err.type) {
                  case `any.empty`:
                    err.message = `Email should not be empty!`;
                    break;
                  default:
                    break;
                }
              });
              return errors;
            }),
        };
  
        return Joi.validate(email,schema)
      
  }
     
  }

    