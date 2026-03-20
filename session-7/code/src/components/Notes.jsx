import React from "react";
import { logout } from "../services/authServices";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      Notes
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Notes;
