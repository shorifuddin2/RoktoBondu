import React, { useState } from "react";

const PasswordChange = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    const oldPassword = e.target.oldPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(oldPassword, newPassword);
    if (newPassword !== confirmPassword) {
      return setError("Password and Confirm Password does not match!");
    }
    try {
      const response = await fetch(
        "http://localhost:4000/api/user/change-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setError("");
        e.target.reset();
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError("An error occurred while changing the password");
    }
  };
  return (
    <div className="grid grid-cols-2 mt-5">
      <div></div>
      <form onSubmit={handleChangePassword}>
        <div className="border border-blue-500 p-5 shadow-lg ">
          <div className="mb-2">
            <h5 className="text-black">
              Old Password<span className="text-primary">*</span>
            </h5>
          </div>
          <div>
            <input
              type="text"
              className="border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10 text-black"
              name="oldPassword"
              required
              id=""
            />
          </div>
          <div className="mt-3 mb-2">
            <h5 className="text-black">
              New Password<span className="text-primary">*</span>
            </h5>
          </div>
          <div>
            <input
              type="text"
              className="border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10 text-black"
              name="newPassword"
              required
              id=""
            />
          </div>
          <div className="mt-2">
            <h5 className="text-black">
              Confirm New Password<span className="text-primary">*</span>
            </h5>
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="border pl-3 rounded lg:w-full lg:h-10 md:w-full sm:w-64 sm:h-10 text-black"
              name="confirmPassword"
              required
              id=""
            />
          </div>
          {success && (
            <p className="text-red-500 pt-2">Password changed successfully</p>
          )}
          {error && <p className="text-red-500 pt-2">{error}</p>}
          <button className="px-3 py-2 bg-blue-500 text-white mt-3">
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordChange;
