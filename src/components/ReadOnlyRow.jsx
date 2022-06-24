import React from "react";

const ReadOnlyRow = ({ contact, handleEditContact, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={(event) => handleEditContact(event, contact)}>
          Edit
        </button>
        <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
