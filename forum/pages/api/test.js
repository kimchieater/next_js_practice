import { connectDB } from "@/util/database";


export default async function  handler (request, response){
  const client = await connectDB
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray()


  
  function date(){
    const currentDate = new Date();
    return currentDate;
  }

  function upload(){
    db.collection('post').insertOne();
  }

  if (request.method == "GET") {
    return response.status(200).json();
  }

  if (request.method == "POST"){
    const data = request.body;
    let result = await db.collection('post').insertOne(data);
    return response.status(200).json(result);
  }
  }



