import {Button,Form} from 'react-bootstrap';
// import React, {  useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddArtist from './addArtist'

import Select from 'react-select'
// import {useEffect} from 'react'
import React, { useState,useEffect } from "react";
import Axios from 'axios';


// import './header.css'
function AddMusic(){

  const [artistName,setArtistName] = useState([]);

  const [name,setName] = useState("");
  const [dor,setDor] = useState("");
  const [artist,setArtist] = useState("");

  const getArtist = () =>{
    Axios.get('http://localhost:3001/getArtist').then((response) =>{
        setArtistName(response.data)
        console.log(artistName)

    });

    }
    const addSong = () =>{
      Axios.post("http://localhost:3001/addSong",{
        name: name,
        dor: dor,
        artist: artist,
      }).then(() =>{
        console.log("success")
    
      }
      );
     }

  // useEffect(() => {
  //    getArtist()
    
  //   },[]);

  return (
    <>
    <div>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Song name</Form.Label>
    <Form.Control type="text" 
    onChange = {(event) => {setName(event.target.value)}}
    />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date released</Form.Label>
    <Form.Control type="text" 
    onChange = {(event) => {setDor(event.target.value)}}
    />
  </Form.Group>

  <Form.Select aria-label="Default select example" 
  onChange = {(event) => {setArtist(event.target.value)}}>
  {artistName.map((val=> 
  <option value={val.Name}>{val.Name}</option>
  ))}

</Form.Select>
   
    
        
   



    <span> <AddArtist /></span>


 
  <Button onClick = {getArtist} variant="primary" >
  get artist
</Button>
  <Button variant="primary" type="submit" onClick = {addSong}>
    Submit
  </Button>
</Form></div>
       
     
    </>
  );
    }

export default AddMusic
