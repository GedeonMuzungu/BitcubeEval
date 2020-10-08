import React from 'react';
import Layout from '../core/Layout';
import {API} from '../config';


const Students = () => {


    const student = () => {


        fetch(`${API}/Student`, {method: "GET"}).then(response => {

            return response.json();
        }).catch(err => console.log(err));

    }


    return (

        <Layout title="STUDENTS LIST" description="Check students list here">

            {
            student()
        } </Layout>

    )

};


export default Students;
