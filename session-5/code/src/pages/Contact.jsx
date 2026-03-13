import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 2000);

  //   useEffect(() => {
  //  navigate("/about");
  //   }, [name])

  return <div>Contact</div>;
};

export default Contact;
