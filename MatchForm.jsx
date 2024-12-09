import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MatchForm = () => {
  const navigate = useNavigate();
  const [boy, setBoy] = useState({ name: "", birthDate: "", birthTime: "", birthCity: "" });
  const [girl, setGirl] = useState({ name: "", birthDate: "", birthTime: "", birthCity: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/match", { boy, girl });
    console.log(response.data);
    navigate("/results");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg sm:max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Kundli Matching Form</h2>

        {/* Boy's Details */}
        <h3 className="font-semibold mb-3">Boy's Details</h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setBoy({ ...boy, name: e.target.value })}
        />
        <input
          type="date"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setBoy({ ...boy, birthDate: e.target.value })}
        />
        <input
          type="time"
          placeholder="Birth Time"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setBoy({ ...boy, birthTime: e.target.value })}
        />
        <input
          type="text"
          placeholder="Birth City"
          className="w-full mb-6 p-2 border rounded-md"
          onChange={(e) => setBoy({ ...boy, birthCity: e.target.value })}
        />

        {/* Girl's Details */}
        <h3 className="font-semibold mb-3">Girl's Details</h3>
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setGirl({ ...girl, name: e.target.value })}
        />
        <input
          type="date"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setGirl({ ...girl, birthDate: e.target.value })}
        />
        <input
          type="time"
          placeholder="Birth Time"
          className="w-full mb-3 p-2 border rounded-md"
          onChange={(e) => setGirl({ ...girl, birthTime: e.target.value })}
        />
        <input
          type="text"
          placeholder="Birth City"
          className="w-full mb-6 p-2 border rounded-md"
          onChange={(e) => setGirl({ ...girl, birthCity: e.target.value })}
        />

        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Match Kundli
        </button>
      </form>
    </div>
  );
};

export default MatchForm;
