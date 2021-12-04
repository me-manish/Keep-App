import React, { useState } from "react";
import "./Card.css"
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Card(props){

    const [Isclicked,setclicked]=useState(false);

    return <>
        <div className="card-box" style={{display:Isclicked ? "none":""}}>
            <h4>{props.title}</h4>
            <img src={props.imgAdd} className="imgBox" alt="title-img"/>

            <h5>Rs.{props.price}</h5>
            <p>Quantity&nbsp;&nbsp;&nbsp;
                <select> 
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
                </p>
                <button type="button" class="btn btn-warning">Add Cart</button>
           <DeleteOutlineIcon onClick={()=>setclicked(true)} className="deleteIcon" style={{ fontSize: 35 }}/>
        </div>
    </>
}

export default Card;