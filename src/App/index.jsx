import React from 'react';
import AppBar from 'material-ui/AppBar';
import Button from './Components/Button';
import Footer from './Components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
    <MuiThemeProvider>
        <div>
            <AppBar
                title="Mentoring session project"
            />
            <Button>Click on me!</Button>
            <div>App!!!</div>
            <Footer />
        </div>
    </MuiThemeProvider>
);

export default App;
