"use client";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import React, { useReducer, useState } from "react";

const TodoList = ({ dataset, edit, setData, setEdit,setDel,del}: any) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState();
  const update = (e: any) => {
    console.log(e.target.parentNode.parentNode)
    setId(e.target.parentNode.parentNode.parentNode.id);
    console.log(e.target.parentNode.parentNode.parentNode.id);
    console.log(id);
    setEdit(!edit);
  };
  const updateFieldChanged = (index: any, i: any, name: any) => (e: any) => {
    // console.log("index: " + index);
    // console.log("property name: " + e.target.name);
    // let newArr = [...dataset];
    // console.log(newArr);
    // if(index==)
    // if(index)
    console.log(typeof index);
    dataset.map((data: any,ind:any) => {
      if (ind == id) {
        if (name == "Title") {
          data.title = e.target.value;
          // setData(dataset);
        }
        if (name == "Description") {
          data.description = e.target.value;
          // setData(dataset);
        }
        if (name == "Priority") {
          data.priority = e.target.value;
          // setData(dataset);
        }

        if (name == "Date") {
          data.date = e.target.value;
          // setData(dataset);
        }
      }
      console.log(data);
      // setData(dataset);
    });
    // setData(dataset);
    if (name == "Title") {
      setTitle(e.target.value);
    }
    if (name == "Description") {
      setDescription(e.target.value);
    }
    if (name == "Priority") {
      setPriority(e.target.value);
    }

    if (name == "Date") {
      setDate(e.target.value);
    }
    // console.log(i)
    // copying the old datas array
    // a deep copy is not needed as we are overriding the whole object below, and not setting a property of it. this does not mutate the state.
    // newArr[index] = e.target.value; // replace e.target.value with whatever you want to change it to

    // setData(newArr);
    // console.log(newArr);
  };
  const dataupdate = (e: any) => {
    console.log(e.target.className.baseVal);
    console.log(e.target.id);
    console.log(dataset);
    dataset.map((data: any) => {
      console.log(data);
    });
    setEdit(!edit);

    //     dataset.map((i: any, index: any)=>{
    //       if(index==e.target.className.baseVal){
    //         // i.title= title;
    //         // i.description= description;
    //         // i.priority=priority;
    //         // i.date=date;
    //         console.log(index)
    //       }
    // })
    // console.log(b);
  };
  // const updateFieldChanged=(data:any)=>{
  //   console.log("fjfj")
  // }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataset.length != 0 ? (
            dataset.map((i: any, index: any) => {
              return edit ? (
                <tr className="bg-base-200" key={index} id={index}>
                  <td>{i.title}</td>
                  <td>{i.description}</td>
                  <td>{i.priority}</td>
                  <td>{i.date}</td>
                  <td className="text-center">
                    <button className="btn">
                      <AiOutlineEdit
                        size={25}
                        onClick={update}
                        className={index + "update"}
                      />
                    </button>
                    <button className="btn" onClick={(e:any)=>{
                      console.log(e.target.parentNode.parentNode.parentNode.id);
                      console.log(dataset);
                      dataset.splice(e.target.parentNode.parentNode.parentNode.id, 1);
                      setData(dataset);
                      setDel(!del);
                    }}>
                      <AiOutlineDelete size={25} className={index}  />
                    </button>
                  </td>
                </tr>
              ) : index == id ? (
                <tr className="bg-base-200" key={index} id={index}>
                  <td>
                    <input
                      type="text"
                      placeholder="Title"
                      value={i.title}
                      className="input input-bordered input-success w-full max-w-xs m-5"
                      onChange={updateFieldChanged(index, i, "Title")}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      placeholder="Description"
                      value={i.description}
                      className="input input-bordered input-success w-full max-w-xs m-5"
                      onChange={updateFieldChanged(index, i, "Description")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Priority"
                      value={i.priority}
                      className="input input-bordered input-success w-full max-w-xs m-5"
                      onChange={updateFieldChanged(index, i, "Priority")}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      placeholder="Date"
                      value={i.date}
                      className="input input-bordered input-success w-full max-w-xs m-5"
                      onChange={updateFieldChanged(index, i, "Date")}
                    />
                  </td>
                  <td className="text-center">
                    <button className="btn" >
                      <AiOutlineCheck
                        size={25}
                        onClick={dataupdate}
                        className={index + ""}
                      />
                    </button>
                  </td>
                </tr>
              ) : (
                <tr className="bg-base-200" key={index} id={index}>
                <td>{i.title}</td>
                <td>{i.description}</td>
                <td>{i.priority}</td>
                <td>{i.date}</td>
                <td className="text-center">
                  <button className="btn">
                    <AiOutlineEdit
                      size={25}
                      onClick={update}
                      id={index}
                      className={index + "update"}
                    />
                  </button>
                  <button className="btn">
                    <AiOutlineDelete size={25} className={index + "delete"} />
                  </button>
                </td>
              </tr>
              );
            })
          ) : (
            <tr className="bg-base-200">
              <td></td>
              <td></td>
              <td>No data</td>
              <td></td>
              <td className="text-center">
                <button className="btn"></button>
                <button className="btn"></button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TodoList;
