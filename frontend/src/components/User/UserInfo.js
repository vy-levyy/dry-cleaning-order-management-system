import React from 'react'

const UserInfo = ({
  id,
  first_name,
  last_name,
  birth_date,
  gender,
  onUserSelect,
  onUserDelete,
}) => {
  return (
    <div
      className="flex flex-col my-4 p-4 w-full mx-auto border border-grey shadow-md cursor-pointer"
      onClick={() => onUserSelect(id)}
    >
      <div className="flex flex-row">
        <label className="w-1/2 text-sm text-gray-600 cursor-pointer">First name</label>
        <span className="w-1/2 text-sm">{first_name}</span>
      </div>
      <div className="flex flex-row mt-4">
        <label className="w-1/2 text-sm text-gray-600 cursor-pointer">Last name</label>
        <span className="w-1/2 text-sm">{last_name}</span>
      </div>
      <div className="flex flex-row mt-4">
        <label className="w-1/2 text-sm text-gray-600 cursor-pointer">Birth date</label>
        <span className="w-1/2 text-sm">{birth_date}</span>
      </div>
      <div className="flex flex-row mt-4">
        <label className="w-1/2 text-sm text-gray-600 cursor-pointer">Gender</label>
        <span className="w-1/2 text-sm">{gender}</span>
      </div>

      <button
        className="mx-auto mt-6 w-32 h-10 px-4 py-1 border rounded-sm bg-red-600 text-white outline-none"
        onClick={event => onUserDelete(event, id)}
      >
        Delete
      </button>
    </div>
  )
}

export default UserInfo
