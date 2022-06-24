import React, { useState } from "react";

import {FaStar} from "react-icons/fa";

const StarRating = ()=>{

    const [rating,setRating] = useState(null);
    const[hover,setHover] = useState(null)
    return (
        <div>
            {[...Array(5)].map((star ,i) =>{
                const ratingValue = i + 1;
                return (
                    <label>
                        <input 
                            type="radio"
                            name = "rating"
                            value={ratingValue}
                            onClick = {() => setRating(ratingValue)}
                            onMouseOver = {()=>setHover(ratingValue)}
                            onMouseOut = {()=>setHover(null)}/>
                            <FaStar
                            className = "start"
                            color = {ratingValue <= (hover||rating) ? "#ffc107" : "#ef4564"}
                            size = {20}
                            />

                    </label>
                )
            })}
            <p>{rating}</p>
        </div>
    )
}

export default StarRating;