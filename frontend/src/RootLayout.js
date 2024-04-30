import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const RootLayout = ()=>{
    return(
        
        <>
            <Header></Header>
        <Container>
        <main className='py-3'>
            <Outlet></Outlet>
            <Footer></Footer>
            </main>
        </Container>
        </>
    )
}

export default RootLayout;