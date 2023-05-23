import React from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';

const FormWithValidation = () => {
    const validateName = (value) => {
        let error;
        if (!value) {
            error = 'Поле "Ім\'я" є обов\'язковим';
        }
        return error;
    };
    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = 'Поле "Електронна пошта" є обов\'язковим';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = 'Невірний формат електронної пошти';
        }
        return error;
    };

    const validatePhone = (value) => {
        let error;
        if (!value) {
            error = 'Поле "Телефон" є обов\'язковим';
        } else if (!/^\d{12}$/.test(value)) {
            error = 'Номер телефону повинен містити 12 цифр';
        }
        return error;
    };
    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Formik
            initialValues={{ name: '', email: '', phone: '' }}
            onSubmit={handleSubmit}
        >
            <Form className="form">
                <div className="form-group">
                    <label htmlFor="name">Ім'я:</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        validate={validateName}
                        className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Електронна пошта:</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        validate={validateEmail}
                        className="form-control"
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Телефон:</label>
                    <Field
                        type="text"
                        id="phone"
                        name="phone"
                        validate={validatePhone}
                        className="form-control"
                    />
                    <ErrorMessage name="phone" component="div" className="error-message" />
                </div>

                <button type="submit" className="submit-button">Відправити</button>
            </Form>
        </Formik>
    );
};

export default FormWithValidation;