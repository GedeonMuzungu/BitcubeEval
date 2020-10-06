import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Courses from './user/Courses'
import Degrees from './user/Degrees'
import Lectures from './user/Lectures'
import Students from './user/Students'
import Home from './core/Home'
import Menu from './core/Menu'


const Routes = ()=>{

    return (
    
    <BrowserRouter>

    <Menu/>
 
        <Switch>

              <Route path="/" exact component={Home}/>
              <Route path="/courses" exact component={Courses}/>
              <Route path="/degrees" exact component={Degrees}/>
              <Route path="/lectures" exact component={Lectures}/>
              <Route path="/students" exact component={Students}/>
             



        </Switch>



    </BrowserRouter>
    
    );


};



export default Routes;

