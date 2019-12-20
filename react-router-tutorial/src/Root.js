import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
function Root(props) {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default Root;