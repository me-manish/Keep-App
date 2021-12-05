import React, { useState } from "react";
import CardCreator from "./component/CardCreator"
import Card from "./component/Card"
function App(){

    const [addItem,setItem]=useState([])
    const linkEvent=(initialData)=>{
           setItem((prevData)=>{
               return [...prevData,initialData]}) 
    } 

    return <>
    <CardCreator  linkFunction={linkEvent}/>
     {
        addItem.map((data,index)=>{
             return <Card  
                    key={index}
                    title={data.Title}
                    task={data.Task}
                    imgAdd={data.imgURL}
                    />
             
})}
    
    </>
}
export default App;