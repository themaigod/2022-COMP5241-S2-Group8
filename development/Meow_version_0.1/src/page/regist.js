import './login.css';
import logo from "../pic/meow2.png"
import { Link } from "react-router-dom";
import {faCircleLeft} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Regist() {
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
    <div className='login login2'>Regist</div>
    <div className='username'>username</div>
    <input type="text" className='loginInput'></input>
    <div className='username'>password</div>
    <input type="password" className='loginInput'></input>
    <div className='username'>confirm password</div>
    <input type="password" className='loginInput'></input>
    <br></br>
    <Link to="/login">
    <div className='username inline'>login</div>
    </Link>
      <input type="submit" className='loginBtn inline loginBtn2' value="regist"></input>
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
    </div>
    </div>
  </div>
  </>
  );
}

export default Regist;
