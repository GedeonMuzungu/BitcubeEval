import React from 'react'
import Layout from '../core/Layout'
import {Link} from 'react-router-dom'



const Degrees = () => {




const DForm = () =>(

    <div align="center" className="container">
       
       <table className="table table-striped table-dark" >
  <thead>
    <tr align="center">
      
      <th><h2>DEGREES</h2></th>
      
    </tr>
  </thead>
  <tbody>
    <tr align="center">
     
      <td><Link to ="/studentForm">National Diploma</Link></td>
    
    </tr>
    <tr align="center">
     
      <td><Link to ="/studentForm">Advanced Diploma</Link></td>
      
    </tr>

   

   <tr align="center">
     
     <td><Link to ="/studentForm">BTech</Link></td>
     
   </tr>

   <tr align="center">
     
     <td><Link to ="/studentForm">MTech</Link></td>
     
   </tr>
    
  </tbody>
</table>

    </div>




)
   


    
    

      
    


    return (

        <Layout title="Deegres List " description="Check List of Degrees">


{DForm()}
            
            </Layout>

    )

};


export default Degrees;
