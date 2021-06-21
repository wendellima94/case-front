import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 8px;

  background: linear-gradient(to right, #18a86b 0%, #36e3bd 100%);
`;

export const MenuContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  padding: 0 20px;
`;
export const NavLink = styled(Link)`
  width: 8rem;
  height: 2rem;

  padding: 8px;
  text-align: center;
  border-radius: 4px;

  font-size: 16px;
  background-color: #ed8533;
  color: #fff;
  text-decoration: none;
  outline: none;
`;
