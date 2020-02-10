import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf"

import { getData } from "../actions";

const SmurfList = props => {
  useEffect(() => {
    props.getData();
  }, []);

  if(props.error)
    return <div className="error">{props.error}</div>

  return (
        <div className="smurf-list">
            {props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)}
        </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfList);
