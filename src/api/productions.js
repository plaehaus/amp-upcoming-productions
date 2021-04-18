import moment from 'moment';

const dateInitialFormat = 'MMMM D, YYYY h:mm a';
const dateDisplayFormat = 'MMMM D';

function convertDates(prod) {
    var datesRaw = prod.productionDates.ampEventDatesTimes || [];
    var dates = datesRaw.map(d =>
        moment(d.ampEventDateTime, dateInitialFormat).format('YYYY-MM-DD')
    );
    dates.sort();
    var startDate, endDate;
    if (dates.length === 1) {
        startDate = moment(dates[0]).format(dateDisplayFormat);
    } else if (dates.length >= 1) {
        startDate = moment(dates[0]).format(dateDisplayFormat);
        endDate = moment(dates[dates.length - 1]).format(dateDisplayFormat);
    }
    return {
        startDate: startDate,
        endDate: endDate
    };
}

function convertPrices(prod) {
    var pricesRaw = prod.productionTickets.ampEventTicketPrices || [];
    var prices = pricesRaw.map(t =>
        parseInt(t.ampEventPrice.replace('$', '').trim())
    );
    prices.sort((a, b) => a - b);
    var startPrice, endPrice;
    if (prices.length === 1) {
        startPrice = prices[0];
    } else if (prices.length >= 1) {
        startPrice = prices[0];
        endPrice = prices[prices.length - 1];
    }
    return {
        startPrice: startPrice,
        endPrice: endPrice
    };
}

async function getProductions() {
    let productions = undefined;
    await fetch('https://jolly-pasteur-5913c3.netlify.app/upcoming-productions.json')
        .then(r => r.json())
        .then(data => {
            console.log('data returned:', data);
            productions = data.data['productions']['edges'].map(item => {
                var prod = item.node;
                var dates = convertDates(prod);
                var prices = convertPrices(prod);
                return {
                    title: prod.title,
                    imageSrc: prod.featuredImage.node.sourceUrl,
                    startDate: dates.startDate,
                    endDate: dates.endDate,
                    startPrice: prices.startPrice,
                    endPrice: prices.endPrice,
                    link: prod.link,
                };
            });
            // TODO: too many calls to moment() in this file. Needs to be optimized/
            productions.sort((a, b) =>
                moment(a.startDate, dateDisplayFormat) - moment(b.startDate, dateDisplayFormat));
        });
    return productions;
}

export { getProductions };