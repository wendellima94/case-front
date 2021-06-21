import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  margin: 20px 20px;
  align-items: center;
  flex-direction: column;

`

export const FormContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 12px 0px;

`

export const Input = styled.input `
  height: 1.5rem;
  width: 10rem;
  border-radius: 6px;
  border: 1px solid black;
  margin: 8px 0;
  
  background-color: #fff;
`

export const InputLabel = styled.label`
  font-size: 1.4rem;

`

export const InputButton = styled.input `
  height: 1.5rem;
  width: 10rem;

`
