
export default function List(){

  let products = ["tomatoes", 'pasta', "coconut"];


  return(


  

    <div>
      <h4 className="title">List of Items</h4>
      
      {
      products.map((a, i)=>{
        return(
          <div>
            <h4 className="food">{products[i]}</h4>
          </div>
        )
      })

      }
    </div>
  )
}