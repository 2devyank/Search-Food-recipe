import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FoodState } from '../FoodContext'

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
        <div>
        <form  onSubmit={getsearch}  className="searchfrom">
        <input className="searchbar" type={search} onChange={updatesearch} />
        <button   className="searchbutton">Search</button>
       
      </form>
    
        </div>
    )
}

export default Header
