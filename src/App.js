import React,{useEffect,useState} from 'react'

import './App.css';
import Recipe from './components/Recipe';
// import Form from './components/Form';

function App() {
  const key="d90a7bf3";
  const API="b1d3f3b888a6b98ec1aa24c610480f2f";
  // const req=`https://api.edamam.com/search?q=rice&app_id=${key}&app_key=${API}`
  
  
  
  const [recipes, setrecipe] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState('rice');

useEffect(()=>{
  getrecipes();
},[query]);

const updatesearch=e=>{
  setsearch(e.target.value);

}
const getsearch=e=>{
  e.preventDefault();
  setquery(search);
  setsearch('');
}

const getrecipes=async()=>{
const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${key}&app_key=${API}`);
const data=await response.json();
setrecipe(data.hits);
}


  return (
    <div className="App">
      <form  onSubmit={getsearch}  className="searchfrom">
        <input className="searchbar" type={search} onChange={updatesearch} />
        <button   className="searchbutton">Search</button>
       
      </form>
     {recipes.map(recipe=>(
       <Recipe key={recipe.recipe.label} ingredients={recipe.recipe.ingredients} Title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
     ))}
    </div>
  );
}

export default App;
