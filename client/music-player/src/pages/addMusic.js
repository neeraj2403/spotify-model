import {Button,Form} from 'react-bootstrap';
// import React, {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddArtist from './addArtist'

import Select from 'react-select'



// import './header.css'
function AddMusic(){
    

  return (
    <>
    <div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Song name</Form.Label>
    <Form.Control type="text"  />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date released</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  <div>
  <Select></Select>
  <span> <AddArtist /></span>
  </div>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form></div>
       
     
    </>
  );
    }

export default AddMusic
