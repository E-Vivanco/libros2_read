//import {neon} from '@neondatabase/serverless';
const sql = process.env.PGPASSWORD
//console.log(sql `SELECT NOW()`)

export async function helloWorld(){
    {/*const start = new Date()
    const [dbResponse]= await sql `SELECT NOW()`
    const dbNow= dbResponse && db
    Response.now ? dbResponse.now : "" 
    const end = new Date()*/}
    if(sql)
    return  {dbNow:"hello" } //dbResponse
}