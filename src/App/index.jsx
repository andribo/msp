import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Button from './Components/Button';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = ({ className }) => (
    <MuiThemeProvider>
        <div className={className}>
            <Header />
            <Button>Click on me!</Button>
            <div>App!!!</div>
            <Footer />
        </div>
    </MuiThemeProvider>
);

const StyledApp = styled(App)`
    display: flex;
    flex-direction: column;
`

export default StyledApp;
