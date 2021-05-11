import React, { Component } from 'react';
import errorImage from './../../assets/404-image.png';
import styled from 'styled-components';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // process error
        return { hasErrored: true };
    }
    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer>
                        <ErrorImage src={errorImage} />
                    </ErrorImageContainer>
                    <ErrorImageText>Upps. Something went wrong.</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// *** STYLES ***

const ErrorImageOverlay = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
`;

const ErrorImageContainer = styled.div`
    display: flex;
    background-size: cover;
    background-position: center;
    height: 40vh;
    max-width: 500px;
    width: 100%;
`;

const ErrorImage = styled.img`
    object-fit: contain;
    width: 100%;
`;

const ErrorImageText = styled.h2`
    color: #000;
    font-size: 28px;
    text-align: center;
`;
