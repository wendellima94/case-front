import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  margin: 40px;
`;

export const SectionItens = styled.section`
  padding: 10px;
`;

export const ServiceName = styled.div`
  width: auto;
  height: 1.8rem;

  padding: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  font-size: 16px;
  text-align: center;

  margin-bottom: 10px;
`;

export const ItemContainer = styled.div`
  height: 4rem;
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  text-align: center;

  border-radius: 8px;

  padding: 12px;

  color: #fff;
  background: linear-gradient(to right, #18a86b 0%, #36e3bd 100%);
`;

export const FormContainer = styled.form`
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  /* border: 1px solid black; */

  margin-bottom: 20px;
`;

export const InputForm = styled.input`
  height: 1.5rem;
  width: 8rem;

  border-radius: 6px;
  border: 1px solid black;

  margin: 8px 0;

  outline: none;

  background-color: #fff;
`;

export const ContainerButton = styled.div`
  height: 6.3rem;

  display: flex;

  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`;
export const SelectButton = styled.button`
  height: 4rem;
  width: 10rem;

  font-size: 18px;
  font: 700;

  outline: none;

  border-radius: 16px;

  background-color: #ed8533;
  color: #fff;
`;

export const InputButton = styled.input`
  height: 4rem;
  width: 10rem;

  font-size: 18px;
  font: 700;

  outline: none;

  border-radius: 16px;

  background-color: #ed8533;
  color: #fff;
`;

export const Select = styled.select`
  height: 1.5rem;
  width: 8rem;

  border-radius: 6px;
  border: 1px solid black;

  margin: 16px;

  outline: none;

  background-color: #fff;
`;

export const Option = styled.option`
  color: black;
  background-color: white;
`;

export const TextLabel = styled.label`
  font-size: 14px;
`;
