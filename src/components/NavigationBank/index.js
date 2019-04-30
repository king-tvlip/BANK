import React, { PureComponent } from 'react';
import NavigationBankView from './view';

const TABS = [
    { id: 1, name: 'Главная' },
    { id: 2, name: 'Переводы и платежи' },
    { id: 3, name: 'Карты' },
    { id: 4, name: 'Кредиты' },
    { id: 5, name: 'Служба поддержки' },
    { id: 6, name: 'Настройки' },
    { id: 7, name: 'Прочее' }
];

class NavigationBank extends PureComponent {
    state = {
        active: TABS[0]
    };
    handleClick = tab => {
        this.setState({ active: tab });
    };
    render() {
        const { active } = this.state;
        return (
            <>
                <NavigationBankView onClickTab={this.handleClick} active={active} tabs={TABS} />
            </>
        );
    }
}

export default NavigationBank;
