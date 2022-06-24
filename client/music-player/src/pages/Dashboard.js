import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios"
import {FaStar} from "react-icons/fa";

function Dashboard(){
    const navigate = useNavigate();
    const navigateMusic = () => {
        // 👇️ navigate to /
        navigate('/addMusic');
      };


    const [data,setData] = useState([]);
    const [name,setName] = useState(null);
    const [no_users,setUsers] = useState(null);
    const [avg_rating,setAvgRating] = useState(null);
    const [rating,setRating] = useState(null);
    const[hover,setHover] = useState(null)
    

    // Retreiving Data from Backend
    const getData = () =>{
        Axios.get('http://localhost:3001/getData').then((response) =>{
          setData(response.data)
          console.log(response.data)
          console.log(name)
  
      });
      
        }

    // Function for updating rating
    const addRating = () =>{
          Axios.put("http://localhost:3001/addRating",{
            name: name,
            rating: rating,
            no_users: no_users,
            avg_rating: avg_rating,
          }).then(() =>{
            console.log("success")
         });
         }


    return (
        <>
          <button className = "load" onClick = {getData}></button>
        
          <div className='addmusic'>
          <h2 className='heading'>Top 10 Songs</h2>
          <span>
          <button onClick = {navigateMusic} >Add music</button>
          </span>
          </div>
          
          {data.map((val,key)=>{

            return <div className='card'>
            
            <div className='column'><div className='label'>Song</div>: {val.Name} </div>
            <div className='column'><div className='label'>Date of release</div>: {val.Date_of_release}</div>
            <div className='column'display="inline-block"><div className='label'>Artist</div>: {val.Artist}</div>
            <div className='column'display="inline-block">{[...Array(5)].map((star ,i) =>{
              // start rater
              const ratingValue = i + 1;
              return (
                  <label>
                    <input 
                          type="radio"
                          name = "rating"
                          value={ratingValue}
      
                          onClick = {() => {setRating(ratingValue);setName(val.Name);setUsers(val.no_users);setAvgRating(val.Average_rating);}}
                          onMouseOver = {()=>setHover(ratingValue)}
                          onMouseOut = {()=>setHover(null)}/>
                          <FaStar
                          className = "start"
                          color = {ratingValue <= (hover||rating) ? "#ffc107" : "#ef4564"}
                          size = {20}
                    />

                  </label>
        )
    })
    
  }
  
  
  <button className = "rating"type='submit' onClick={addRating}>Submit</button>

 
  </div>
  <div></div>
      </div>      
    }  )}

    
    </>
    )
    }

export default Dashboard
