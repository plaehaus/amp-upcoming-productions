import moment from 'moment';

const dateInitialFormat = 'MMMM D, YYYY h:mm a';
const dateDisplayFormat = 'MMMM D';

function convertDates(prod) {
  var datesRaw = prod.dates.dateTimes || [];
  var dates = datesRaw.map(d =>
    moment(d.dateTime, dateInitialFormat).format('YYYY-MM-DD')
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
  var pricesRaw = prod.tickets.prices || [];
  var prices = pricesRaw.map(t =>
    parseInt(t.price.replace('$', '').trim())
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
  const url = 'https://amp-backend-plaehaus.netlify.app/.netlify/functions/upcomingProductions';
  const response = await fetch(url);
  const data = await response.json();
  let productions = data.data['productions']['edges'].map(item => {
    var prod = item.node;
    var dates = convertDates(prod);
    var prices = convertPrices(prod);
    return {
      title: prod.title,
      imageSrc: prod.image.node.url,
      startDate: dates.startDate,
      endDate: dates.endDate,
      startPrice: prices.startPrice,
      endPrice: prices.endPrice,
      link: prod.link,
    };
  });
    // FIXME: too many calls to moment().
  productions.sort((a, b) => moment(a.startDate, dateDisplayFormat) - moment(b.startDate, dateDisplayFormat));
  return productions;
}

export { getProductions };