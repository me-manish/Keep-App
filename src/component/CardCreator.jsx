import React ,{useState}from "react";
import "./CardCreator.css"
import AddCircleIcon from '@material-ui/icons/AddCircle'

function CardCreator(props){

  const [initialData,setData]=useState({
       Title:'',
       Task:'',
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
          <input onChange={handleChange} type="text" placeholder="Title" name="Title"></input>
          <input style={{display: "inline"}} onChange={handleChange} type="text" placeholder="Task" name="Task"></input>
          <input onChange={handleChange} type="text" placeholder="ImgURL" name="imgURL"></input>
         <AddCircleIcon onClick={handlePlusevent} className="addIcon" style={{ fontSize: 60 }} />
      </div>
    </>
}

export default CardCreator;