

export default function Write(){
  
  return(
    <div>
      <h1>write</h1>
      <form action="api/test" method="POST">
        <input type="text" name="title"></input>
        <input type="text" name="content"></input>
        <button type="submit">button</button>
      </form>
    </div>
  )
}