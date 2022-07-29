import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from 'react-bootstrap';
import Nav1 from '../main-view/nav';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email, birthday);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onRegisterIn({ username, password, email, birthday });
    };


    return (
        <Form>

            <Form.Group>
                <Form.Label>
                    Username:</Form.Label>
                <Form.Control
                    placeholder="Enter Username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

            </Form.Group>

            <Form.Label>
                Password:</Form.Label>
            <Form.Control
                placeholder="Enter Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Label>
                Email:</Form.Label>
            <Form.Control
                placeholder="Your @email.please"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Label>
                Birthday:</Form.Label>
            <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
            />
            <Button type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            <Button type="button" onClick={() => window.location.replace("/")}>
                Log in
            </Button>
        </Form >
    );
}
RegistrationView.propTypes = {
    onRegisterIn: PropTypes.func.isRequired,
};