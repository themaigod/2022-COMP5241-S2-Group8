import './login.css';
import logo from "../pic/meow2.png"
import { Link } from "react-router-dom";
import {faCircleLeft} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

function Login() {
  const [textarea, setTextatea] = useState({"height":"0px", "opacity":0});
  const [textareaBtn, setTextateaBtn] = useState({"height":"0px", "opacity":0});
  const showSugest =() =>{
    setTextatea(
      {height:"150px",
      opacity:1
    }
    );
    setTextateaBtn(
      {height:"30px",
      opacity:1
    }
    )
  };

  const hideSugest =() =>{
    setTextatea(
      {height:"0px",
      opacity:0
    }
    );
    setTextateaBtn(
      {height:"0px",
      opacity:0
    }
    )
  }
  return (
  <>
  <div className='loginContent'>
    <div className='container1'>
    <Link to="/">
    <button className='backToHome'>
    <FontAwesomeIcon icon={faCircleLeft} className="iconHome"/>
      Back to homepage
      </button>
      </Link>
  <div className='loginBody'>
  <img src ={logo} alt="logo" className='loginLogo'></img>
    <div className='login'>login</div>
    <div className='username'>username</div>
    <input type="text" className='loginInput'></input>
    <div className='username'>password</div>
    <input type="password" className='loginInput'></input>
    <br></br>
    <Link to="/regist">
    <div className='username inline'>regist</div>
    </Link>
    <input type="submit" className='loginBtn inline' value="login"></input>
  </div>
  </div>
  <div className='container1'>
  <div className='loginRight'>
    <div className='noteEve'>
    Note everything you want!
    </div>
    <div className='introWord'>Meow is a free platform for doing all kinds of recording conveniently.
         Quickly register and enjoy the experience of doing memo!
    </div>
    <div className='loginSuggest inline'>Any suggestion want to say to us? Write </div>
    <input type="submit" className='loginBtn smallBtn inline here' value="Here" onClick={showSugest}></input>
    <textarea className='suggestionInput' style={textarea}></textarea>
    <br/>
    <input type="submit" 
    className='loginBtn smallBtn smallBtnMar subAnndCan' 
    value="Cancel" 
    style={textareaBtn}
    onClick={hideSugest}
    ></input>
    <input type="submit" className='loginBtn smallBtn subAnndCan' value="Submit" style={textareaBtn}></input>
    </div>
    </div>
  </div>
  </>
  );
}

export default Login;
