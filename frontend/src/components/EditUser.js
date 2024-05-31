// EditUser.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(
        `https://tugas-akhir-cloudrun-xyz.a.run.app/users/${id}`
      );
      setName(response.data.name);
      setEmail(response.data.email);
      setGender(response.data.gender);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://tugas-akhir-cloudrun-xyz.a.run.app/users/${id}`,
        {
          name,
          email,
          gender,
        }
      );
      navigate("/users");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={updateUser}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
