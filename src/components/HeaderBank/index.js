import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles)

const HeaderBank = ({ children }) => <div className = {cx('header-wrapper')} >{children}</div>;

export default HeaderBank;
