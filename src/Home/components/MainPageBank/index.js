import React from 'react';
import classnames from 'classnames/bind';
import styles from './style.scss';

const cx = classnames.bind(styles);

const MainPageBank = () => (
    <div className={cx('description-bank')}>
        <h1 className={cx('bank-name')}>Банк</h1>
        <p>
            Мы — партнёр для активных людей и компаний. Мы создаём уверенность в успехе и каждый
            день делаем их жизнь лучше.
        </p>
    </div>
);

export default MainPageBank;
