import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function Nav1() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">My Movie App</Navbar.Brand>
                    <Nav.Item>
                        <Nav.Link href="LoginView">Log In</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="RegistratioView">Sign Up</Nav.Link>
                    </Nav.Item>
                </Container>
            </Navbar>

        </>
    );
}

export default Nav1;