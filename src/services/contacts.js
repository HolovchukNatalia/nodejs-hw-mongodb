import { studentsCollection } from '../db/models/student.js';

export const getAllContacts = async () => {
  const contacts = await studentsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await studentsCollection.findById(contactId);
  return contact;
};
