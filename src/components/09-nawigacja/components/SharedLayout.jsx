// Teraz przenieśmy ten układ i jego style do oddzielnego komponentu SharedLayout. 
//Należy zwrócić uwagę na wykorzystanie i położenie komponentu Outlet - 
//to w tym miejscu będą renderowały się komponenty poszczególnych stron.

import { Outlet , Link} from "react-router-dom";
// import { Container, Header, Logo} from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
        <>
         {/* <Container>
             <Header>
                 <Logo> */}
                    <span role="img" aria-label="computer icon">

                    </span>{" "}
                    GoMerch Store
                 {/* </Logo> */}
                    <nav>{/*W celu utworzenia nawigacji w aplikacji Reactowej.Do tworzenia odnośników wykorzystuje się komponenty Link i NavLink.
                Komponent NavLink różni się tylko tym, że dostaje klasę .active kiedy bieżący URL pokrywa się z wartością propsa to.
                 Można to wykorzysta do zmiany jego stylów */}
                        <Link to="/" end>
                            Home
                        </Link>
                        <Link to="/about">About</Link>
                        <Link to="/products">Products</Link>
                    </nav>
            {/*   </Header> */}
            <Outlet/>
        {/*   </Container> */}
        </>
    )
}