import React, { useEffect, useState } from "react";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/usersActionCreator";

const UserDetails = ({
  isLoading,
  user,
  onFetchUser,
  onDeleteUser,
  match,
  history
}) => {
  const {
    first_name,
    last_name,
    birth_date,
    gender,
    job,
    biography,
    is_active
  } = user;

  const id = match.params.id;

  useEffect(() => {
    onFetchUser(id);
  }, [id, onFetchUser]);

  const [hasBackdrop, setBackDropState] = useState(false);

  if (isLoading) {
    return <Spinner />;
  }

  const userDeleteHandler = (event, id) => {
    event.stopPropagation();

    setBackDropState(true);
  };

  const userEditHandler = (event, id) => {
    event.stopPropagation();
    history.push({ pathname: `/users/${id}/edit`, state: { user } });
  };

  const modal = (
    <div className="fixed top-0 left-0 right-0 mx-auto mt-4 w-3/5 sm:w-3/5 md:w-2/5 lg:w-1/4">
      <div className="z-101 bg-gray-700 border border-grey-900 p-2 text-center">
        <h1 className="text-white m-1 mb-2">
          This will delete User, continue?
        </h1>
        <button
          className="bg-white text-red-600 mx-6 w-16 border-2 rounded p-1 cursor-pointer"
          onClick={() => {
            setBackDropState(false);
            onDeleteUser(id).then(error => {
              if (!error) history.push({ pathname: "/users" });
            });
          }}
        >
          Yes
        </button>
        <button
          className="bg-white text-black mx-6 w-16 border-2 rounded p-1 cursor-pointer"
          onClick={() => {
            setBackDropState(false);
          }}
        >
          No
        </button>
      </div>
    </div>
  );

  const backDrop = (
    <div
      className="bg-gray-400 opacity-25 fixed top-0 left-0 z-1 h-screen w-screen"
      onClick={() => setBackDropState(false)}
    ></div>
  );

  return (
    <div>
      <div className="flex flex-col p-4 w-2/3 md:w-1/2 lg:w-1/3 mt-6 mx-auto border border-grey shadow-md">
        <div className="flex flex-row">
          <label className="w-1/2 text-sm text-gray-600">First name</label>
          <span className="w-1/2 text-sm">{first_name}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Last name</label>
          <span className="w-1/2 text-sm">{last_name}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Birth date</label>
          <span className="w-1/2 text-sm">{birth_date}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Gender</label>
          <span className="w-1/2 text-sm">{gender}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Job</label>
          <span className="w-1/2 text-sm">{job}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Biography</label>
          <span className="w-1/2 text-sm">{biography}</span>
        </div>
        <div className="flex flex-row mt-4">
          <label className="w-1/2 text-sm text-gray-600">Is active</label>
          <span className="w-1/2 text-sm">{is_active ? "Yes" : "No"}</span>
        </div>

        <div className="flex flex-row mt-6">
          <button
            className="mx-auto w-32 h-10 px-4 py-1 border rounded-sm bg-red-600 text-white outline-none"
            onClick={event => userDeleteHandler(event, id)}
          >
            Delete
          </button>
          <button
            className="mx-auto w-32 h-10 px-4 py-1 border rounded-sm bg-blue-600 text-white outline-none"
            onClick={event => userEditHandler(event, id)}
          >
            Edit
          </button>
        </div>
      </div>
      {hasBackdrop ? backDrop : null}
      {hasBackdrop ? modal : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.usersList,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: id => dispatch(actions.fetchUser(id)),
    onDeleteUser: id => dispatch(actions.deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
