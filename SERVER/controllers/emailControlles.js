import allmails from '../models/Mails';
import { userList } from '../models/users'
import filtered from '../Helper/filter';
import validator from '../Helper/validation'



export default class Emails{
    static allmails(req,res){
        res.status(200).send({
            status: 200,
            message:'All mails fetched successfully',
            data:allmails    
        });
    }

    static sendMail(req, res) {
        const newMail = {
            id: allmails.length,
            senderId: req.body.senderId,
            receiver_Id: req.body.receiverId,
            subject: req.body.subject,
            message: req.body.message,
            createOn: new Date().toLocaleDateString(),
            parentMessageId: req.body.parentMessageId
        };

        allmails.push(newMail);

        return res.status(201).send({
            status: 201,
            message:"Email sent successfully",
            data: newMail
        })
    }

    static allReceivedMail(req,res){
        const allReceivedMails=filtered.filteredArray(allmails,"status","received");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.status(404).send({
            status: 404,
            message:'User with the given id does not exist'
        })

        const receivedMailsbyUser= filtered.filteredArray(allReceivedMails,"receiverId",user.id)
        res.status(200).send({
            status: 200,
            message:'All received mails are fetched successfully',
            data:receivedMailsbyUser    
        });

    }
    static unreadMail(req,res){
        const allUnreadMails=filtered.filteredArray(allmails,"status","unread");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.status(404).send({
            status: 404,
            message:'User with the given id does not exist'
        })
        const unreadMailsbyUser= filtered.filteredArray(allUnreadMails,"receiverId",user.id)

        res.status(200).send({
            status: 200,
            message:'All unread mails are fetched successfully',
            data: unreadMailsbyUser
        });
    }

    static sentMail(req,res){
   
        const allSentmails=filtered.filteredArray(allmails,"status","sent");
        const user = allusers.find(item=>item.id===parseInt(req.params.id));
        if(!user) return res.status(404).send({
            status: 404,
            message:'User with the given id does not exist'
        })
        const sentMailByUser= filtered.filteredArray(allSentmails,"senderId",user.id)

        res.status(200).send({
            status: 200,
            data:sentMailByUser
        });
    }
    static emailById(req,res){

        const email=allmails.find(item=>item.id===parseInt(req.params.id));
        if(!email) return res.status(404).send({
            status: 404,
            message:'Email with the given id does not exist'
        })

        res.status(200).send({
            status:200,
            message: "Mail fetched successfully",
            data: email
        })
    }

    static deleteEmail(req,res){
        const email= allmails.find(item=>item.id=== parseInt(req.params.id));
        if(!email) return res.status(404).send({
            status: 404,
            message:'Email with the given id does not exist'
        })

        const index=allmails.indexOf(email);
        allmails.splice(index,1);


        res.status(200).send({
            status: 200,
            data: email.message,
            message:'The email was deleted'
        })

    }
    
}

