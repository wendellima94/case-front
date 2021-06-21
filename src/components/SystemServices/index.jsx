import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Header from '../Header/index';
import { Container, FormContainer, Input, InputLabel, InputButton } from './styles';
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
      <Container>
        <h2>Bem vindo a página de cadastro dos Serviços de Sistema!</h2>
        <form onSubmit={addService}>
          <FormContainer>
            <InputLabel>Nome do serviço:</InputLabel>
            <Input
              type='text'
              name='serviceName'
              value={serviceName}
              onChange={handleInputChange}
            />
            <InputLabel>Valor por hora:</InputLabel>
            <Input
              type='text'
              name='hourlyValue'
              value={hourlyValue}
              onChange={handleInputChange}
            />
          </FormContainer>
          <div>
            <InputButton type='submit' value="Cadastrar" />
          </div>
        </form>
        <Link to='../'> VOLTAR</Link>
      </Container>
    </>
  );
};

export default SystemServices;