import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';
import dart from '../../images/dart.jpg';

import styles from './style.scss';

const cx = classnames.bind(styles);

const NotFound = () => (
    <div className={cx('wrapper')}>
        <img src={dart} alt="img" />
        <h1 className={cx('error')}>404 page not found</h1>
        <NavLink to="/home" className={cx('link')}>
            Вернуться на главную
        </NavLink>
    </div>
);

export default NotFound;
