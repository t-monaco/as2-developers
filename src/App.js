import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch,
} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';
import Project from './pages/project/project.component';

const App = () => {
    return (
        <Router>
            <div id='page-container'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route path='/:projectId' component={Project}></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
