import { React,useEffect,useState } from "react";
import './App.css';
import Recipe from './recipe/Recipe'


const App  = () => {
  const APP_ID = "d3a89ae9"
  const APP_KEY = "4ea65f215e9cb681e59b9e2484fca8a1"
  const [recipes,setRecipes] = useState([]); 
  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('ckicken')
  useEffect(async ()=>{
    getRecipes()
  },[query])



  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    //console.log(data.hits);
    setRecipes(data.hits)

  }

  const updateSearch =  e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input  
        className="search-bar" 
        type="text"  
        value={search}
        onChange={updateSearch} />
        <button  className="search-button" type="submit">search</button>
      </form>
      <div className='recipes'>      
        {recipes.map(recipe =>(
          <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}  
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      
    </div>
  )
}

export default App;
