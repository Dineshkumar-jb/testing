"use client";
import React, { useReducer, useState } from "react";

const Form = ({setCondition,user}:any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const data = {
    title: title,
    description: description,
    priority:priority,
    date:date,
  };
  const submitForm = (event: any) => {
    event.preventDefault();
    setTitle("");
    setDescription("");
    setDate("");
    setPriority("");
    setCondition(false);
    user.push(data)
  };

  return (
    <form className="text-center mb-4" onSubmit={submitForm}>
      <div className="flex flex-col sm:flex-row m-5 ">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            className="input input-bordered input-success w-full max-w-xs m-5"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            required
            className="input input-bordered input-success w-full max-w-xs m-5"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row m-5">
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Priority"
            value={priority}
            onChange={(e)=>{
              setPriority(e.target.value);
            }}
            required
            className="input input-bordered input-success w-full max-w-xs m-5"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e)=>{
              setDate(e.target.value)
            }}
            required
            className="boder px-5 py-3 focus:outline-none rounded-md w-full max-w-xs m-5"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #36D399"
            }}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-outline btn-success">
        Add Todo
      </button>
    </form>
  );
};
export default Form;
