import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleDelete = (index) => {
        const newContacts = [...contacts];
        newContacts.splice(index, 1);
        setContacts(newContacts);
    };

    const handleAdd = (name, surname, phone) => {
        const newContacts = [...contacts];
        newContacts.push({ name, surname, phone });
        setContacts(newContacts);
        setShowForm(false);
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.surname}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showForm ? (
                <ContactForm onAdd={handleAdd} onCancel={() => setShowForm(false)} />
            ) : (
                <button onClick={() => setShowForm(true)}>Додати контакт</button>
            )}
        </div>
    );
};

export default Contacts;