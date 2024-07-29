import MyHobby from "../pages/MyHobby";
import Autumn from "../pages/Autumn";
import Spring from "../pages/Spring";
import Summer from "../pages/Summer";
import Winter from "../pages/Winter";
import Holidays from "../pages/Holidays";
import NotFound from "../pages/NotFound";
import Snow from "../pages/Snow";
import Cold from "../pages/Cold";
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import SharedLayout from "./SharedLayout";

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
                
                <Routes>
                    <Route path="/" element={<SharedLayout/>} >
                    <Route index element={<MyHobby/>} />
                    <Route path="/autumn" element={<Autumn/>} />
                    <Route path="/spring" element={<Spring/>} />
                    <Route path="/summer" element={<Summer/>} />
                    <Route path="/summer/:id" element={<Holidays/>} />
                    <Route path="/winter" element={<Winter/>} >
                        <Route path="cold" element={<Cold/>}/>
                        <Route path="snow" element={<Snow/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </div>
        </>
    )
};


export default App;