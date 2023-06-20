import {React} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const Navigation = (props) => {

const navbarStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}

const navbarLeft = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

const navBarRight = {
  display: "flex",
  alignItems: "center",
}

const themeButton = {
  height: "48px",
  borderRadius: "24px",
  padding: "7px 34px",
  backgroundColor: "transparent",
  color: "#001219",
  border: "1px solid #001219"
}

const themeButtonOne = {
  height: "48px",
  borderRadius: "24px",
  padding: "7px 34px",
  backgroundColor: "#FFBA24",
  color: "#001219",
  border: "1px solid #FFBA24",
  fontWeight: "500",
  fontSize: "18px",
  marginLeft: "20px"
}



  
    return(
        <Container fluid style={{width: "1338.24px"}}>
            <div style={navbarStyle}>
                <div style={navbarLeft} className='navLeft'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='logo' className='' /> |
                    <div className='navLinksItems'>
                      {props.listMenuLeft.map(e => (
                        <a href='#' style={{ fontSize: "14px",fontWeight: "400", color: "#001219", padding: "0 30px 0 0" }}>{e.title}</a>
                      ))}
                    </div>
                </div>
                <div style={navBarRight}>
                    {props.listMenuRight.map(e => (
                      <a href='#' style={{ fontSize: "14px",fontWeight: "400", color: "#001219",padding: "0 30px 0 0" }}>{e.title}</a>
                    ))}
                    <Button style={themeButton}>Login</Button>
                    <Button style={themeButtonOne}>Get Pure Keep</Button>
                </div>
            </div>
        </Container>
    )
}

export default Navigation;