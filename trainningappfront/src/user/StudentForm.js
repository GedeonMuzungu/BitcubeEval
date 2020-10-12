import React, {useState} from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';
import {Student} from '../Auth';


const StudentForm = () => {


    const [values, setValues] = useState({
        // setting state values

        name: '',
        date: '',
        start: '',
        end: '',
        subject: '',
        degree: '',
        error: '',
        success: false

    });

    const {
        name,
        date,
        start,
        end,
        subject,
        degree,
        success,
        error
    } = values

    const handleChange = name => event => { // setting values from user state

        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });


    }
  // API method was here
    const clickSubmit = (event) => {

        event.preventDefault()

        setValues({
            ...values,
            error: false
        })

        Student({
            name,
            date,
            start,
            end,
            subject,
            degree
        }).then(data => {
            if (data.error) {

                setValues({
                    ...values,
                    error: data.error,
                    success: false
                })
            } else {

                setValues({

                    ...values,
                    name: '',
                    start: '',
                    end: '',
                    subject: '',
                    degree: '',
                    error: '',
                    success: true


                })
            }


        })


    }


    const StudentF = () => (

<div className="container">
        <form>

            <div className="form-group">

                <label className="text-muted">Name</label>
                <input onChange={
                        handleChange('name')
                    }
                    type="text"
                    className="form-control"
                    value={name}
                    required/>

            </div>


            <div className="form-group">

                <label className="text-muted">Start</label>
                <input onChange={
                        handleChange('start')
                    }
                    type="date"
                    className="form-control"
                    value={start}
                    required/>

            </div>

            <div className="form-group">

                <label className="text-muted">End</label>
                <input onChange={
                        handleChange('end')
                    }
                    type="date"
                    className="form-control"
                    value={end}
                    required/>

            </div>

            <div className="form-group">

                <label className="text-muted">Subject</label>
                <input type="text" onChange={
                        handleChange('subject')
                    }
                    className="form-control"
                    value={subject}
                    required/>

            </div>

            <div className="form-group">

                <label className="text-muted">Degree</label>
                <input type="text" onChange={
                        handleChange('degree')
                    }
                    className="form-control"
                    value={degree}
                    required/>

            </div>

            <button onClick={clickSubmit}
                className="btn btn-primary">Submit</button>


        </form>

        </div>


    );

    // show error Method

    const showError = () => (

        <div className="alert alert-danger"
            style={
                {
                    display: error ? '' : 'none'
                }
        }>
            {error} </div>


    );

    // show success

    const showSuccess = () => (

        <div className="alert alert-danger"
            style={
                {
                    display: success ? '' : 'none'
                }
        }>
            you have added a new student.
            <Link to="/lectures">Go beack to lecturer account</Link>
        </div>


    );

    return (
        <Layout title="Student " description="Add a new student to the Degree" className="container col-nd8 offset-nd-2">

            {
            showSuccess()
        }

            {
            showError()
        }


            {
            StudentF()
        }
            {
            JSON.stringify(values)
        }</Layout>

    );


};


export default StudentForm;
