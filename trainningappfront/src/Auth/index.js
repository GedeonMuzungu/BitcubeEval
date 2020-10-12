import {API} from '../config';


export const Student = (name, date, start, end, subject, degree) => { // console.log(name, date, start, end, subject, degree)

    return fetch(`${API}/Student`, {

        method: "POST",
        headers: {

            Accept: 'application/json',
            "Contact-Type": "application/json"
        },
        body: JSON.stringify(name, date, start, end, subject, degree)

    }).then(response => {

        return response.json()
    }).catch(err => {

        console.log(err);
    });
};


export const degree = () => {


    return fetch(`${API}/Degree`, {method: "GET"}).then(response => {

        return response.json();
    }).catch(err => console.log(err));


}

 
 
