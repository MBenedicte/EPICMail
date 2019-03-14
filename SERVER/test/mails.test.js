import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
import received from '../models/receivedmails'
import unreadmails from '../models/unreadMails'
import sentmails from '../models/sentMails'


const should = chai.should();
chai.use(chaiHttp);

   describe('1. /GET received all mails', () => {
      it('it should get all received mails', (done) => {
         chai
            .request(server)
            .get('/api/v1/messages')
            .send(received)
            .end((err, res) => {
               should.not.exist(err);
               res.should.have.status(200);
               res.body.should.be.a('object');
               expect(res.body.data).to.be.a("array");
               expect(res.body).to.have.haveOwnProperty("data");
               done();
            });
      });
   });


describe('2. /GET all unread emails', () => {
   it('Should GET all unread emails', (done) => {
     chai
       .request(server)
       .get('/api/v1/messages/unread')
       .send(unreadmails)
       .end((err, res) => {
         should.not.exist(err);
         res.should.have.status(200);
         res.body.should.be.a('object');
         expect(res.body.data).to.be.a("array");
         res.body.should.have.property('data');
         done();
       });
   });
 });
describe('3. /get all sent emails',()=>{
   it('should get all sent', (done)=>{
      chai
         .request(server)
         .get('/api/v1/messages/sent')
         .send(sentmails)
         .end((err, res)=>{
            should.not.exist(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            expect(res.body.data).to.be.a('array');
            done();
         })
   })
})
describe('4. /Get an email by its id',()=>{
   it('should get an email',(done)=>{
      chai
         .request(server)
         .get('/api/v1/messages/1')
         .end((err,res)=>{
            should.not.exist(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            expect(res.body.data).to.be.a('object');
            done()
         })
   })
})

describe('5. /Delete an email',()=>{
   it('should delete an email',(done)=>{
      chai
         .request(server)
         .delete('/api/messages/1')
         .send(received.message)
         .end((err,res)=>{
            should.not.exist(err);
            //res.should.have.status(200);
            res.body.should.be.a('object');
            
            done();
         })
   })
})

describe('6. /Regiter a user ', () => {
   it('it should register a new user ', (done) => {
       let user = {
           title: "The Lord of the Rings",
           author: "J.R.R. Tolkien",
           year: 1954
       }
     chai.request(server)
         .post('/api/auth/signup')
         .send(user)
         .end((err, res) => {
               //res.should.have.status(200);
               
               res.body.should.be.a('object');
               // res.body.should.have.property('token');
               // res.body.errors.should.have.property('pages');
               // res.body.errors.pages.should.have.property('kind').eql('required');
           done();
         })
      })
      
   
   it("should throw error on invalid username", () => {
      chai
         res.should.have.status(400);
      
   });

   it("should throw user already existed in user id exists", () => {
      res.should.have.status(400);
      res.body.should.have
   })
})      
         
