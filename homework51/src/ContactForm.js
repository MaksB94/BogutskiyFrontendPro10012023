import React, { useState } from 'react';

const ContactForm = ({ onSubmit, onCancel }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`firstName ${firstName} lastName ${lastName}, phone ${phone}`)
        setFirstName('');
        setLastName('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            </label>
            <label>
                Прізвище:
                <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </label>
            <label>
                Телефон:
                <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </label>
            <button type="submit">Зберегти</button>
            <button type="button" onClick={onCancel}>Скасувати</button>
        </form>
    );
};

export default ContactForm;