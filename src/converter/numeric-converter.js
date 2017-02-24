import numeral from 'numeral';

export class CurrencyFormatValueConverter {
    toView(value) {
        return numeral(value).format('($0,00)');
    }
}