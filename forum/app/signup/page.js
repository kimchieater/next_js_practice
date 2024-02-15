

export default function Signup(){
  return( 
  <div>
    <form action="api/newsignup/test" method="POST">
    <input name="id" type="text"></input>
    <input name="password" type="password"></input>
    <button type="submit">Sign Up</button>
  </form>
  </div>
  )
}