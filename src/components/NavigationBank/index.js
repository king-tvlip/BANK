import React, { PureComponent } from 'react';
import NavigationBankView from './view';

const TABS = [
    { id: 1, name: 'Главная', route: '/home' },
    { id: 2, name: 'Переводы и платежи', route: '/payments' },
    { id: 3, name: 'Карты', route: '/cards' },
    { id: 4, name: 'Кредиты', route: '/credits' },
    { id: 5, name: 'Служба поддержки', route: '/help' },
    { id: 6, name: 'Настройки', route: '/settings' },
    { id: 7, name: 'Прочее', route: '/other' }
];

class NavigationBank extends PureComponent {
    handleClick = tab => {
        // this.setState({ active: tab });
    };
    render() {
        // const { active } = this.state;
        return (
            <>
                <NavigationBankView
                    onClickTab={this.handleClick}
                    /* active={active} */ tabs={TABS}
                />
            </>
        );
    }
}

export default NavigationBank;
