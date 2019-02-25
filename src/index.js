// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let objCoins = {H: 50, Q: 25, D: 10, N: 5, P: 1};
  let objMake = {};

  if (currency === 0) {
    objMake = {};
    return objMake;
  }

  if (currency > 10000) {
    objMake.error = "You are rich, my friend! We don't have so much coins for exchange";
    return objMake;
  }

  for (key in objCoins) {
    if (currency / objCoins[key] >= 1) {
      objMake[key] = Math.floor(currency / objCoins[key]);
      currency = currency % objCoins[key];
    }
  }

  return objMake;
}
