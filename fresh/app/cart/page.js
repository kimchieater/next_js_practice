'use client';

import {age, name, hello} from './data.js';


export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta'];
  
  return (
    <div>
      <h4 className="title"><h1>{hello}</h1></h4>
      {
        장바구니.map((a, i)=>{
          return(
            <CartItem item={장바구니[i]}></CartItem>
          )
        })
      }
      <Banner color="red" name="롯데"></Banner>
      <Banner color="blue" name="현대"></Banner>
    </div>
  )
} 

function Banner(props){
  return(
  <div>
    <div className="banner" style={{padding:"20px", background: props.color , width:"50%",}}>
      <p>{props.name} 카드 행사 중 </p>
    </div>
  </div>)
  
}

function CartItem(props){
  return(
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}