import receivedmails from '../models/receivedmails';
import unreadMails from '../models/unreadMails'
import sentMails from '../models/sentMails';


export default class Emails{
    static allReceivedMail(req,res){
        res.send({
            status:200,
            data: receivedmails
        });
    }
    static unreadMail(req,res){
        res.send({
            status: 200,
            data: unreadMails
        });
    }

    static sentMail(req,res){
        res.send({
            status: 200,
            data: sentMails
        });
    }
}