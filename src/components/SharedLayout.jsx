
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: red;
  }
`;
const SharedLayout = () => {
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
                <Outlet />
            </div>
        </>
    )
};


export default SharedLayout;