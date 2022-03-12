import './eachMemo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-regular-svg-icons'

function EachMemo() {
  return (
  <>
<div className='homeDate3'>{"3.9"}</div>
       <div className='eachMemo'>
       <FontAwesomeIcon icon={faStar} className="iconadd"/>
       <div className='allTitle'>Daily Routine</div>
       <div className='allContent'>8:00-9:00 sleep<br/>
       9:00-10:00 sleep<br/>
       10:00-11:00 sleep<br/>
       </div>
         </div>
 </>

);
}

export default EachMemo;