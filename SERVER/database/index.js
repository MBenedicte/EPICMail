import { Client } from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD

});

execute();

async function execute(){
  try{
      await client.connect();
      console.log(`connected successfully`);
      const { rows } = await client.query(" select * from users");
      console.log(rows)
  }
  catch(error){
    console.log(`something wrong happened`)
  }
}

// client.connect()

// .then(()=> console.log('Connected successfully'))
// .then(async()=> await client.query('select * from users'))
// .then(result=> console.table(result.rows))
// .catch(err=>console.log(`something went wrong here is the error ${err}`))


