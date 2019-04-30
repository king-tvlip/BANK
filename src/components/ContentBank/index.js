import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const ContentBank = ({ children }) => {
    return <div className={cx('wrapper-content')}>{children}</div>;
};
export default ContentBank;
