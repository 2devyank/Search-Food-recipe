import React, { createContext, useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';


const Food=createContext();

const key="d90a7bf3";
const API="b1d3f3b888a6b98ec1aa24c610480f2f";
const FoodContext = ({children}) => {

    const [recipes, setrecipe] = useState([]);
    const [search, setsearch] = useState("");
    const [query, setquery] = useState('');
// const navigate=useNavigate();
 
    useEffect(()=>{
        getrecipes();
      },[query]);
      
      const updatesearch=e=>{
        setsearch(e.target.value);
      
      }
    
      
      const getrecipes=async()=>{
      const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${key}&app_key=${API}`);
      const data=await response.json();
      setrecipe(data.hits);
      }

    return (
        <Food.Provider value={{setquery,recipes,search,setsearch,updatesearch}}>
            {children}
        </Food.Provider>
    )
}

export default FoodContext

export const FoodState=()=>{
    return useContext(Food);
} 