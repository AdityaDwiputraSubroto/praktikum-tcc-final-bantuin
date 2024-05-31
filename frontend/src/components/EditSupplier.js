import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditSupplier = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getSupplierById();
  }, []);

  const updateSupplier = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://tugas-akhir-tcc-fix.as.r.appspot.com/suppliers/${id}`, {
        name,
        email,
        address,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getSupplierById = async () => {
    const response = await axios.get(`https://tugas-akhir-tcc-fix.as.r.appspot.com/suppliers/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setAddress(response.data.address);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateSupplier}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
                <input
                    type="text"
                    className="input"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSupplier;