


export default function Home() {


  let name = "Jeong";
  let age =20;

  return (
    <div >
      
      <h4 className="title" style={{color:"red",}}>Apple Fresh { age }</h4>
      <p className="title-sub">by Dev { name }</p>
      <a href="http://google.com" target="_blank">Link</a>
    </div>
  );
}
