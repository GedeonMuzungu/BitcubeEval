import React from 'react'
import {Link, withRouter} from 'react-router-dom'

// active menu
const isActive = (history, path) => {

    if (history.location.pathname === path) {
        return {color: 'Red'};
    } else {

        return {color: 'White'}
    }
}
const Menu = ({history}) => (

    <div>


        <ul className="nav nav-tabs bg-primary">

            <li className="nav-item">
                <Link className="nav-link"
                    style={
                        isActive(history, "/")
                    }
                    to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"
                    style={
                        isActive(history, "/lectures")
                    }
                    to="/lectures"> Lecturer Access</Link>
            </li>



        </ul>


    </div>


)


export default withRouter(Menu);
