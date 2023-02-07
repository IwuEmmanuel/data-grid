import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNavigation(props) {

    let data = props.data;

   // console.log(data);

    const filterRender = data.map((info, index) => {

        return (
            <NavDropdown.Item key={index}
                onClick={() => props.onfilterSelection(info)}
                >{info}
            </NavDropdown.Item>
            
        )

    });

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Blake Insurance
                </Navbar.Brand>
                <NavDropdown title="Filter" id="basic-nav-dropdown" className="text-white">
                    { filterRender }
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default BasicNavigation;