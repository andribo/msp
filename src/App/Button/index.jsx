import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: rgb(0, 188, 212);
    border: 2px solid rgb(0, 188, 212);

    &:hover {
        background: rgba(0, 188, 212, 0.32);
    }
`;

export default Button;
