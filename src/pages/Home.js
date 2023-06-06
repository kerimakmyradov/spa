import React from 'react';
import { Container } from 'react-bootstrap';
import PostList from '../components/PostList';

const Home = () => {
    return (
        <Container>
            <PostList/>
        </Container>
    );
};

export default Home;