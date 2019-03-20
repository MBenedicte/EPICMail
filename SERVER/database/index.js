import pg from 'pg';
import dotenv from 'dotenv'

dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD

});


pool.on('error',(err,client)=>{
  console.error('Unexpected error on the client', err);
  client.release(err);
  client.end();
  process.exit(-1)
})
      
module.exports={
  query: async(text,params)=>{
    console.log('connected successfully')
    return pool.connect()
    .then(async (client)=>{
      return client.query(text,params)
      .then( res=>{
        console.log('executed query', {text,params,rows: res.rowCount})
        client.end();
        return res;
      })
      .catch(error=>{
        console.log(error.stack)
        client.end();
        throw error.stack
      })
    }) 
    .catch( error=>{
      throw error;
    })    
  }
}



