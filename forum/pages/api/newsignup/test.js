import { connectDB } from "@/util/database";

export default async function handler(request, response){
    let db = (await connectDB).db("forum");
    let result = await db.collection('signup')
    

    if (request.method == "POST"){
      let searchId = await db.collection('signup').find();
      if (request.body.id == searchId.id){



        return response.status(500).json("ID exists")
      }
      try {
        result.insertOne(request.body);
        response.redirect(302, "/list");
      } catch(error){
        response.status(400).json("Database is down");
      }
    }
} 