// import receivedmails from '../models/receivedmails';
//import unreadMails from '../models/unreadMails'
// import sentMails from '../models/sentMails';
import allmails from '../models/Mails';
import allusers from '../models/users'
import filtered from '../Helper/filter';


export default class Emails{
    static allmails(req,res){
        res.send({
            status: 200,
            data:allmails    
        });
    }
    static allReceivedMail(req,res){

        const allReceivedMails=filtered.filteredArray(allmails,"status","received");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.send({
            status: 404,
            message:'User with the given id does not exist'
        })

        const receivedMailsbyUser= filtered.filteredArray(allReceivedMails,"receiverId",user.id)
        //console.log(receivedMailsbyUser)
        res.send({
            status: 200,
            data:receivedMailsbyUser    
        });
    }
    static unreadMail(req,res){
        const allUnreadMails=filtered.filteredArray(allmails,"status","unread");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.send({
            status: 404,
            message:'User with the given id does not exist'
        })
        const unreadMailsbyUser= filtered.filteredArray(allUnreadMails,"receiverId",user.id)

        res.send({
            status: 200,
            data: unreadMailsbyUser
        });
    }

    static sentMail(req,res){
   
        const allSentmails=filtered.filteredArray(allmails,"status","sent");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.send({
            status: 404,
            message:'User with the given id does not exist'
        })
        const sentMailByUser= filtered.filteredArray(allSentmails,"senderId",user.id)

        res.send({
            status: 200,
            data:sentMailByUser
        });
    }
    static emailById(req,res){
        const email=allmails.find(item=>item.id===parseInt(req.params.id));
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
        const email= allmails.find(item=>item.id=== parseInt(req.params.id));
        if(!email) return res.send({
            status: 404,
            message:'Email with the given id does not exist'
        })

        const index=allmails.indexOf(email);
        allmails.splice(index,1);


        res.send({
            status: 200,
            data: email.message,
            message:'The email was deleted'
        })

    }
}