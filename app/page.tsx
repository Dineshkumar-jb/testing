"use client";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import { AiOutlinePlus } from "react-icons/ai";
import React, {useState } from "react";


export default function Home() {
  const [condition,setCondition]=useState(false);
  const [edit,setEdit]=useState(true);
  const [data,setData]=useState([]);
  const [del,setDel]=useState(false)
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col ">
        <h1 className="text-4xl">Todo List App</h1>
        <div>
          <button className="btn btm-primary w-fitcontent mt-5" onClick={()=>{
            setCondition(!condition)
          }}>
            <h4> Add new task</h4>
            <AiOutlinePlus size={17} />
          </button>
        </div>
      </div>
      {condition ?<Form setCondition={setCondition} user={data}/>:<></>}
      {/* <TodoList  dataset={data} setCondition={setCondition} condition={condition}/> */}
      <TodoList  dataset={data} setData={setData}edit={edit} setEdit={setEdit} setDel={setDel} del={del}/>
      {/* <TodoList  dataset={data} /> */}
    </main>
  );
}
