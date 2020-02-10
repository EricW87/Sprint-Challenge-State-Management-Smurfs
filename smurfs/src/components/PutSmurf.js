import React, { useState } from "react";
import { connect } from "react-redux";

import { putData } from "../actions";

const PutSmurfForm = props => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

  const handlePostData = e => {
    e.preventDefault();
    
    let smurf = {id: id};

    if(name.length > 0)
        smurf.name = name;

    if(age.length > 0)
        smurf.age = age;

    if(height.length > 0)
        smurf.height = height;

    console.log(props.smurf);
    props.putData(smurf);
    setId("");
    setName("");
    setAge("");
    setHeight("");
  };

  if(props.isPuttingData)
    return <div>**we are modifying data**</div>

  return (
    <form onSubmit={e=>handlePostData(e)}>
        <label>Modify an existing Smurf!!!!</label>
        <input type="text" placeholder="ID#" onChange={e => setId(e.target.value)} value={id} />
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name} />
        <input type="text" placeholder="Age" onChange={e => setAge(e.target.value)} value={age}/>
        <input type="text" placeholder="Height" onChange={e => setHeight(e.target.value)} value={height}/>
        <button type="submit">Modify Smurf</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isPuttingData: state.isPuttingData
  };
};

export default connect(
  mapStateToProps,
  { putData }
)(PutSmurfForm);