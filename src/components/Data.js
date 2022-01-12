import React from 'react'
// import { useNavigate } from 'react-router-dom';
import { FoodState } from '../FoodContext';
import Recipe from './Recipe';



const Data = () => {
   
  // const req=`https://api.edamam.com/search?q=rice&app_id=${key}&app_key=${API}`
  
 
// const navigate=useNavigate();
// const navigate = useNavigate();
  const {recipes}=FoodState();
 
    return (
        <div className="App">
     
     {recipes.map(recipe=>(
       <Recipe key={recipe.recipe.label} ingredients={recipe.recipe.ingredients} Title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} />
     ))}
    </div>
    )
}

export default Data
