import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../Header/index';
import { Container, ContainerButton, ItemContainer, FormContainer, InputForm, SelectButton, SectionItens, ServiceName, InputButton, Select, Option, TextLabel } from './styles';

function ServiceRequest() {
  const [allServices, setAllServices] = useState('')
  const [amountHours, setAmountHours] = useState(0);
  const [selectedService, setSelectedService] = useState(
    {
      "_id": "",
      "serviceName": 'Selecione um serviço',
      "hourlyValue": 0,
      "createdAt": "",
      "__v": 0
    });

  useEffect(() => {
    api.get('/')
      .then((response) => {
        setAllServices(response.data.findAllService)
      })
  }, []);
  console.log(allServices)

  const selectService = (ev) => {
    ev.preventDefault();
    api.get(`service/${ev.target.id}`)
      .then((response) => {
        setSelectedService(response.data.findService)
      })
  }

  const handleInputChange = (ev) => {
    setAmountHours(Number(ev.target.value))
  }

  const handleFormSubmit = (ev) => {
    ev.preventDefault();

    const total = amountHours * selectedService.hourlyValue * 1.12;

    alert(`O valor total após os impostos: ${total.toFixed(2)}`)
  }

  return (
    <>
      <Header />
      <Container>
        <FormContainer onSubmit={handleFormSubmit} >
          <SectionItens>
            <ServiceName>
              <p
                key={selectedService._id}
                value={selectedService.serviceName}
              >
                Nome do serviço selecionado:
              </p>
            </ServiceName>
            <ItemContainer>
              <p> {selectedService.serviceName} </p>
            </ItemContainer>
          </SectionItens>
          <SectionItens>
            <ServiceName>
              <TextLabel >Quantidade de horas:</TextLabel>
            </ServiceName>
            <ItemContainer>
              <InputForm
                type='text'
                onChange={handleInputChange}
                value={amountHours}
              />
            </ItemContainer>
          </SectionItens>
          <SectionItens>
            <ServiceName>
              <p>Subtotal:</p>
            </ServiceName>
            <ItemContainer>
              <p>{(amountHours * selectedService.hourlyValue).toFixed(2)} R$</p>
            </ItemContainer>
          </SectionItens>
          <SectionItens>
            <ServiceName>
              <p>Selecione o profissional</p>
            </ServiceName>
            <ItemContainer>
              <Select>
                <Option>Profisional 1</Option>
                <Option>Profisional 2</Option>
                <Option>Profisional 3</Option>
              </Select>
            </ItemContainer>
          </SectionItens>
          <ContainerButton>
            <InputButton type='submit' value='Comprar serviço' />
          </ContainerButton>
        </FormContainer>
      </Container>

      <Container>
        {Array.isArray(allServices) && allServices.map((myService) => {
          return (
            <>
              <FormContainer>
                <SectionItens>
                  <ServiceName>
                    <p key={myService._id} value={myService.serviceName}>
                      Nome do serviço:</p>
                  </ServiceName>
                  <ItemContainer>
                    <p> {myService.serviceName} </p>
                  </ItemContainer>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <p>Valor por hora do serviço:</p>
                  </ServiceName>
                  <ItemContainer>
                    <p>{myService.hourlyValue + ' R$'}</p>
                  </ItemContainer>
                </SectionItens>
                {/* /*aa*/}
                <SectionItens>
                  <ServiceName>
                    <p>Valor do imposto da venda</p>
                  </ServiceName>
                  <ItemContainer>
                    <p>12%</p>
                  </ItemContainer>
                </SectionItens>
                <ContainerButton>
                  <SelectButton id={myService._id} onClick={selectService} > Selecionar</SelectButton>
                </ContainerButton>
              </FormContainer>
            </>
          )
        })}

      </Container>


    </>
  )
}

export default ServiceRequest;