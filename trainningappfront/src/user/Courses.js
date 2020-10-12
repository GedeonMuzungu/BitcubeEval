import React from 'react'
import Layout from '../core/Layout'
import {API} from '../config';



const Courses = () => {


    const course = () => {


        return fetch(`${API}/Course`, {method: "GET"}).then(response => {
    
            return response.json();
        }).catch(err => console.log(err));
    }
    
    

    return (

        <Layout title="COURSE LIST" description="Check courses list here">

            {course()}

             </Layout>

    )

};


export default Courses;
