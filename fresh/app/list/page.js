'use client'


import {useState} from "react";


export default function List(){

  let products = ["tomatoes", 'pasta', "coconut"];
  let [likes, setLikes] = useState([0,0,0]);

  return(
    <div>
      <h4 className="title">List of Items</h4>
      
      {
      products.map((a, i)=>{
        return(
          <div>
            <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img"></img>
              {a}
              <span>{likes[i]}</span>
            <button onClick={()=>{
              let copy = [...likes];
              copy[i] += 1;
              setLikes(copy);
            }}>+</button>
            <button onClick={()=>{
              {
                likes > 0 ? setLikes(minusLikes => minusLikes - 1) : null;
              }
            
            }}>-</button>
            </div>                    
          </div>
        )
      })

      }
    </div>
  )
}