import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const InputFeedback = ({ children }) => <div className={cx('text-danger')}>{children}</div>;

const Label = ({ error, children, ...props }) => {
    return <label {...props}>{children}</label>;
};

const TextInput = ({
    field: { name, ...field }, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    className,
    label,
    ...props
}) => {
    const error = errors[name];
    const touch = touched[name];
    return (
        <div className={cx('wrapper-text-input')}>
            <Label className={cx('label-form')} htmlFor={name} error={error}>
                {label}
            </Label>
            <input id={name} className={cx('form-control')} type="text" {...field} {...props} />
            {touch && error && <InputFeedback>{error}</InputFeedback>}
        </div>
    );
};

export default TextInput;
