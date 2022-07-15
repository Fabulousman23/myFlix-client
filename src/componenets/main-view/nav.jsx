import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">My Movie App</Navbar.Brand>
                </Container>
            </Navbar>

        </>
    );
}

export default Nav;