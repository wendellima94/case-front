import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MenuContainer, MenuItens, NavLink } from './styles';

function Header() {
  return (
    <Container>
      <MenuContainer>
       <MenuContainer>
       <NavLink to='../' >Home</NavLink>
      </MenuContainer>
      <MenuContainer>
       <NavLink to='/services/register' >Register Page</NavLink>
      </MenuContainer>
      <MenuContainer>
       <NavLink to='/services' >Servic Request</NavLink>
      </MenuContainer>
      </MenuContainer>

    </Container>
  )
}

export default Header;