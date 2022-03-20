import './home.css';
import logo from "../pic/meow2.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {faSquareCheck} from '@fortawesome/free-regular-svg-icons';
import EachMemo from "../component/EachMemo";
import { useState } from 'react';
function Home() {
    // const date=["1.3", "2.12","3.6","4.12"];
    // const content = ["fdsfds","aaaaa","nofad","dsffsd"]
    var myDate = new Date();
    var tYear = myDate.getFullYear();
    var tMonth = myDate.getMonth();
    var tDay = myDate.getDate();
    var m = tMonth + 1;
    const [year, setYear] = useState(tYear);

    const handleScroll = (e) =>{
      if(e.deltaY>0){
        //scrolldown
        setYear(year+1);
      }
      else{
        //scrollup
        setYear(year-1);
        }
      }

  return (
  <>
  <div className='memoWindowBody'>
      <div className='homeUp'>
      <img src ={logo} alt="logo" className='homeLogo inline2'></img>
      <Link to="/">
      <div className='homeLogin inline2'>Home</div>
      </Link>
      <Link to="/login">
      <div className='homeLogin inline2'>Login</div>
      </Link>
      <Link to="/regist">
      <div className='homeLogin inline2'>Regist</div>
      </Link>
      </div>
      <div className='homeDown'>
      <div className='HomeLeft'>
      <div className='homeDate2'>New Memo</div>
      <div className='homeDate'>{m+"."+tDay}</div>
    <div className='memoBody'>
    <FontAwesomeIcon icon={faPlusSquare} className="iconadd"/>
    <input type="text" className='memoWriteTitle' placeholder="add title"></input>
    <textarea className='memoWrite' placeholder='Write something...'></textarea>
    <FontAwesomeIcon icon={faSquareCheck} className="iconconfirm"/>
        </div>
   </div>
   <div className='HomeRight'>
   <div className='homeDate2 inline allMemo'>All Memo</div>
   <div className='homeYear inline'>
   {/* <FontAwesomeIcon icon={faSquareCaretUp} className="iconUp" onClick={()=>{setYear(year-1)}}/> */}
    <div className='homeDate2 year gray' onClick={()=>{setYear(year-1)}}>{year-1}</div>
    <div className='homeDate2 year middleYear' onWheel={(e) =>handleScroll(e)}>{year}</div>
    <div className='homeDate2 year gray' onClick={()=>{setYear(year+1)}}>{year+1}</div>
    {/* <FontAwesomeIcon icon={faSquareCaretDown} className="iconDown" onClick={()=>{setYear(year+1)}}/> */}
    {/* <FontAwesomeIcon icon={faSquareCheck} className="iconOK" /> */}
    </div>
    <div className='homeAllMemo'>
   <EachMemo/>
   <EachMemo/>
   <EachMemo/>
   <EachMemo/>
   </div>
    </div>
    {/* <div className='HomeRightRight'>
    <FontAwesomeIcon icon={faSquareCaretUp} className="iconUp" onClick={()=>{setYear(year-1)}}/>
    <div className='homeDate2 year gray'>{year-1}</div>
    <div className='homeDate2 year middleYear'>{year}</div>
    <div className='homeDate2 year gray'>{year+1}</div>
    <FontAwesomeIcon icon={faSquareCaretDown} className="iconDown" onClick={()=>{setYear(year+1)}}/>
      </div> */}
    </div>
   </div>
  </>
  );
}

export default Home;
