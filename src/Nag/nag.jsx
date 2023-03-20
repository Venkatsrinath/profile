import logo from "../Image/photo.png"
import "./nag.css"
import {BsFillPersonFill} from 'react-icons/bs';
const nag =()=>{
    return(
        <div className="nag">
            <h3 className="name">Name :</h3>
            <p className="name">Srinath</p><br></br>
            {/* <p className="name">Srinath</p> */}
    
        <img src ={logo} alt="praa" className="image"/> 
        <h2>Manager</h2>
        <div className="nameborder">
            <h4>coworkers</h4>
            <p className="gap"> <BsFillPersonFill className="icon"/>srinath</p>
            <p className="gap"> <BsFillPersonFill className="icon"/>sai</p>
            <p className="gap"> <BsFillPersonFill className="icon" />raju</p>
            <p className="gap"> <BsFillPersonFill className="icon" />ram</p>
            </div>
        </div>
    )
}
export default nag;