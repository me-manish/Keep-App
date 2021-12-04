import React ,{useState}from "react";
import "./CardCreator.css"
import AddCircleIcon from '@material-ui/icons/AddCircle'
function CardCreator(props){

  const [initialData,setData]=useState({
       Title:'',
       Price:'',
       imgURL:''
  })

  const handleChange=(event)=>{

    const {name,value}=event.target;

    setData({...initialData,[name]:value})
  }

  const handlePlusevent=()=>{
    props.linkFunction(initialData);
  }

    return <>
      <div className="CardCreator-box col-md-6">
          <input onChange={handleChange} type="text" placeholder="Title" value={initialData.Title} name="Title"></input>
          <input onChange={handleChange} type="number" placeholder="Price"value={initialData.Price} name="Price"></input>
          <input onChange={handleChange} type="text" placeholder="imgURL"value={initialData.imgURL} name="imgURL"></input>
         <AddCircleIcon onClick={handlePlusevent} className="addIcon" style={{ fontSize: 60 }} />
      </div>
    </>
}

export default CardCreator;