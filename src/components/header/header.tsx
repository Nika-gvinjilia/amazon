import "./header.scss";
import { Routes,Route } from "react-router-dom";
import Loginpage from "../../pages/loginpage";



export default function header(){
    return (
        <header className='header'>
    
      <h1>Amazon</h1>
      <input 
      type='text'
      placeholder='search'/>
      <div>
        <button>
            <a href="/Loginpage">log in</a>
        </button>
        <button>
        <a href="/Loginpage">sign in</a>
        </button>
      </div>
      
    </header>
    )
}





