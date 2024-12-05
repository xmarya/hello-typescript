import { GridColDef } from "@mui/x-data-grid";
import "./users.scss";
import Table from "../../components/Table";
import { getAllUsers, deleteUser } from "../../data/users";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../../components/Modal";

const columnsDefinition: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="user-avatar" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 100,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 100,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 150,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 100,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 50,
    type: "boolean",
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/users/${params.row.id}`}>
            <img src="view.svg" />
          </Link>
          <div className="delete" onClick={() => deleteUser(params.row.id)}>
            <img src="delete.svg" />
          </div>
        </div>
      );
    },
  },
];

const userFields = ["lastName", "firstName", "email", "phone"];

export default function Users() {
  const [open, setOpen] = useState(false);
  const usersData = getAllUsers();
  return (
    <div className="users-page">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen((open) => !open)}>Add New User</button>
      </div>
      <Table columns={columnsDefinition} data={usersData} />
      {open && (
        <Modal
          formFields={userFields}
          onCloseModal={() => setOpen((open) => !open)}
        />
      )}
    </div>
  );
}
