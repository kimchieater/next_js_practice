import { connectDB } from "@/util/database";
import { cloneElement } from "react";

export default async function handler(request, response){
    let db = (await connectDB).db("forum");
    let collection = db.collection("signup");

    let checkId = request.body.id;

    if (request.method == "POST"){
      const query = { id: checkId };
      try{
        const result = await collection.findOne(query);
        console.log(result);
        
        if (result){
          console.log("Data exists in the database");
          return response.status(409).send("Data already exists");
        } else {
          console.log("Data does not exist in the database, proceed with POST")
          await collection.insertOne(request.body)
          return response.status(201).send("Data added successfully");

        }
      } catch(err){
        console.error("Database query failed", err);
        return response.status(500).send("Internal server error");
      }
    } else {
    response.setHeader('allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not allowed`);
    }
      
      
  }