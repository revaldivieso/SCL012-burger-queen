import React from 'react';

import { BrowserRouter as Router , Route, Link } from 'react-router-dom';

function App(){
    return(
        <Router>
            <div>
                <button Link to="/">Home</button>
                <button></button>
            </div>
        </Router>
    )
}
