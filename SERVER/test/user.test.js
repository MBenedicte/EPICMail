import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import users from '../controllers/usercontroller'

// import User from '../controllers/usercontroller';


const should = chai.should();
chai.use(chaiHttp);

    describe("/GET Users", () => {
            it("it should GET all users", done => {
                  chai
                  .request(server)
                  .get('/api/v1/users')
                  .end((err, res) => {
                  should.not.exist(err);
                  res.should.have.status(200);
                  res.body.should.be.a("object");
                  expect(res.body.data).to.be.a("object");
                  expect(res.body).to.have.haveOwnProperty("data");
                  expect(res.body).to.have.haveOwnProperty("message");
                  expect(res.body.message).eql("Users fetched successfully");
                  done();
                  });
            });
      });

      describe("/Post Register a new user", () => {
        it("it should GET all users", done => {
              chai
              .request(server)
              .get('/api/v1/users')
              .send({
                status: 200,
                message:"Users fetched successfully",
                data:{
                  users
                }
              })
              .end((err, res) => {
              should.not.exist(err);
              res.should.have.status(200);
              res.body.should.be.a("object");
              expect(res.body.data).to.be.a("object");
              expect(res.body).to.have.haveOwnProperty("data");
              expect(res.body).to.have.haveOwnProperty("message");
              expect(res.body.message).eql("Users fetched successfully");
              done();
              });
        });
  });

  describe('/POST register a new user', () => {
    const user = {
       "firstname": "Benedicte",
       "lastname": "musabimana",
       "email": "benemusa@gmail.com",
       "username": "benemusa",
       "password":"asuygdafs", 
    }
    it("it should check if the user ulready exist", done => {
        chai
        .request(server)
        .post('/api/v1/auth/signup')
        .send({
            status: 400,
            message:"User already exists"
        })
        .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(400);
        done();
        });
  });
    it("it should register a new user", done => {
          chai
          .request(server)
          .post('/api/v1/auth/signup')
          .send({
            status: 400,
            message:"User registered successfully",
            data:[{
                user
            }]
          })
          .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(400);
          res.body.should.be.a("object");
          //expect(res.body).to.have.haveOwnProperty("data");
          done();
          });
    });

 })

 describe('/POST login a user', () => {
    const user = {
       "username": "benemusa",
       "password":"asuygdafs", 
    }
   
    it("it allow a user to login", done => {
          chai
          .request(server)
          .post('/api/v1/auth/login')
          .send({
            status: 400,
            message:"User registered successfully",
            data:[{
                user
            }]
          })
          .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(400);
          res.body.should.be.a("object");
          //expect(res.body).to.have.haveOwnProperty("data");
          done();
          });
    });

 })

describe('Sign up',()=>{
 
  //1. Do validation 
  it('Should return an error for invalid user data',()=>{
    const user={
      firstname:"",
      lastname: "",
      username: "",
      email: "",
      password:""
    };
    
    chai.request(server)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err,res)=>{
          res.should.have.status(400);
          res.body.should.be.a('object')
          res.body.should.haveOwnProperty("message")
          res.body.should.haveOwnProperty("status"); 
          expect(res.body.message.firstname).to.eql("Firstname should not be empty!")
          expect(res.body.message.lastname).to.eql("Firstname should not be empty!")
          expect(res.body.message.username).to.eql("Firstname should not be empty!")
          expect(res.body.message.email).to.eql("Firstname should not be empty!")
        })
  })

  //2. return user exits
  it("should throw user exists", () => {
    const user={
      username:"sjhdfs",
      password:""
    }
      chai.request(server)
          .post('api/v1/auth/signup')
          .send(user)
          .end((err,res)=>{
            // should.exist(err)
            should.have.status(400)
            res.body.should.be.a('object')
            res.body.should.haveOwnProperty("message")
            res.body.should.haveOwnProperty("status")
            expect(res.body.message).to.eql("User already exists")
            
          })
  })
  //3. return valid user's input
  it("should create new user ", () => {
    const user ={
      username:"Benedicte",
      password:"ude646re"
    };

    chai.request(server)
        .post('api/v1/auth/signup')
        .send(user)
        .end((err,res)=>{
          // should.not.exist(err)
          should.have.status(200)
          res.body.should.be.a('object')
          res.body.should.haveOwnProperty("data")
          res.body.should.haveOwnProperty("message")
          res.body.should.haveOwnProperty("status")
          expect(res.body.data[0].username).to.be.a("string");
          expect(res.body.data[0].password).to.be.a("string");
        })
  })
})