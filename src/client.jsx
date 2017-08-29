import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App'

const MuiThemeAppWrapper = () => (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

ReactDOM.render(<MuiThemeAppWrapper />, document.getElementById('app'));
