import "./header.scss";
import { NavLink } from "react-router-dom";



export default function header(){
  const handleclick = ()=>{
    localStorage.clear()
    window.location.reload()
  }
    return (
        <header className='header'>
    
      <h1>Amazon</h1>
      {/* <input 
      type='text'
      placeholder='search'/> */}
      <div>
      <button>
            <a href="/">home</a>
        </button>

        <button>
            <a href="/Loginpage">log in</a>
        </button>
        <button>
        <a href="/Register">sign in</a>
        </button>
       
       <button  className="logout"onClick={handleclick}>logout  </button>
      </div>
      
      
    </header>
    )
}





