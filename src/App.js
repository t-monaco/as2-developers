import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarRB from './components/navbar/navbar-rb.component';
import Homepage from './pages/homepage/homepage.component';
import Project from './pages/project/project.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component.jsx';

const App = () => {
    return (
        <div id='page-container'>
            <NavbarRB />
            <Switch>
                <ErrorBoundary>
                    <Route exact path='/' component={Homepage}></Route>
                    <Route path='/:projectId' component={Project}></Route>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

export default App;
