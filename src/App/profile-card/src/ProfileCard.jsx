import React from "react";
import "./App.css"

export default function ProfileCard(props) {
    return (
        <>
        <div className="card">
            
            <img src={props.image} alt="" />
            <h1> {props.name}</h1>
            <p> {props.description}</p>
            <p> {props.phone}</p>

        </div>
        </>
    )
}
