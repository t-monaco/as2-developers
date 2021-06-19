import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarRB from './components/navbar/navbar-rb.component';
import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component.jsx';
const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const Project = lazy(() => import('./pages/project/project.component'));

const App = () => {
    return (
        <div id='page-container'>
            <NavbarRB />
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner />}>
                        <Route exact path='/' component={Homepage}></Route>
                        <Route path='/:projectId' component={Project}></Route>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>
    );
};

export default App;
