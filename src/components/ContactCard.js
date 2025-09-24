import React from "react";
import { Link } from "react-router-dom";

export default function ContactCard({ contact, clickHandler }) {
  const { id, name, email } = contact;

  const initials =
    (name || "")
      .split(" ")
      .map((s) => s[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  return (
    <div className="item">
      <div className="right floated content" style={{ display: "flex", gap: 6 }}>
        {/* Edit */}
        <Link to="/edit" state={{ contact }}>
          <button className="ui icon button blue">
            <i className="edit outline icon" />
          </button>
        </Link>
        {/* Delete */}
        <button
          className="ui icon button orange"
          onClick={() => clickHandler(id)}
        >
          <i className="trash alternate outline icon" />
        </button>
      </div>

      <div className="content" style={{ display: "flex", gap: 12 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(34,36,38,.15)",
            fontWeight: 600,
          }}
        >
          {initials}
        </div>
        <div>
          <div className="header" style={{ marginBottom: 2 }}>{name}</div>
          <div style={{ color: "rgba(0,0,0,.6)" }}>{email}</div>
        </div>
      </div>
    </div>
  );
}
