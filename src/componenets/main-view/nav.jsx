import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Nav1() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="LoginView">My Movie App</Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href="/">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="register">Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" onClick={() => {
                            localStorage.clear()
                            window.location.replace("/")
                        }}>Log Out</Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>

        </>
    );
}

export default Nav1;