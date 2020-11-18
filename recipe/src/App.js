import { React,useEffect,useState } from "react";
import './App.css';

const App  = () => {
  const APP_ID = "d3a89ae9"
  const APP_KEY = "4ea65f215e9cb681e59b9e2484fca8a1"
  const [recipes,setRecipes] = useState([]); 

  useEffect(async ()=>{
    getRecipes()
  },[])



  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    //console.log(data.hits);
    setRecipes(data.hits)

  }

  return(
    <div className="App">
      <form className="search-form">
        <input  className="search-bar" type="text" />
        <button  
        className="search-button" 
        type="submit">search</button>

      </form>
    </div>
  )
}

export default App;
