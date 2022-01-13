import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FoodState } from '../FoodContext'
// import * as React from 'react';

const Header = () => {
    const navigate=useNavigate();
    const {setquery,setsearch,search,updatesearch}=FoodState();
    const getsearch=(e)=>{
        e.preventDefault();
        setquery(search);
       navigate("/food");
        setsearch('');
      }




    return (
        <div className="navbar">
<div className="text">
    Nagpal's 
</div>
<div className="search">

        <form  onSubmit={getsearch}  className="searchfrom">
        <input className="searchbar" type={search} onChange={updatesearch} />
        <button   className="searchbutton">Search</button>
       
      </form>
</div>
        </div>
     
    )
}

export default Header
