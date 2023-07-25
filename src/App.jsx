import React, { useState } from "react";
import Todolist from "./Todolist";

const App = ()=>
{
  const [inputList, setInputList] = useState("");
  const [items, setItems]= useState([]);   //yaha items me intial value me []<--- Array hai so items is Array
   const itemEvent = (event)=>
   {
     setInputList(event.target.value);
   };

   const listOfItems=()=>
   {
      setItems((oldItem)=>
      {
        return [...oldItem, inputList];
      });
      setInputList("");
   };

   const deleteItems =(id)=>{
    console.log("deleted");
    setItems((oldItem)=>{
      return oldItem.filter((arrElement, index)=>{
                    return index !== id;
      })
    })
   };


  return(
      <>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
                <button onClick={listOfItems} >+</button>

                <ol>
                       { /* <li>{inputList}</li> comment hai ye  */}   

                    {
                      items.map((itemval, index)=>{
                        return <Todolist key={index} id={index} text={itemval} onSelect={deleteItems} />
                      })
                    }
                </ol>
            </div>
        </div>
      </>
  )
};

export default App
