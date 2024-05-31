import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavbarSupplier from "./NavbarSupplier";

const SupplierList = () => {
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, []);

  const getSuppliers = async () => {
    const response = await axios.get("https://tugas-akhir-tcc-fix.as.r.appspot.com/suppliers");
    setSupplier(response.data);
  };

  const deleteSupplier = async (id) => {
    try {
      await axios.delete(`https://tugas-akhir-tcc-fix.as.r.appspot.com/suppliers/${id}`);
      getSuppliers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
      {/* <Link to={`Users`} className="button is-success">
          Member Toko
        </Link> */}
        <NavbarSupplier/>
      {/* <div>
            <center>
                <h1>Daftar Supplier Cloudmart</h1>
            </center>
        </div> */}
        <br></br>
        <br></br>
        
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier, index) => (
              <tr key={supplier.id}>
                <td>{index + 1}</td>
                <td>{supplier.name}</td>
                <td>{supplier.email}</td>
                <td>{supplier.address}</td>
                <td>
                  <Link
                    to={`editSupplier/${supplier.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteSupplier(supplier.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={`addSupplier`} className="button is-success">
          Add New
        </Link>
      </div>
    </div>
  );
};

export default SupplierList;