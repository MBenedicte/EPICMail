// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import server from '../index';
// import allmails from '../models/Mails'
// import filtered from '../Helper/filter'


// const Mails=filtered.filteredArray(allmails,"status","received");
// const filteredArray= filtered.filteredArray(Mails,"receiverId",1)


// const should = chai.should();
// chai.use(chaiHttp);

//    describe('/GET  all mails', () => {
//       it('it should get all mails', (done) => {
//          chai
//             .request(server)
//             .get('/api/v1/messages')
//             .send(allmails)
//             .end((err, res) => {
//                should.not.exist(err);
//                res.should.have.status(200);
//                res.body.should.be.a('object');
//                expect(res.body.data).to.be.a("array");
//                expect(res.body.data[0].subject).to.be.a("string");
//                expect(res.body.data[0].message).to.be.a("string")
//                expect(res.body.data[0].senderId).to.be.a("number")
//                expect(res.body.data[0].receiverId).to.be.a("number")
//                expect(res.body.data[0].parentMessageId).to.be.a("number")
//                expect(res.body).to.have.haveOwnProperty("data");
//                done();
//             });
//       });

//    });
//    describe('/GET  all received mails', () => {
//       it('it should return a message that the user does not exist', (done) => {
//          chai
//             .request(server)
//             .get('/api/v1/messages/received/:id')
//             .send({
//                status: 404,
//                message:'User with the given id does not exist'
//             })
//             .end((err, res) => {
//                should.not.exist(err);
//                res.should.have.status(200);
//                res.body.should.be.a('object');
               
//                done();
//             });
//       });

//       it('it should get received mails', (done) => {
//          chai
//             .request(server)
//             .get('/api/v1/messages/received/:id')
//             .send({
//                status: 200,
//                data:filteredArray 
//             })
//             .end((err, res) => {
//                should.not.exist(err);
//                res.should.have.status(200);
//                res.body.should.be.a('object');
//                done();
//             });
//       });
//    })
//       describe('/GET  all unread mails', () => {
//          it('it should return a message that the user does not exist', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/unread/:id')
//                .send({
//                   status: 404,
//                   message:'User with the given id does not exist'
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
                  
//                   done();
//                });
//          });
   
//          it('it should get unread mails', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/unread/:id')
//                .send({
//                   status: 200,
//                   data:filteredArray
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
//                   done();
//                });
//          });
   
//       })  
//       describe('/POST send mail', () => {
//          const mail = {
//             "subject": "Class assignment",
//             "message": "Class assignment 1",
//             "senderId": 1,
//             "receiverId": 2,
//             "parentMessageId":5,
//             "status":"draft",  
//          }
//          // send email emails
//          it("it should send an email", done => {
//                chai
//                .request(server)
//                .post('/api/v1/messages/send')
//                .send({
//                   status: 201,
//             message:"Email sent successfully",
//             data: mail 
//                })
//                .end((err, res) => {
//                should.not.exist(err);
//                res.should.have.status(200);
//                res.body.should.be.a("object");
//                expect(res.body).to.have.haveOwnProperty("data");
//                done();
//                });
//          });

//       })
//       describe('/GET  all sent mails', () => {
//          it('it should return a message that the user does not exist', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/sent/:id')
//                .send({
//                   status: 404,
//                   message:'User with the given id does not exist'
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
                  
//                   done();
//                });
//          });
   
//          it('it should get sent mails', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/sent/:id')
//                .send({
//                   status: 200,
//                   data:filteredArray
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
//                   done();
//                });
//          });
   
//       })  

//       describe('/Delete a mail', () => {
//          const mail = {
//             "subject": "Class assignment",
//             "message": "Class assignment 1",
//             "senderId": 1,
//             "receiverId": 2,
//             "parentMessageId":5,
//             "status":"draft",  
//          }
//          it('it should return a message that the user does not exist', (done) => {
//             chai
//                .request(server)
//                .delete('/api/v1/messages/:id')
//                .send({
//                   status: 404,
//                   message:'Mail with the given id does not exist'
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
                  
//                   done();
//                });
//          });
   
//          it('it should return a message that a mail is deleted', (done) => {
//             chai
//                .request(server)
//                .delete('/api/v1/messages/:id')
//                .send({
//                   status: 200,
//                   data: mail.message,
//                   message:'The email was deleted'
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
                  
//                   done();
//                });
//          });
   
//       })  


//       describe('/Get a mail by id', () => {
//          it('it should return a message that the user does not exist', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/:id')
//                .send({
//                   status: 404,
//                   message:'Mail with the given id does not exist'
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
                  
//                   done();
//                });
//          });
   
//          it('it should get sent mails', (done) => {
//             chai
//                .request(server)
//                .get('/api/v1/messages/:id')
//                .send({
//                   status: 200,
//                   data:filteredArray
//                })
//                .end((err, res) => {
//                   should.not.exist(err);
//                   res.should.have.status(200);
//                   res.body.should.be.a('object');
//                   done();
//                });
//          });
   
//       })  



