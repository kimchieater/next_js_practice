import { connectDB } from "@/util/database";
import {ObjectId} from "mongodb"

export default async function Detail (props){

  const client = await connectDB
  const db = client.db("forum");
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.detail)})

  return (
    <div>
      <h4>{result.title}</h4>
      <h4>{result.content}</h4>
      <p>content</p>
    </div>
  )
}