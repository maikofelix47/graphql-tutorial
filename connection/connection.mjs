import mysql from 'mysql2';
import { db } from '../conf/config.mjs'


const pool = mysql.createPool({
  host: db.mysql.host,
  user: db.mysql.user,
  password: db.mysql.password,
  database: db.mysql.database,
  port: db.mysql.port,
  connectionLimit: db.mysql.connectionLimit
});

const getConnectionPool = ()=>{
  return new Promise((resolve,reject) => {
      resolve(pool);

  });

}

export { getConnectionPool }