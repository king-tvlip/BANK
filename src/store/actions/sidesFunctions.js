import { sendForm } from './action';

export const mapForm = formData => dispatch => {
    const moneyGain = getCurrency(formData.money, formData.percent, formData.term)
    dispatch(sendForm({
        refund: moneyGain,
        currency: formData.currency,
        money: formData.money,
        fullName: `${formData.firstName} ${formData.lastName}`,
        term: formData.term,
        percent: formData.percent
    }));

}

const getCurrency = (money, percent, term) => {
    return Math.round(money += money * (percent / 100) * term);
}

/*bornData: "1997-01-01"
currency: "EUR"
firstName: "sdsdsd"
lastName: "sdfdsfvg"
location: "ываываыцва"
money: 1000
passportNumber: 123151
passportSeries: 1234
percent: 9.9
term: 1 */