import React, {useState} from "react";
// import {Redirect} from "react-router-dom";
import Layout from "../core/Layout";

const LecturerLogin = () => {

    const [values, setValues] = useState({ // setting state values

        email: '',
        password: '',
        error: '',
        success: false


    });

    const handleChange = name => event => { // setting values from user state
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });

    }

    const clickSubmit = () => (
        <link to="/lectures"></link>
    )


    const Signin = () => (

        <form>

            <div className="form-group">

                <label className="text-muted">Email</label>
                <input onChange={
                        handleChange('email')
                    }
                    type="email"
                    className="form-control"
                    required/>

            </div>


            <div className="form-group">

                <label className="text-muted">Password</label>
                <input onChange={
                        handleChange('password')
                    }
                    type="password"
                    className="form-control"
                    required/>

            </div>

            <button onClick={clickSubmit}
                className="btn btn-primary">Submit</button>


        </form>

    );


    return (

        <Layout title="Lecturer Login " description="Login Here as a Lecturer" className="container col-nd8 offset-nd-2">

            {
            Signin()
        }
            {
            JSON.stringify(values)
        } </Layout>


    )


}


export default LecturerLogin;
