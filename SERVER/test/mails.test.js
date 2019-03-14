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

         
