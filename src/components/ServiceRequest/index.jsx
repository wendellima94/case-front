import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import api from '../../services/api';

import Header from '../Header/index';
import { Container, ContainerButton, GridItem, InputForm, SectionItens, ServiceName, FormContainer, InputButton, Select, Option, TextLabel } from './styles';

function ServiceRequest() {

  const [allServices, setAllServices] = useState('')
  const [hourlyValueForId, setHourlyValue] = useState(0)
  const [amountHours, setAmountHours] = useState(0);
  const [multiplicador, setMultiplicador] = useState(Number)


  useEffect(() => {
    api.get('/')
      .then((response) => {
        setAllServices(response.data.findAllService)
      })
  }, []);
  console.log(allServices)

  const url = '60d0b6944eff062524fdb625'

  useEffect(() => {
    api.get(`service/${url}`
    ).then((response) => {
      setHourlyValue(response.data.findService.hourlyValue)
    })
  }, []);

  console.log(hourlyValueForId)

  const handleInputChange = (ev) => {
    setAmountHours(ev.target.value)
  }
  console.log(amountHours)

  const result = amountHours * hourlyValueForId;

  useEffect(() => {
    setMultiplicador(result)
  }, [result])

  console.log(result)

  const tax = result * 0.12

  console.log(tax.toFixed(2))

  const calculatedTax = tax + result

  console.log(calculatedTax.toFixed(2))

  return (
    <>
      <Header />
      <Container>
          {Array.isArray(allServices) && allServices.map((myServices) => {
            return (
              <>
              <FormContainer action="">
                <SectionItens>
                  <ServiceName>
                    <p key={myServices._id} value={myServices.serviceName}>
                      Nome do serviço:</p>
                  </ServiceName>
                  <GridItem>
                    <p> {myServices.serviceName} </p>
                  </GridItem>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <p>Valor por hora do serviço:</p>
                  </ServiceName>
                  <GridItem>
                    <p>{myServices.hourlyValue + ' R$'}</p>
                  </GridItem>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <TextLabel >Quantidade de horas:</TextLabel>
                  </ServiceName>
                  <GridItem>
                    <InputForm
                      type='text'
                      onChange={handleInputChange}
                      value={amountHours}
                    />
                  </GridItem>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <p>Valor por horas de serviço:</p>
                  </ServiceName>
                  <GridItem>
                    <p>{(result).toFixed(2)} R$</p>
                  </GridItem>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <p>Selecione o profissional</p>
                  </ServiceName>
                  <GridItem>
                    <Select>
                      <Option>Profisional 1</Option>
                      <Option>Profisional 2</Option>
                      <Option>Profisional 3</Option>
                    </Select>
                  </GridItem>
                </SectionItens>
                <SectionItens>
                  <ServiceName>
                    <p>Valor do imposto da venda</p>
                  </ServiceName>
                  <GridItem>
                    <p>12%</p>
                  </GridItem>
                </SectionItens>
                <ContainerButton>
                <InputButton type='submit' value='Comprar serviço' />
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