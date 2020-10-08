import React from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';


const Lectures = () => {

    const LecturerForm = () => (
        
        <div>
            <ul>

                <li className="nav navbar-nav">
                    <Link className="nav-link" to="/degrees">Degrees</Link>
                </li>

                <li className="nav navbar-nav">
                    <Link className="nav-link" to="/students">Students</Link>
                </li>

            </ul>

            <Link className="nav-link" to="/studentForm">Add a new student Here</Link>

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
