
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditContact({ updateContactHandler }) {
  const location = useLocation();
  const navigate = useNavigate();


  const { id, name: initName, email: initEmail } = location.state.contact;

  const [name, setName] = useState(initName);
  const [email, setEmail] = useState(initEmail);

  const update = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    updateContactHandler({ id, name, email });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}
