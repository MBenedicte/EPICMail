import { Router } from 'express';

import receivedMails from '../controllers/receivedMeController'
const routers= Router();

routers.get('/messages', receivedMails.allReceivedMail);

export default routers;