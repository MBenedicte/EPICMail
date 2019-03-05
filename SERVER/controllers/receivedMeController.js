import receivedmails from '../models/receivedmails';

export default class Emails{
    static allReceivedMail(req,res){
        res.send({receivedmails});
    }
}