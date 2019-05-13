import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';
import { NavLink } from 'react-router-dom';

const cx = classnames.bind(styles);

const NavigationBankView = props => {
    const { tabs } = props;
    return (
        <ul className={cx('wraper-navigation-bank')}>
            {tabs.map(tab => (
                <NavLink
                    key={tab.id}
                    activeClassName={cx('active')}
                    to={tab.route}
                    className={cx('navigation-bank', 'link')}
                >
                    {tab.name}
                </NavLink>
            ))}
        </ul>
    );
};
export default NavigationBankView;
