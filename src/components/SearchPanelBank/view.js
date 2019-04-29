import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';
import Logo from '../../images/Bank.png';

const cx = classnames.bind(styles);

const SearchPanelBankView = props => {
    return (<>
                <div className={cx('wrapper-logo-search')}>
                    <img className={cx('logo')} src={Logo}/>
                    <div className={cx('search-icon')}>
                        <input type='search' className={cx('search')}/>
                    </div>
                </div>
                <div className={cx('profile-wrapper')}>
                    <div className={cx('profile')}></div>    
                </div>
            </>
    );
};

export default SearchPanelBankView;
