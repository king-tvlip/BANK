import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './style.scss';
import acceptance from '../../../images/acceptance.png'

const cx = classnames.bind(styles);

const CreditAcceptance = props => {
    const { creditData } = props;
    return (
        <div className={cx('wrapper-response')}>
            <div className={cx('response')}>
                <h1 className={cx('response__title')}>Уважаемый {creditData.fullName}, вам одобрен кредит на сумму {creditData.money} {creditData.currency}!!</h1>
                <img className={cx('response__image')} src={acceptance} />
                <h5 className={cx('response__text')}>Ваш кредит одобрели под {creditData.percent} процентов на сумму {creditData.money} {creditData.currency}, сроком на {creditData.term} лет, вы вернете в банк {creditData.refund} {creditData.currency}  </h5>
                <NavLink className={cx('link')} to="/home">Вернуться в банк</NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        creditData: state.formReducer
    }
}

const mapDispatchToProps = {

}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(CreditAcceptance)
);