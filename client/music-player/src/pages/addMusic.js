import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddArtist from './addArtist'
import React, { useState } from "react";
import Axios from 'axios';

function AddMusic(){

  const [artistName,setArtistName] = useState([]);
  const [name,setName] = useState("");
  const [dor,setDor] = useState("");
  const [artist,setArtist] = useState("");


  // retrieving artist names for dropdown
  const getArtist = () =>{
    Axios.get('http://localhost:3001/getArtist').then((response) =>{
        setArtistName(response.data)
        console.log(artistName)

    });

    }

  // adding song details
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

      return (
        <>
        <h2 className='heading1'>Add Song</h2>
        <div className='form'>
        <Form>
          <Form.Group className="input" controlId="formBasicEmail">
            <Form.Label>Song name</Form.Label>
            <Form.Control type="text" 
            onChange = {(event) => {setName(event.target.value)}}
            />

          </Form.Group>

        <Form.Group className="input" controlId="formBasicPassword">
          <Form.Label>Date released</Form.Label>
          <Form.Control type="text" 
          onChange = {(event) => {setDor(event.target.value)}}
          />
        </Form.Group>

      <div>
      <Form.Select aria-label="Default select example" className='input' 

        onChange = {(event) => {setArtist(event.target.value)}}>
        {artistName.map((val=> 
        <option value={val.Name}>{val.Name}</option>
        ))}

      </Form.Select>
      <Button className = "getartist"onClick = {getArtist} variant="primary" >
  get artist
  </Button>
    <span> <AddArtist /></span>
    </div>
  <div className='addsong'>
  <Button variant="primary" type="submit" onClick = {addSong}>
    Submit
  </Button>
  </div>
  </Form>
        </div>
      </>
    );
  }

export default AddMusic
