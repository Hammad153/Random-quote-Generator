const h3 = document.querySelector("h3");

function getQuote() {
  const quotes = [
    '"And indeed with Hardship comes ease["Qu`ran: 94:5"]"',
    '"Allah is with those who are patient["Qu`ran: 84:6"]"',
    '"The strongest among you is the one with the most taqwa(piety).["Prophet Muhammad(PBUH)"]"',
    '"Do not be sad, for indeed Allah is with us.["Prophet Muhammad(PBUH)"]"',
    '"The best among you are those who are the best in character.["Prophet Muhammad(PBUH)"]"',
    '"Forgiveness is closer to piety["Qu`ran: 2:237"]"',
    '"And verily with Hardship comes ease["Qu`ran: 84:5"]"',
    '"Be mindful of Allah and Allah will protect you.["Qu`ran: 2:152"]"',
    '"Be mindful of Allah and Allah will protect you.["Qu`ran: 65:2"]"',
    '"Whoever is midful of Allah, He will make a way out for him["Qu`ran: 65:2"]"',
  ];

  let randomQuoteGenerator = quotes[Math.floor(Math.random() * quotes.length)];

  h3.textContent = randomQuoteGenerator;
}

setTimeout(() => {
  getQuote();
}, 150);
