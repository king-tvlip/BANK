import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const NavigationBankView = props => {
    const { tabs, onClickTab, active } = props;
    return (
        <ul className={cx('wraper-navigation-bank')}>
            {tabs.map(tab => (
                <li key={tab.id} onClick={() => onClickTab(tab)} className={cx('navigation-bank',{active : active === tab} )}>
                    {tab.name}
                </li>
            ))}
        </ul>
    );
};
export default NavigationBankView;
