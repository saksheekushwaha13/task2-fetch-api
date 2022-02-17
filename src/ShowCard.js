import React from 'react'
import "./showCard.css";
export default function ShowCard(props) {
    
  return (
        <div className="card">
            <img src={props.avatar} alt={props.avatar}/>
            <div className="container">
                <p><b>{props?.first_name + props?.last_name}</b></p> 
                <p>{props?.email}</p> 
            </div>
        </div>
  )
}