import { connectDB } from "@/util/database";
import {ObjectId} from "mongodb"

export default async function Edit(props){
  let client = await connectDB;
  let db = client.db("forum");
  let result = await db.collection('forum').findOne({_id: new ObjectId(props.params.detail)})

  return(
    <div className="edit">
      <div className="edit-container">
        <form action="" method="POST">
          <label></label>
          <input type="text" name="title"></input>
          <input type="text" name="content"></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}