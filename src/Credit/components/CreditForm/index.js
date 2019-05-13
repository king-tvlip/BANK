import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import TextInput from '../TextInput';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const CreditForm = props => {
    return (
        <div className={cx('wrapper-form')}>
            <Formik
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .min(2, 'Имя должно содержать минимум 2 символа')
                        .required('Обязательное поле.'),
                    lastName: Yup.string()
                        .min(2, 'Фамилия должна содержать минимум 2 символа')
                        .required('Обязательное поле.'),
                    passportSeries: Yup.number()
                        .min(4, 'Серия паспорта должна содержать 4 цифры')
                        .required('Обязательное поле'),
                    passportNumber: Yup.number()
                        .min(5, 'Номер паспорта должен содержать 6 цифр')
                        .required('Обязательное поле'),
                    bornData: Yup.string().required('Обязательное поле'),
                    location: Yup.string().required('Обязательное поле')
                })}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    passportSeries: '',
                    passportNumber: '',
                    bornData: '',
                    location: ''
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        console.log(1);
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                render={({ values, touched, errors, dirty, isSubmitting }) => (
                    <Form className={cx('credit-form')}>
                        <Field
                            type="text"
                            name="firstName"
                            label="Ваше имя"
                            placeholder="Введите имя...."
                            component={TextInput}
                        />
                        <Field
                            type="text"
                            name="lastName"
                            label="Ваша фамилия"
                            placeholder="Введите фамилию...."
                            component={TextInput}
                        />
                        <Field
                            type="number"
                            name="passportSeries"
                            label="Серия паспорта"
                            placeholder="Введите серию паспорта...."
                            component={TextInput}
                        />
                        <Field
                            type="number"
                            name="passportNumber"
                            label="Номер паспорта"
                            placeholder="Введите номер паспорта...."
                            component={TextInput}
                        />
                        <Field
                            type="date"
                            name="bornData"
                            label="Дата рождения"
                            placeholder="Введите дату рождения"
                            component={TextInput}
                        />
                        <Field
                            type="text"
                            name="location"
                            label="Место рождения"
                            placeholder="Введите город"
                            component={TextInput}
                        />
                        <button
                            type="submit"
                            className={cx('submit')}
                            disabled={isSubmitting || !isEmpty(errors) || !dirty}
                        >
                            Отправить
                        </button>
                    </Form>
                )}
            />
        </div>
    );
};
export default CreditForm;
