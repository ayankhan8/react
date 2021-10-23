import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import './login.css'




export default function Login() {
  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const history = useHistory();


  function validateForm() {
    return name.length > 0 && usn.length > 0;
  }

    const checkUser = (e) =>{
        e.preventDefault();
        if(name === 'ayan' && usn === '01fe19bcs168'){
            alert('Succesful')
            history.push('/book')
        }
        else{
            alert('Error')
        }
    }



  return (
    <div className="abc">
    <div className="Login">
      <Form onSubmit={checkUser} >
        <Form.Group size="10g" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="10g" controlId="usn">
          <Form.Label>USN</Form.Label>
          <Form.Control
            type="text"
            value={usn}
            onChange={(e) => setUsn(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
    </div>
  );
}
