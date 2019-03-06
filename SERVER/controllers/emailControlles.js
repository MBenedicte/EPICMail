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
    static emailById(req,res){
        const email=receivedmails.find(item=>item.id===parseInt(req.params.id));
        if(!email) return res.send({
            status: 404,
            message:'Email with the given id does not exist'
        })

        res.send({
            status:200,
            data: email
        })
    }
    static deleteEmail(req,res){
        const email= receivedmails.find(item=>item.id=== parseInt(req.params.id));
        if(!email) return res.send({
            status: 404,
            message:'Email with the given id does not exist'
        })

        const index=receivedmails.indexOf(email);
        receivedmails.splice(index,1);

        res.send({
            status: 200,
            data: email.message,
            message:'The email was deleted'
        })

    }
}