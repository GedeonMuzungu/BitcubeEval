import React from 'react'
import Layout from '../core/Layout'
import {API} from '../config';


const Degrees = () => {


    const degree = () => {


        fetch(`${API}/Degree`, {method: "GET"}).then(response => {

            return response.json();
        }).catch(err => console.log(err));
    };


    return (

        <Layout title="STUDENTS LIST" description="Check students list here">

            {
            degree()
        } </Layout>

    )

};


export default Degrees;
