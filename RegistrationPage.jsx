import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function RegistrationPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/register", {name, email, password, confirmPassword})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      navigate("/login");
    })
    // Handle form submission
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-100">
      <div className="bg-gradient-to-r from-orange-600 to-orange-400 shadow-md rounded-lg p-8 ">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Register at Jyotish Aloy
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
         type="text"
         id="name"
         placeholder="Enter your name"
         className="w-full px-4 py-2 border rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
         onChange={(e) => setName(e.target.value)}
       />
       
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setEmail(e.target.value)}

            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg bg-white bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setConfirmPassword(e.target.value)}

            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-green-500 hover:underline font-bold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
