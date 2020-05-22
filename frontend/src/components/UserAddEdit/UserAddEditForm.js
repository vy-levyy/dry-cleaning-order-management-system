import React, { useState } from "react";
import axios from "../../axios/axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { format } from "date-fns";
import { toast } from "react-toastify";

const UserAddEdit = props => {
  const [state, setState] = useState(() => {
    let initState = {
      id: null,
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      job: "",
      biography: "",
      is_active: false,
      errorBag: {
        first_name: "",
        last_name: "",
        birth_date: "",
        gender: "",
        job: "",
        biography: ""
      }
    };

    if (props.location.state && props.location.state.user)
      initState = { ...initState, ...props.location.state.user };

    return initState;
  });

  const onKeyUpdate = ({ target }) => {
    let value;
    const { id } = target;

    if (target.type === "checkbox") {
      value = target.checked;
    } else if (target.type === "date") {
      value = target.value ? format(target.value, "yyyy-MM-dd") : "";
    } else {
      value = target.value;
    }

    setState({ ...state, [id]: value });
  };

  const onAddEdit = event => {
    event.preventDefault();

    if (!validate()) return;

    const { errorBag, id, ...user } = state;

    if (state.id) {
      axios
        .put(`/contact/${id}/`, user)
        .then(() => {
          toast.success("User successfully edited");
          props.history.push({ pathname: "/users" });
        })
        .catch(error => toast.error(error));
    } else {
      axios
        .post("/contact/", user)
        .then(() => {
          toast.success("User successfully added");
          props.history.push({ pathname: "/users" });
        })
        .catch(error => toast.error(error));
    }
  };

  const validate = () => {
    let isValid = true;
    const errorBag = {
      first_name: "",
      last_name: "",
      birth_date: "",
      gender: "",
      job: "",
      biography: ""
    };

    if (!state.first_name.trim()) {
      isValid = false;
      errorBag.first_name = "First Name is required";
    }

    if (!state.last_name.trim()) {
      isValid = false;
      errorBag.last_name = "Last Name is required";
    }

    if (!state.birth_date) {
      isValid = false;
      errorBag.birth_date = "Birth Date is required";
    }

    if (!state.gender) {
      isValid = false;
      errorBag.gender = "Gender is required";
    }

    if (!state.job.trim()) {
      isValid = false;
      errorBag.job = "Job is required";
    }

    if (!state.biography.trim()) {
      isValid = false;
      errorBag.biography = "Biography is required";
    }

    setState({ ...state, errorBag: { ...state.errorBag, ...errorBag } });

    return isValid;
  };

  return (
    <div className="w-2/3 md:w-1/2 lg:w-1/3 mx-auto border border-grey shadow-md ">
      <form className="flex flex-col p-4" autoComplete="off">
        <label htmlFor="first_name" className="text-sm text-gray-600">
          First name
        </label>
        <input
          className="block font-thin w-full h-10 px-2 py-1 mt-2 border-gray-500 border rounded-sm"
          type="text"
          maxLength="256"
          id="first_name"
          value={state.first_name}
          onChange={onKeyUpdate}
          required
        />
        {state.errorBag.first_name ? (
          <div className="mt-1 text-xs text-red-600">
            {state.errorBag.first_name}
          </div>
        ) : null}

        <label htmlFor="last_name" className="mt-4 text-sm text-gray-600">
          Last name
        </label>
        <input
          className="block font-thin w-full h-10 px-2 py-1 mt-2 border-gray-500 border rounded-sm"
          type="text"
          maxLength="256"
          id="last_name"
          value={state.last_name}
          onChange={onKeyUpdate}
          required
        />
        {state.errorBag.last_name ? (
          <div className="mt-1 text-xs text-red-600">
            {state.errorBag.last_name}
          </div>
        ) : null}

        <label htmlFor="birth_date" className="mt-4 text-sm text-gray-600">
          Birth date
        </label>
        <DatePicker
          className="block font-thin w-full h-10 px-2 py-1 mt-2 border-gray-500 border rounded-sm"
          selected={state.birth_date ? new Date(state.birth_date) : ""}
          onChange={date =>
            onKeyUpdate({
              target: { id: "birth_date", value: date, type: "date" }
            })
          }
          dateFormat="yyyy-MM-dd"
          required
        />
        {state.errorBag.birth_date ? (
          <div className="mt-1 text-xs text-red-600">
            {state.errorBag.birth_date}
          </div>
        ) : null}

        <label htmlFor="gender" className="mt-4 text-sm text-gray-600">
          Gender
        </label>
        <select
          id="gender"
          className="block font-thin w-full h-10 px-2 py-1 mt-2 border-gray-500 border rounded-sm bg-white"
          value={state.gender}
          onChange={onKeyUpdate}
          required
        >
          <option value="">------</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        {state.errorBag.gender ? (
          <div className="mt-1 text-xs text-red-600">
            {state.errorBag.gender}
          </div>
        ) : null}

        <label htmlFor="job" className="mt-4 text-sm text-gray-600">
          Job
        </label>
        <input
          className="block font-thin w-full h-10 px-2 py-1 mt-2 border-gray-500 border rounded-sm"
          type="text"
          maxLength="256"
          id="job"
          value={state.job}
          onChange={onKeyUpdate}
          required
        />
        {state.errorBag.job ? (
          <div className="mt-1 text-xs text-red-600">{state.errorBag.job}</div>
        ) : null}

        <label htmlFor="job" className="mt-4 text-sm text-gray-600">
          Biography
        </label>
        <textarea
          className="block resize-none font-thin w-full px-2 py-1 mt-2 border-gray-500 border rounded-sm"
          maxLength="1024"
          id="biography"
          value={state.biography}
          onChange={onKeyUpdate}
          required
        ></textarea>
        {state.errorBag.biography ? (
          <div className="mt-1 text-xs text-red-600">
            {state.errorBag.biography}
          </div>
        ) : null}

        <div className="flex flex-row items-center mt-4">
          <label htmlFor="is_active" className="text-sm text-gray-600">
            Is active
          </label>
          <input
            className="block ml-4"
            type="checkbox"
            id="is_active"
            checked={state.is_active}
            onChange={onKeyUpdate}
          />
        </div>

        <button
          type="submit"
          className="mt-6 mx-auto w-48 h-10 px-4 py-1 border rounded-sm bg-green-600 text-white outline-none"
          onClick={onAddEdit}
        >
          {state.id >= 0 ? "Save" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default UserAddEdit;
