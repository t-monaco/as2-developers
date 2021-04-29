import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch,
} from 'react-router-dom';
import Navbar from './components/navbar/navbar.component';
import Homepage from './pages/homepage/homepage.component';

const App = () => {
    return (
        <Router>
            <div id='page-container'>
                <Navbar />
                <Switch>
                    <Route path='/' component={Homepage}></Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
