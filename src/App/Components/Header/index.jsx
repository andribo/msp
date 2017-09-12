import React from 'react';
import AppBar from 'material-ui/AppBar';
import styled from 'styled-components';

const Header = ({ className }) => (
    <header className={className}>
        <AppBar title="Mentoring session project" />
    </header>
);

const StyledHeader = styled(Header)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    z-index: 5;
`

export default StyledHeader;
