import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){

  let client = await connectDB;
  let db = client.db("forum");
  let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) })

  return(

      <div className="edit-container">
        <form action="/api/editpost/test" method="POST">
          <input type="text" name="title" defaultValue={result.title}></input>
          <input type="text" name="content" defaultValue={result.content}></input>
          <input type="text" name="_id" defaultValue={result._id} style={{display:"none"}}></input>
          <button type="submit">Submit</button>
        </form>
      </div>

  )
}