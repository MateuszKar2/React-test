import MyHobby from "./pages/MyHobby";
import Autumn from "./pages/Autumn";
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Winter from "./pages/Winter";
import NotFound from "./pages/NotFound";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }
`;
const App = () => {
    return (
        <>
            <div>
                <nav>
                    <StyledLink to="/" end>MyHobby</StyledLink>
                    <StyledLink to="/autumn" end>Autumn</StyledLink>
                    <StyledLink to="/spring" end>Spring</StyledLink>
                    <StyledLink to="/summer" end>Summer</StyledLink>
                    <StyledLink to="/winter" end>Winter</StyledLink>
                </nav>
                
                <Routes>
                    <Route path="/" element={<MyHobby/>} />
                    <Route path="/autumn" element={<Autumn/>} />
                    <Route path="/spring" element={<Spring/>} />
                    <Route path="/summer" element={<Summer/>} />
                    <Route path="/winter" element={<Winter/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </div>
        </>
    )
};


export default App;