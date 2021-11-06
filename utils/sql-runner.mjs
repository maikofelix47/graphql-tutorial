import { getConnectionPool } from '../connection/connection.mjs';

const runSqlQuery = (sqlQuery)=>{


  console.log('SqlRunner..', sqlQuery);

  return new Promise((resolve,reject)=>{
    getConnectionPool()
    .then((pool)=>{
       pool.query(sqlQuery, (error, results, fields) => {
         if (error) {
           console.log("Error", error);
           reject(error);
         } else {
           console.log('SqlRunner Results :', results);
           resolve(results);
         }
       });
    })
    .catch((error)=>{
       reject(error);
    });

  });

}

export { runSqlQuery }