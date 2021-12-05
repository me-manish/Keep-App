import React, { useState } from "react";
import "./Card.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Card(props){

    const [Isclicked,setclicked]=useState(false);

    return <>
        <div className="card-box" style={{display:Isclicked ? "none":""}}>
            <h4>{props.title}</h4>
            <p>{props.task}</p>
            <img src={props.imgAdd} className="imgBox" alt="title-img"/>
            <DeleteOutlineIcon onClick={()=>setclicked(true)} className="deleteIcon" style={{ fontSize: 35 }}/>
        </div>
    </>
}

export default Card;