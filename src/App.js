import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarRB from './components/navbar/navbar-rb.component';
import Homepage from './pages/homepage/homepage.component';
import Project from './pages/project/project.component';

const App = () => {
    return (
        <div id='page-container'>
            <NavbarRB />
            <Switch>
                <Route exact path='/' component={Homepage}></Route>
                <Route path='/:projectId' component={Project}></Route>
            </Switch>
        </div>
    );
};

export default App;
