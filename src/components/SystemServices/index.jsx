import React from 'react';

import api from '../../services/api';

import Header from '../Header/index';
import {
  Container,
  FormContainer,
  InputForm,
  ContainerButton,
  ItemContainer,
  ServiceName,
  SectionItens,
  TextLabel,
  InputButton,
  Title
} from './styles';
import { useForm } from '../../hooks/hooks';

function SystemServices() {
  const { form, onChange, resetForm } = useForm({
    serviceName: '',
    hourlyValue: undefined
  });

  const { serviceName, hourlyValue } = form;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    onChange(name, value);
  }

  const addService = (e) => {
    e.preventDefault();
    const body = { serviceName, hourlyValue };
    api.post('newservice', body)
      .then(response => {
        console.log(response);
        resetForm();
        alert("Serviço cadastrado com sucesso!")
      }).catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <Header />
      <Title>Bem vindo a página de cadastro dos Serviços de Sistema!</Title>
      <Container>
        <FormContainer onSubmit={addService}>
          <SectionItens>
            <ServiceName>
              <TextLabel>Nome do serviço:</TextLabel>
            </ServiceName>
            <ItemContainer>
              <InputForm
                type='text'
                name='serviceName'
                value={serviceName}
                onChange={handleInputChange}
              />
            </ItemContainer>
          </SectionItens>
          <SectionItens>
            <ServiceName>
              <TextLabel>Valor por hora:</TextLabel>
            </ServiceName>
            <ItemContainer>
              <InputForm
                type='text'
                name='hourlyValue'
                value={hourlyValue}
                onChange={handleInputChange}
              />
            </ItemContainer>
          </SectionItens>
          <ContainerButton>
            <InputButton type='submit' value="Cadastrar" />
          </ContainerButton>
        </FormContainer>
      </Container>
    </>
  );
};

export default SystemServices;