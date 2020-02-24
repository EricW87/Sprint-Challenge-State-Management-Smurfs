import React, { useState } from "react";
import { connect } from "react-redux";

import { postData } from "../actions";

const SmurfForm = props => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

  const handlePostData = e => {
    e.preventDefault();
    console.log(props.smurfs);
    let smurf = {name: name, age: age, height: height};
    props.postData(smurf);
    setName("");
    setAge("");
    setHeight("");
  };

  if(props.isPostingData)
    return <div>**we are posting data**</div>

  return (
    <form onSubmit={e=>handlePostData(e)}>
        <label>Add a new Smurf!!!!</label>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} value={name} />
        <input type="text" placeholder="Age" onChange={e => setAge(e.target.value)} value={age}/>
        <input type="text" placeholder="Height" onChange={e => setHeight(e.target.value)} value={height}/>
        <button type="submit">Add Smurf</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isPostingData: state.isPostingData
  };
};

export default connect(
  mapStateToProps,
  { postData }
)(SmurfForm);