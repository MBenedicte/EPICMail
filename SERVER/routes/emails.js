import { Router } from 'express';
import Mails from '../controllers/emailControlles'
const routers= Router();

routers.get('/messages', Mails.allmails);
routers.get('/messages/received/:id', Mails.allReceivedMail);
routers.get('/messages/unread/:id', Mails.unreadMail)
routers.get('/messages/sent/:id',Mails.sentMail)
routers.get('/messages/:id',Mails.emailById);
routers.delete('/messages/:id',Mails.deleteEmail);

export default routers;