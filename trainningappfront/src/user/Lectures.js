import React from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';


const Lectures = () => {

    const LecturerForm = () => (

     
        
        <div className="container">
            <ul align="center">

                <li className="nav navbar-nav">
                    <Link className="nav-link" to="/degrees"><h3>Degrees</h3></Link>
                </li>

                <li className="nav navbar-nav">
                    <Link className="nav-link" to="/students"><h3>Students</h3></Link>
                </li>

            </ul>

            <Link align="center" className="nav-link" to="/studentForm"><h3>Add a new student Here</h3></Link>

        </div>
    );

    return (
        <Layout title="Lectures" description="Manage courses and degrees here ">

            {
            LecturerForm()
        } </Layout>

    );


};


export default Lectures
