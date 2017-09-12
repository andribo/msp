import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainPage from './Pages/MainPage';

const App = ({ className }) => (
    <MuiThemeProvider>
        <div className={className}>
            <Header />
            <section>
                <MainPage />
            </section>
            <Footer />
        </div>
    </MuiThemeProvider>
);

const StyledApp = styled(App)`
    > section {
        margin: 64px 0 56px;
        overflow-x: hidden;
    }
`

export default StyledApp;
