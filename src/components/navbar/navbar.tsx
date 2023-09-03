import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Btn from '../button/Button';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function AppBar() {
    return (
        <>

            <Navbar  expand="lg" className=" p-4">
                <Container fluid >
                    <Navbar.Brand ><img src="https://preview.colorlib.com/theme/fitnessclub/assets/img/logo/logo.png" alt="" /></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" className='text-white bg-light' />
                    <Navbar.Collapse id="navbarScroll" >
                        
                        <Nav className="ms-auto  ">
                            <NavLink  className='hover mx-3 ' to="/">Home</NavLink>

                            <NavLink to="/About" className='hover  mx-3'>About</NavLink>
                            <NavLink to="/services" className='hover  mx-3'>services</NavLink>
                            <NavLink  to="" className='hover  mx-3'  >Schedule</NavLink>
                            <NavLink to="/gallery" className='hover  mx-3'>Gallrey</NavLink>
                            <NavLink to="#pricing" className='hover  mx-3'>       
                                <Dropdown>
                                    <DropdownToggle variant=" outline-none" className='hover mx-3'>BLOG +</DropdownToggle>
                              <DropdownMenu>
                                <Dropdown.Item to="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item to="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item to="#/action-3">Something else</Dropdown.Item>
                                    </DropdownMenu>
                            </Dropdown></NavLink>
                            <NavLink to="/contact" className='hover mx-3 '>Contact</NavLink>
                            <Btn label="BECOME A MEMBER" />
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default AppBar;




