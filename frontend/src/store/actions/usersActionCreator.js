import * as actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import axios from "../../axios/axios";

const fetchStart = () => {
  return {
    type: actionTypes.FETCH_USERS_START
  };
};

const fetchUsersSuccess = usersList => {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    usersList: usersList
  };
};

const deleteUserSuccess = () => {
  return {
    type: actionTypes.FETCH_USER_DELETE
  };
};

const fetchFail = error => {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error: error
  };
};

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchStart());

    return axios
      .get("contact/")
      .then(({ data }) => dispatch(fetchUsersSuccess(data)))
      .catch(error => dispatch(fetchFail(error)));
  };
};

export const fetchUser = id => {
  return dispatch => {
    dispatch(fetchStart());

    return axios
      .get(`contact/${id}`)
      .then(({ data }) => dispatch(fetchUsersSuccess(data)))
      .catch(error => {
        toast.error(error);
        dispatch(fetchFail(error));
      });
  };
};

export const deleteUser = id => {
  return dispatch => {
    dispatch(fetchStart());

    return axios
      .delete(`contact/${id}/`)
      .then(() => {
        dispatch(deleteUserSuccess());
        dispatch(fetchUsers());
        toast.success("User successfully deleted");
      })
      .catch(error => {
        dispatch(fetchFail(error));

        toast.error(error);

        return error;
      });
  };
};
