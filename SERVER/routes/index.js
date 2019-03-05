import { Router } from 'express'
import emailsrouter from '../routes/emails'

const allrouters= Router();

allrouters.use(emailsrouter);

export default allrouters;
