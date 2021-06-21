import React from 'react';

import { Container, MenuContainer, NavLink } from './styles';

function Header() {
  return (
    <Container>
      <MenuContainer>
        <NavLink to='/register' >Service Register</NavLink>
      </MenuContainer>
      <MenuContainer>
        <NavLink to='/' >Service Request</NavLink>
      </MenuContainer>
    </Container>
  )
}

export default Header;