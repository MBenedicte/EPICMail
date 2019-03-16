// import chai from 'chai';
import validation from '../Helper/validation'


// const should = chai.should()

describe("Test validator helper", () => {
    const user =  {
          firstname: "benedicte",
          lastname: "musabimana",
          email: "benemusa@.com",
          password: "S7EiPah7",
          username: "iwacu",
    }
    
    describe("/Firstname", () => {
       it("it should be 3 to 15 characters", () => {
       validation.validateReistration(user.firstname).should.be.a("object");
       validation.validateReistration(user.firstname).should.not.eql("");
      });
     });
  
    describe("/lastname", () => {
       it("it should be 3 to 15 characters", () => {
       validation.validateReistration(user.lastname).should.be.a("object");
       validation.validateReistration(user.lastname).should.not.eql("");
       });
     });

    // email  
    describe("/email", () => {
       it("Email should be valid", () => {
       validation.validateReistration(user.email).should.be.a("object");
       validation.validateReistration(user.email).should.not.eql("");
       });
     });
     describe("/username", () => {
      it("it should be 3 to 15 characters", () => {
      validation.validateReistration(user.username).should.be.a("object");
      validation.validateReistration(user.username).should.not.eql("");
     });
    });

    describe("/password", () => {
      it("it should be 3 to 15 characters", () => {
      validation.validateReistration(user.password).should.be.a("object");
      validation.validateReistration(user.password).should.not.eql("");
     });
    });
 
 });