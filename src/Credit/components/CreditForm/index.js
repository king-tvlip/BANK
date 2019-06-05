import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import isEmpty from 'lodash/isEmpty';
import TextInput from '../TextInput';
import classnames from 'classnames/bind';
import styles from './style.scss';
import { mapForm } from '../../../store/actions/sidesFunctions';
import { set } from 'immutable';

const cx = classnames.bind(styles);

const CreditForm = props => {
    console.log(props)
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
                    money: 1000,
                    percent: 9.9,
                    term: 1,
                    currency: "EUR"
                }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        props.history.push('/acceptance')
                        props.mapForm(values);
                    }, 1000);
                }}
                render={({ values, touched, errors, dirty }) => (
                    <Form id='form' className={cx('wrapper-credit-form')}>
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
                                label="*Сумма займа"
                                placeholder="Введите сумму"
                                component={TextInput}
                            />
                            <Field
                                type="number"
                                name="percent"
                                label="*Процент займа (%)"
                                disabled
                                component={TextInput}
                            />
                            <div className={cx('currency-wrapper')}>
                                <Field name='currency' component="select">
                                    <option value="EUR">EUR</option>
                                    <option value="DOL">DOL</option>
                                    <option value="RUB">RUB</option>
                                </Field>
                            </div>
                            <div className={cx('loan-term')}>
                                <label className={cx('title')} >*Срок займа (лет)</label>
                                <Field name='term' component="select">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="5">5</option>
                                </Field>
                            </div>

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

const mapStateToProps = state => {
    return {
        isSubmitting: state.formReducer.isSubmitting
    };
};
const mapDispatchToProps = {
    mapForm
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CreditForm)
); 
