// import React from 'react';

// export default function Price({ price, locale, currency}) {
//     const formatPrice = () => 
//     new Intl.NumberFormat(locale, {
//         style: 'currency',
//         currency,
//     }).format(price);
//     return <span>{formatPrice()}</span>;
// }

// Price.defaultProps = {
//     locale: 'en-US',
//     currency: 'USA',
// };

import React from 'react';

export default function Price({ price, locale, currency }) {
    const formatPrice = () => {
        // Custom currency symbol for Vietnamese Dong
        const customCurrencySymbol = 'VND';

        // Format the price without the currency symbol
        const formattedPriceWithoutSymbol = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency,
        }).formatToParts(price).map(({ type, value }) => {
            // Exclude currency symbol
            if (type !== 'currency') return value;
        }).join('');

        // Concatenate custom currency symbol to the formatted price
        return `${formattedPriceWithoutSymbol}${customCurrencySymbol}`;
    };

    return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
    locale: 'vi-VN',
    currency: 'VND',
};
