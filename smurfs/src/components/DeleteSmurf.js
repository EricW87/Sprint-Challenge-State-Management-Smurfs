import React, { useState } from "react";
import { connect } from "react-redux";

import { deleteData } from "../actions";

const DeleteSmurfForm = props => {
const [id, setId] = useState("");

  const handlePostData = e => {
    e.preventDefault();
    
    let smurf = {id: id};

    console.log(props.smurf);
    props.deleteData(smurf);
    setId("");
  };

  if(props.isDeletingData)
    return <div>**we are deleting data**</div>

  return (
    <form onSubmit={e=>handlePostData(e)}>
        <label>Delete a Sweet and Innocent Smurf</label>
        <input type="text" placeholder="ID#" onChange={e => setId(e.target.value)} value={id} />
        <button type="submit">You Monster</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isDeletingData: state.isDeletingData
  };
};

export default connect(
  mapStateToProps,
  { deleteData }
)(DeleteSmurfForm);