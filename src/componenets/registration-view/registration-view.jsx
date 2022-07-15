import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from 'react-bootstrap';


export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("https://my-movie-app1234.herokuapp.com/movies", {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
            .then((response) => {
                const data = response.data;
                console.log(data);
            })
            .catch(e => {
                console.log('smth went wrong');
            });
    };

    return (
        <form>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Birthday:
                <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </label>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    );
}
RegistrationView.propTypes = {
    onRegisterIn: PropTypes.func.isRequired,
};