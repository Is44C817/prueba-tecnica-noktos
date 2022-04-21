import  { React, useState } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import './Login.css';
import {Button, Container, Row, Col, Form} from 'react-bootstrap';

export const Login = () => {
  const [email, setEmail] = useState('demosistemas@yopmail.com');
  const [password, setPassword] = useState('Prueba@1');
  const [sistema, setSistema] = useState('2');

  const navigate = useNavigate();

  const handleSumbit = async e =>{
    e.preventDefault();

    try{
      const {data} = await axios.post('https://desarrollo.api.noktos.com/api/login', {email, password, sistema})

      const  logout = () =>{
        localStorage.setItem('tokenNoktos', data.token)
          navigate('/hoteles')
      }
    
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text:'Acceso correcto'
      })
      logout();
      setTimeout(function(){
        Swal.close();
      }, 1000);
      console.log('data', data)
      
    }catch(error){
      Swal.fire({
        icon: 'error',
        text: 'Verifica tus datos',
      })
      console.log(error)
    }
  }

    return (
        <div className="App">
          <div className="App-header">
          <Container>
          <p className="title">Inicia sesión y visualiza tus hoteles</p>
            <Form onSubmit={handleSumbit}>
            <Row>
              <Col>
                <Form.Group controlId="formEmail"></Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                 type="text" 
                 value={email} 
                 onChange={e => setEmail(e.target.value)}>
                 </Form.Control>
              </Col>
              <Col>
                <Form.Group controlId="formPassword"></Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password"
                value={password} onChange={e => setPassword(e.target.value)}>
                </Form.Control>
              </Col>
              <div className="Ocultar">
                <Form.Group controlId="formSistema"></Form.Group>
                <Form.Label>Sistema</Form.Label>
                <Form.Control 
                type="text" 
                value={sistema} onChange={e => setSistema(e.target.value)}>
                </Form.Control>
              </div>
            </Row>
              <Button type="submit" className="buttonLogin">Iniciar Sesión</Button>
            </Form>
          </Container>
          </div>
        </div>
        
    );
}

export default Login;