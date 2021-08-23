import React, { useRef } from 'react';
import { Form } from '@unform/web';
// import { Scope } from '@unform/core';
import * as Yup from 'yup';

import Header from '../../componentes/cabecalho/Header';
import Navbar from '../../componentes/navbar/Navbar';
import Footer from '../../componentes/rodape/Footer';
import Input from '../../componentes/form/Input'
import './Cv.css';


function Cv() { 
const formRef = useRef(null);

  async function handleSubmit(data01) { // ,{ reset }   

      const candidatos = data01;
      fetch('http://localhost:3001/envio', {
        method: 'POST',
        body: JSON.stringify({candidatos}),
        headers: { 'Content-Type': 'application/json'}
      })
    
           try {
            const schema = Yup.object().shape({
                name: Yup.string().required('* Campo obrigatório'),
                email:Yup.string().email('* Campo obrigatório'),
                // cpf:  Yup.string().matches((/^\d{8}$/) | (/^\d{5}-\d{3}$/) , '* Campo CEP incompleto ou incorreto'),
                // date:  Yup.string().matches((/^\d{8}$/) | (/^\d{5}-\d{3}$/) , '* Campo CEP incompleto ou incorreto'),
                // celular: Yup.string().matches((/^\d{8}$/) | (/^\d{5}-\d{3}$/) , '* Campo CEP incompleto ou incorreto'),
                // occupation: Yup.string().required('* Campo obrigatório'),
                // address: Yup.object().shape({
                //   zipcode: Yup.string().matches((/^\d{8}$/) | (/^\d{5}-\d{3}$/) , '* Campo CEP incompleto ou incorreto'),
                //   logradouro: Yup.string().required('* Campo obrigatório'),
                //   number: Yup.number().min(3 , '* Campo CEP incompleto ou incorreto'),
                //   complement: Yup.string().required('* Campo obrigatório'),
                //   district: Yup.string().required('* Campo obrigatório'),
                //   state:Yup.string().required('* Campo obrigatório'),
                //   city:Yup.string().required('* Campo obrigatório'),
                // })  
              });        
    
        await schema.validate(data01, {
            abortEarly: false,
        });
        
        formRef.current.setErrors({});  
        // reset()
        } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const errorMessages = {};

            err.inner.forEach(error => {
                errorMessages[error.path] = error.message;
            })
            formRef.current.setErrors(errorMessages);
          }
        }

      }

      // function handleCep(ev) {
      //   const {value} = ev.target;
      //   const cep = value?.replace(/[^0-9]/g, '');

      //   if (cep?.length !== 8) {
      //     return 
      //   }
      //   fetch(`https://viacep.com.br/ws/${cep}/json/`)
      //     .then((response) => response.json())
      //     .then((data) => {           
      //       console.log(data)
      //           formRef.current.setData({          
      //             address: {
      //               street: data.logradouro,              
      //               district: data.bairro,
      //               state: data.uf,
      //               city: data.localidade
      //             },
      //           });                       
      //         });

      //       }

return (
    <center>
    <Header />    
    <main>
      <aside>
        <Navbar/>
      </aside>
      <center className="bloco-central">
      <h1>Preencha seu Dados</h1>
        <Form ref={formRef} onSubmit={handleSubmit}  >
            <Input name="name" type="text" label="Nome" />
            <Input name="email" type="email" label="Email" />
            {/* <Input name="cpf" type="text" label="CPF"/>
            <Input name="date" type="date" label="Data de Nascimento" />        
            <Input name="phone" type="tel" label="Celular" />        
            <Input name="occupation" type="text" label="Profissão" />

        <Scope path="address">
            <Input name="zipcode" label="CEP" onBlur={handleCep}/>
            <Input name="street" label="Logradouro" type="text"  />
            <Input name="number" type="text" label="Número" />
            <Input name="complement" type="text" label="Complemento" />
            <Input name="district" type="text" label="Bairro" />
            <Input name="state" type="text" label="Estado" />
            <Input name="city" type="text" label="Cidade" />
        </Scope> */}

            <button type="submit">Save</button>
        </Form>
      </center>
    </main>
    <footer>
      <Footer />
    </footer>
  </center> 
  ); 
}
export default Cv;
