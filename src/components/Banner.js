import {React} from 'react';
import Container from 'react-bootstrap/Container';

const bannerMain = {
    fontWeight : "700",
    fontSize: "70px"
}

const bannerPara = {
    fontWeight : "500",
    fontSize: "24px",
    lineHeight: "30.24px",
    color: "#000000",
    padding: "27px 0"
}

const Banner = () => {
    return(
        <Container fluid style={{width: "1338.24px",}}>
            <div className='bannerMain'>
                <h1 style={bannerMain}>Make your life easier <br /> with PureKeep</h1>
                <p style={bannerPara}>The easiest way to secure all your passwords and sensitive information. <br />
                    Create complex passwords without ever having to remember them again.</p>
            </div>
        </Container>
    )
}

export default Banner;