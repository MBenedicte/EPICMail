import { Router } from 'express';
import Mails from '../controllers/emailControlles'
const routers= Router();

routers.get('/messages', Mails.allReceivedMail);
routers.get('/messages/unread', Mails.unreadMail)
routers.get('/messages/sent',Mails.sentMail)
routers.get('/messages/:id',Mails.emailById);

export default routers;