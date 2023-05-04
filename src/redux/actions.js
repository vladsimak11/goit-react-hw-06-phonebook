import { nanoid } from "nanoid";

export const addContact = (contactName, contactNumber) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: contactName,
      number: contactNumber
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

export const filterContacts = value => {
  return {
    type: "filters/filterContacts",
    payload: value,
  };
};