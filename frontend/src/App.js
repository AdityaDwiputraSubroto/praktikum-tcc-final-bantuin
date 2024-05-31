import {BrowserRouter, Routes, Route} from "react-router-dom";
import SupplierList from "./components/SupplierList";
import AddSupplier from "./components/AddSupplier";
import EditSupplier from "./components/EditSupplier";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SupplierList/>}/>
        <Route path="addSupplier" element={<AddSupplier/>}/>
        <Route path="editSupplier/:id" element={<EditSupplier/>}/>

        <Route path="/Users" element={<UserList/>}/>
        <Route path="/addUser" element={<AddUser/>}/>
        <Route path="/editUser/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;