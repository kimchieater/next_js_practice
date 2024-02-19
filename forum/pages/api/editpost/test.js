import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";


export default async function handler(request, response){
  const client = await connectDB;
  const db = client.db("forum");
  const {_id, ...updateData} = request.body;

  try {
    await db.collection('post').updateOne(
      {_id : new ObjectId(_id)},
      {$set: updateData}

      );
      return response.status(200).json({message:"succesful"});
  } catch(error) {
    console.log("Update Failed", error);
    return response.status(500).json({error: "Internal server error"});
  } 
  
    
  }


