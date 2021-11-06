import { runSqlQuery } from '../utils/sql-runner.mjs';
export class User {
   id = null;
   name = '';
   email = '';
   password = '';
   status = '';
   posts = '';
   tableName = 'User';
   constructor(name,email,password){
      this.name = name;
      this.email = email;
      this.password = password
   }

   async save(){
      const sql = `INSERT INTO graphQlTutorial.${this.tableName} (id,name,email,password,status,posts) values (NULL,"${this.name}","${this.email}","${this.password}",NULL,NULL)`;
      const insertResults =  await runSqlQuery(sql);
      const insertId = insertResults.insertId;
      return this.findUser(insertId);
   }

   async findUser(userId){
      const sql = `SELECT * FROM  graphQlTutorial.${this.tableName} where id = ${userId}`;
      return runSqlQuery(sql);
   }
}