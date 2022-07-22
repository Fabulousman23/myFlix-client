import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Nav() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">My Movie App</Navbar.Brand>
                    <Navbar.Brand href="#LoginView">Log in</Navbar.Brand>
                    <Navbar.Brand href="#RegistrationView">Sign Up</Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export default Nav;