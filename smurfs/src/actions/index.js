import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const PUT_DATA = "PUT_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    console.log("getData");
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log(res);
                dispatch({ type: UPDATE_SMURFS, payload: res.data });
            })
            .catch(err => {
                console.error("error fetching data from api. err: ", err);
                dispatch({ type: SET_ERROR, payload: "error fetching data from api" });
            });
        }, 2000);
};

export const postData = smurf => dispatch => {
    console.log("postData", smurf);
    dispatch({ type: POST_DATA });
    axios
        .post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data });
        })
        .catch(err => {
            console.error("error posting data to the api. err: ", err);
            dispatch({ type: SET_ERROR, payload: "error posting data to the api" });
        });
};

export const putData = smurf => dispatch => {
    console.log("putData", smurf);
    dispatch({ type: PUT_DATA });
    axios
        .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data });
        })
        .catch(err => {
            console.error("error putting data into the api. err: ", err);
            dispatch({ type: SET_ERROR, payload: "error putting data into the api" });
        });
};

export const deleteData = smurf => dispatch => {
    console.log("deleteData", smurf);
    dispatch({ type: DELETE_DATA });
    axios
        .delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: UPDATE_SMURFS, payload: res.data });
        })
        .catch(err => {
            console.error("error deleting data in the api. err: ", err);
            dispatch({ type: SET_ERROR, payload: "error deleting data in the api" });
        });
};
