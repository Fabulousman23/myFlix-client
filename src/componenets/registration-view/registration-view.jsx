import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Form, Button, Card, CardGroup, Container, Col, Row, Navbar, Nav } from "react";
import './registration-view.scss';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
}