"use client";

import React from "react";

interface UserInfoFormProps {
  formTitle: string;
  handleUsernameChange: React.ChangeEventHandler<HTMLInputElement>;
  handlePasswordChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  formCta: string;
}

export default function UserInfoForm({
  handleUsernameChange,
  handlePasswordChange,
  handleSubmit,
  formTitle,
  formCta,
}: UserInfoFormProps) {
  return (
    <>
      <h1 className="mt-2 text-center text-2xl font-bold text-blue-600 hover:text-purple-700">
        {formTitle}
      </h1>
      <form className="justify-self-center py-4 pb-8">
        <div className="py-2">
          <label
            className="text-center text-lg text-blue-700"
            htmlFor="Username"
          >
            Username{" "}
          </label>
          <input
            className="text-blue-700"
            type="text"
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="py-2">
          <label
            className="text-center text-lg text-blue-700"
            htmlFor="Username"
          >
            Password{" "}
          </label>
          <input
            className="text-blue-700"
            type="text"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-2 rounded-md bg-blue-300 p-2 font-bold text-blue-600 shadow-xl hover:text-purple-700"
          >
            {formCta}
          </button>
        </div>
      </form>
    </>
  );
}
