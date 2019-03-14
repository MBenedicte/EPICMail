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

    static validateMail(mail) {
      const schema = {
        receiverId: Joi.number.positive().required().error( ( errors) => {
          return errors.forEach( err => {
            switch(err.type) {
              case "any.empty": 
                err.message = `receiverId should not be empty`;
                break;
              case "number.positive":
                err.message = `receiverId should be positive numberic value`;
                break;
            }
          })
        }),
        senderId: Joi.number.positive().required().error( ( errors) =>
          errors.forEach( err => {
            switch(err.type) {
              case "any.empty": 
                err.message = `receiverId should not be empty`;
                break;
              case "number.positive":
                err.message = `receiverId should be positive numberic value`;
                break;
              default: 
                break;
            }
          })
        ),
        subject: Joi.string().min(5).max(30).required().trim().error( (errors) => 
          errors.forEach( err => {
              switch (err.type) {
                case "any.empty":
                  err.message = `subject should not be empty!`;
                  break;
                case "string.min":
                  err.message = `subject should have at least ${err.context.limit} characters!`;
                  break;
                case "string.max":
                  err.message = `subject should have at most ${err.context.limit} characters!`;
                  break;
                case "string.trim":
                  err.message = `subject should not have empty space after or before`;
                  break;
                default:
                  break;
              }
          })
        ),
        message: Joi.string().min(5).max(30).required().trim().error( (errors) => 
          errors.forEach( err => {
              switch (err.type) {
                case "any.empty":
                  err.message = `message should not be empty!`;
                  break;
                case "string.min":
                  err.message = `message should have at least ${err.context.limit} characters!`;
                  break;
                case "string.max":
                  err.message = `message should have at most ${err.context.limit} characters!`;
                  break;
                case "string.trim":
                  err.message = `message should not have empty space after or before`;
                  break;
                default:
                  break;
              }
          })
        )
      }

      return Joi.validate(mail, schema);
    }
}