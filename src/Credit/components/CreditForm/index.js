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
                        .min(2, 'Минимум 2 символа')
                        .required('*Обязательное поле.'),
                    lastName: Yup.string()
                        .min(2, 'Минимум 2 символа')
                        .required('*Обязательное поле.'),
                    passportSeries: Yup.number().required('*Обязательное поле'),
                    passportNumber: Yup.number().required('*Обязательное поле'),
                    bornData: Yup.string().required('*Обязательное поле'),
                    location: Yup.string().required('*Обязательное поле'),
                    money: Yup.string().required('*Обязательное поле')
                })}
                initialValues={{
                    firstName: '',
                    lastName: '',
                    passportSeries: '',
                    passportNumber: '',
                    bornData: '1997-01-01',
                    location: '',
                    money: 1000
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(`Клиенту ${values.firstName} ${values.lastName} выдан кредит на сумму: ${values.money} рублей!!!!`)
                        actions.setSubmitting(false);
                    }, 1000);
                }}
                render={({ values, touched, errors, dirty, isSubmitting }) => (
                    <Form className={cx('wrapper-credit-form')}>
                        <div className={cx('credit-form')}>
                            <Field
                                type="text"
                                name="firstName"
                                label="*Ваше имя"
                                placeholder="Введите имя...."
                                component={TextInput}
                            />
                            <Field
                                type="text"
                                name="lastName"
                                label="*Ваша фамилия"
                                placeholder="Введите фамилию...."
                                component={TextInput}
                            />
                            <Field
                                type="number"
                                name="passportSeries"
                                label="*Серия паспорта"
                                placeholder="Введите серию паспорта...."
                                component={TextInput}
                            />
                            <Field
                                type="number"
                                name="passportNumber"
                                label="*Номер паспорта"
                                placeholder="Введите номер паспорта...."
                                component={TextInput}
                            />
                            <Field
                                type="date"
                                name="bornData"
                                label="*Дата рождения"
                                placeholder=""
                                component={TextInput}
                            />
                            <Field
                                type="text"
                                name="location"
                                label="*Место рождения"
                                placeholder="Введите город"
                                component={TextInput}
                            />
                            <Field
                                type="number"
                                name="money"
                                label="*Сумма займа (руб.)"
                                placeholder="Введите сумму"
                                component={TextInput}
                            />
                            <button type="submit" className={cx('submit')}>
                                Отправить
                            </button>
                        </div>
                    </Form>
                )}
            />
        </div>
    );
};
export default CreditForm;
