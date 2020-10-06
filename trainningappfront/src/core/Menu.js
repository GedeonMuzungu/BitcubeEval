import React from 'react'
import {Link,withRouter} from 'react-router-dom'

// active menu 
const isActive=(history,path) =>{

        if (history.location.pathname === path){
        return {color:'#ff9900'};
    }else{

        return{color:'#fffffff'}
    }
}
const Menu = ({history}) =>(

<div>


<ul className="nav nav-tabs bg-primary">
    
    <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/")} to="/" >Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/courses")}  to="/courses">Courses</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/degrees")} to="/degrees">Degrees</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/lectures")} to="/lectures">Lectures</Link>
        </li>

        <li className="nav-item">
        <Link className="nav-link" style={isActive(history, "/students")} to="/students">Students</Link>
        </li>


    </ul>




</div>




)


export default withRouter(Menu);