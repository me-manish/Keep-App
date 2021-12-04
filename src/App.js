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
        addItem.map((val,index)=>{
             return <Card  
                    key={index}
                    title={val.Title}
                    price={val.Price}
                    imgAdd={val.imgURL}
                    />
})}
    
    </>
}
export default App;