import { useEffect, useState } from "react"
import Home from "./component/Home"
import Nav from "./component/Nav"

function App() {
 const [toggle,setToggle]=useState(() => {
  
  return localStorage.getItem("theme") === "dark" ? "dark" : false;
});

useEffect(()=>{
  if(toggle=="dark"){
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark");
  }
  else{
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light");
  }
},[toggle])

function handletheme(){

}
  return (
    <>
    <div className={`m-0 p-0 font-product  overflow-x-hidden ${toggle && "dark"}`}>
      <Nav toggle={toggle} setToggle={setToggle}/>
      <Home toggle={toggle}/>
      </div>
     
    </>
  )
}

export default App
