import "./header.scss";
import { NavLink } from "react-router-dom";



export default function header(){
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
       <button>
        <a href="">
          <i>cart (0)</i>
        </a>
       </button>
      </div>
      
      
    </header>
    )
}





