import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/usersActionCreator";

import UserInfo from "../../components/User/UserInfo";
import Spinner from "../../components/UI/Spinner/Spinner";

const Users = ({
  isLoading,
  usersList,
  onFetchUsers,
  onDeleteUser,
  history
}) => {
  useEffect(() => {
    onFetchUsers();
  }, [onFetchUsers]);

  const [hasBackdrop, setBackDropState] = useState(false);
  const [toDeleteUserId, setToDeleteUserId] = useState("");

  if (isLoading) {
    return <Spinner />;
  }

  const userAddHandler = () => {
    if (history) {
      history.push({ pathname: "/users/add" });
    }
  };

  const userSelectedHandler = id => {
    if (history) {
      history.push({ pathname: `/users/${id}` });
    }
  };

  const userDeleteHandler = (event, id) => {
    event.stopPropagation();

    setBackDropState(true);
    setToDeleteUserId(id);
  };

  let users = (
    <div className="text-2xl mt-6 mx-auto text-gray-600">
      No Users, Try to Add
    </div>
  );

  if (usersList.length !== 0 && Array.isArray(usersList)) {
    users = usersList.map(
      ({ id, first_name, last_name, name, birth_date, gender }) => (
        <UserInfo
          key={id}
          id={id}
          first_name={first_name}
          last_name={last_name}
          name={name}
          birth_date={birth_date}
          gender={gender}
          onUserSelect={id => userSelectedHandler(id)}
          onUserDelete={(event, id) => userDeleteHandler(event, id)}
        />
      )
    );
  }

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
            onDeleteUser(toDeleteUserId).then(error => {
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
      <div className="flex flex-col m-6 w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <button
          className="mx-auto w-32 h-10 px-4 py-1 border rounded-sm bg-green-600 text-white outline-none"
          onClick={userAddHandler}
        >
          Add User
        </button>
        {users}
      </div>
      {hasBackdrop ? backDrop : null}
      {hasBackdrop ? modal : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    usersList: state.usersList,
    isLoading: state.isLoading,
    userDeleted: state.deleted,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onDeleteUser: id => dispatch(actions.deleteUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
