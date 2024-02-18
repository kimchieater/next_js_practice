

import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";


export default async function List() {
  const client = await connectDB();
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {
        result.map((a,i) => {
          return(
              <div className="list-item" key={i}>
              <a href={`/detail/${result[i]._id}`}><h4>{result[i].title}</h4></a>
              <p>Jan 1st</p>
              <Link href={`/edit/$({result[i]._id}`}><button>Edit</button></Link>

            </div>
          )
        })
      }
    </div>
  )
} 