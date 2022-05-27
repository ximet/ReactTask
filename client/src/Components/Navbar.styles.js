import styled from 'styled-components';	
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
background: grey;
height: 80px;
display: flex;
padding: 0.5rem;
align-items: center;
`

export const NavLink = styled(Link)`
color: #fff;
text-decoration: none;
font-size: 1.2rem;
font-weight: bold;
padding: 0.5rem;

&.active {
    color: #15cdfc;
}
`

export const ThemeButton = styled.button`
background: transparent;
border: none;
color: #fff;
font-size: 1.2rem;
font-weight: bold;
padding: 0.5rem;
`
