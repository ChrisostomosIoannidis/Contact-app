import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

export default function ContactList({ contacts = [], getContactId }) {
  const [query, setQuery] = useState("");

  const deleteContactHandler = (id) => getContactId(id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) || c.email?.toLowerCase().includes(q)
    );
  }, [contacts, query]);

  return (
    <div className="main">
      <h2 className="ui grid">
        <div className="eight wide column">Contact List</div>
        <div className="eight wide column" style={{ textAlign: "right" }}>
          <Link to="/add">
            <button className="ui button blue">Add Contact</button>
          </Link>
        </div>
      </h2>

      <div className="ui icon input" style={{ width: "100%", marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Search Contacts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <i className="search icon" />
      </div>

      <div className="ui celled list">
        {filtered.length ? (
          filtered.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              clickHandler={deleteContactHandler}
            />
          ))
        ) : (
          <div className="item">No contacts found</div>
        )}
      </div>
    </div>
  );
}
